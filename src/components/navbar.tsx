import { useEffect, useState } from "react"
import "./navbar.css"

const LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#research", label: "Research" },
    { href: "#contact", label: "Contact" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        const sections = LINKS
            .map(link => document.getElementById(link.href.slice(1)))
            .filter((el): el is HTMLElement => el !== null)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        )

        sections.forEach(section => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <a href="#home" className="logo">
                Misha<span className="logo-dot">.</span>
            </a>

            <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
                {LINKS.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={activeSection === link.href.slice(1) ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <button
                className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(open => !open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    )
}

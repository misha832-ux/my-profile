import "./navbar.css"

export default function Navbar() {
    return (
        <header className="navbar">
            <h2 className="logo">Misha</h2>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )

}

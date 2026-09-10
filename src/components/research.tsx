import "./research.css"
import { useReveal } from "../hooks/useReveal"

const PUBLICATIONS = [
    {
        title: "A Study of Usability and Accessibility of Private and Public Hospital Websites in Bangladesh",
        //authors: "Maisha Chowdhury Neha, Misha Mahenur Alam, Marshia Nujhat, Umme Jannat Taposhi, Farida Chowdhury",
        venue: "COMPASS '26: Proceedings of the 2026 ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies",
        summary: "Evaluates how usable and accessible hospital websites in Bangladesh are for the people who rely on them, comparing private and public institutions.",
        link: "https://doi.org/10.1145/3811242.3827560",
    },
]

export default function Research() {
    const { ref, visible } = useReveal<HTMLElement>()

    return (
        <section id="research" ref={ref} className={`research reveal ${visible ? "is-visible" : ""}`}>
            <span className="section-kicker">05 / research</span>
            <h2 className="section-heading">Research &amp; Publications</h2>
            <div className="publication-list">
                {PUBLICATIONS.map(pub => (
                    <a key={pub.title} href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-card">
                        <div>
                            <h3>{pub.title}</h3>
                            <p className="publication-venue">{pub.venue}</p>
                            {/* <p className="publication-authors">{pub.authors}</p> */}
                            <p>{pub.summary}</p>
                        </div>
                        <span className="publication-arrow">→</span>
                    </a>
                ))}
            </div>
        </section>
    )
}
import "./education.css"
import { useReveal } from "../hooks/useReveal"

const EDUCATION = [
    {
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "BRAC University",
        period: "2022 — 2026",
        //description: "Relevant coursework, achievements, or focus areas go here.",
    },
]

export default function Education() {
    const { ref, visible } = useReveal<HTMLElement>()

    return (
        <section id="education" ref={ref} className={`education reveal ${visible ? "is-visible" : ""}`}>
            <span className="section-kicker">03 / education</span>
            <h2 className="section-heading">Education</h2>
            <div className="timeline">
                {EDUCATION.map(entry => (
                    <div key={entry.degree} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-period">{entry.period}</span>
                            <h3>{entry.degree}</h3>
                            <p className="timeline-institution">{entry.institution}</p>
                            {/* <p>{entry.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

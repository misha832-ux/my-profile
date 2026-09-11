import "./projects.css"
import { useReveal } from "../hooks/useReveal"

const PROJECTS = [
    {
        title: "Nobojatra",
        description: "A smart travel-planning web app for comparing routes, estimating fares, checking live conditions, and saving repeat journeys — all in one place.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "BetterAuth", "MongoDB", "Mongoose"],
        link: "https://nobojatra.onrender.com"
    },
    {
        title: "Study Buddy",
        description: "A web-based study management and productivity platform designed to help students organize tasks, improve focus, collaborate with classmates, and build productive study habits.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Prisma", "Zod"],
        link: "https://study-buddy-pqwb.onrender.com"
    },
    {
        title: "AI Assisted Writing Research Tool",
        description: "AI-Assisted Writing Research Tool is a research data-collection web application designed to study how people write with and without AI assistance.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Prisma", "Zod"],
        link: "https://p2-diin.onrender.com"
    },
]

export default function Projects() {
    const { ref, visible } = useReveal<HTMLElement>()

    return (
        <section id="projects" ref={ref} className={`projects reveal ${visible ? "is-visible" : ""}`}>
            <span className="section-kicker">04 / work</span>
            <h2 className="section-heading">Projects</h2>
            <div className="project-grid">
                {PROJECTS.map(project => (
                    <a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <div className="project-card-body">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <span className="project-link-row">
                            Visit project <span className="project-arrow">→</span>
                        </span>
                    </a>
                ))}
            </div>
        </section>
    )
}
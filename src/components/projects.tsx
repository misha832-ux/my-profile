import "./projects.css"
import { useReveal } from "../hooks/useReveal"

const PROJECTS = [
    {
        title: "Project One",
        description: "Replace this with a real project — what it does and the problem it solves.",
        tags: ["React", "TypeScript"],
    },
    {
        title: "Project Two",
        description: "Replace this with a real project — what it does and the problem it solves.",
        tags: ["JavaScript", "CSS"],
    },
    {
        title: "Project Three",
        description: "Replace this with a real project — what it does and the problem it solves.",
        tags: ["Node.js", "API"],
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
                    <article key={project.title} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

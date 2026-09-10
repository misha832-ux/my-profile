import "./skills.css"
import { useReveal } from "../hooks/useReveal"

const SKILL_GROUPS = [
    {
        category: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "C++"],
    },
    {
        category: "Frontend",
        items: ["React", "HTML", "CSS"],
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "Node.js", "VS Code"],
    },
]

export default function Skills() {
    const { ref, visible } = useReveal<HTMLElement>()

    return (
        <section id="skills" ref={ref} className={`skills-section reveal ${visible ? "is-visible" : ""}`}>
            <span className="section-kicker">02 / skills</span>
            <h2 className="section-heading">Skills</h2>
            <div className="skill-groups">
                {SKILL_GROUPS.map(group => (
                    <div key={group.category} className="skill-group">
                        <h3>{group.category}</h3>
                        <div className="skill-tags">
                            {group.items.map(item => (
                                <span key={item} className="skill-tag">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

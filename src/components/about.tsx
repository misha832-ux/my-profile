import "./about.css"
import { useReveal } from "../hooks/useReveal"

export default function About() {
    const { ref, visible } = useReveal<HTMLElement>()

    return (
        <section id="about" ref={ref} className={`about reveal ${visible ? "is-visible" : ""}`}>
            <div className="about-inner">
                <div>
                    <span className="section-kicker">01 / about</span>
                    <h2 className="section-heading">About Me</h2>
                    <p>I'm a CSE student and passionate about web development.</p>
                </div>
            </div>
        </section>
    )
}

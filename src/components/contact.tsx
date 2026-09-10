import "./contact.css";

import { useReveal } from "../hooks/useReveal";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    const { ref, visible } = useReveal<HTMLElement>();

    return (
        <section
            id="contact"
            ref={ref}
            className={`contact reveal ${visible ? "is-visible" : ""}`}
        >
            <div className="contact-card">
                <span className="section-kicker">06 / contact</span>

                <h2 className="section-heading">Contact Me</h2>

                <div className="contact-links">

                    {/* Gmail */}
                    <a
                        href="mailto:mishaalam832@gmail.com"
                        className="contact-link"
                    >
                        <FiMail className="contact-icon" />
                        <span>mishaalam832@gmail.com</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/misha832-ux"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <FaGithub className="contact-icon" />
                        <span>misha832-ux</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/mishamahenuralam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <FaLinkedinIn className="contact-icon" />
                        <span>Misha Mahenur Alam</span>
                    </a>

                </div>
            </div>
        </section>
    );
}

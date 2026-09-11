import { useEffect, useState } from "react"
import "./home.css"
import profileImg from "../assets/myPic.jpg";

const PROMPT_TEXT = "whoami"

export default function Home() {
    const [typed, setTyped] = useState("")

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            i += 1
            setTyped(PROMPT_TEXT.slice(0, i))
            if (i >= PROMPT_TEXT.length) clearInterval(interval)
        }, 90)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="home" id="home">
            <div className="home-glow" aria-hidden="true"></div>
            <div className="text-section">
                <p className="terminal-line">
                    <span className="terminal-prompt">misha@portfolio:~$</span> {typed}
                    <span className="cursor-blink">|</span>
                </p>
                <h1>Hello, I'm <span className="gradient-text">Misha</span></h1>
                <p>This is my portfolio</p>
                <div className="home-actions">
                    <a                
                        href={`${process.env.PUBLIC_URL}/CV.pdf`}
                        download="CV.pdf"
                        className="cv-button"
                    >
                        Download CV
                    </a>
                    <a href="#contact" className="ghost-link">Get in touch →</a>
                </div>
            </div>
            <div className="image-section">
                <div className="image-ring">
                    <img src={profileImg} alt="Misha's Profile" />
                </div>
            </div>
        </div>
    )
}

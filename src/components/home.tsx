import "./home.css"
import profileImg from "../assets/myPic.jpg";

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="text-section">
                <h1>Hello, I'm Misha</h1>
                <p>This is my portfolio</p>
                <button>Download CV</button>
            </div>
            <div className="image-section">
                <img src={profileImg} alt="Misha's Profile" />
            </div>
        </div>
    )
}
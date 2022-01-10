import { Link, Code } from "@material-ui/icons";
import { useState } from "react";
import "./contact.scss"


export default function Contact() {

    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="sumbit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
                <div className="contactIcons">
                    <a href="https://www.linkedin.com/in/sarala-k-a762a1222/" target="_blank" >
                        <Link />
                        LinkedIn
                    </a>
                    <br />
                    <a href="https://github.com/sarasuni" target="_blank">
                        <Code />
                        Github
                    </a>
                </div>
            </div>
        </div>
    )
}

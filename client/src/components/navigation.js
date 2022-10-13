import { MdOutlineMessage } from "react-icons/md";
import { BsGithub, BsInstagram } from "react-icons/bs"

export default function Navigation() {
    return (
        <nav className="nav-main">
            <i><MdOutlineMessage/></i>
            <h1>Chatting is Fun</h1>
            <span className="social-section">
                <a href="https://github.com/Kevin-Vazquez" target="_blank"><i><BsGithub/></i></a>
                <a href="https://www.instagram.com/kevin_vazquez_martinez/?next=%2F" target="_blank"><i><BsInstagram/></i></a>
            </span>
        </nav>
    );
}
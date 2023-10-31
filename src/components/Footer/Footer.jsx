import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="row">
            <p className="col">Made by Joey Wiesner</p>
            <div className="col">
                <ul className="row justify-content-center">
                    <li className="logo col-2">
                        <a href="https://github.com/BertisJoey">
                            <VscGithubAlt />
                        </a>
                    </li>
                    <li className="logo col-2">
                        <a href="https://www.linkedin.com/in/joseph-wiesner-255577159/">
                            <AiOutlineLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
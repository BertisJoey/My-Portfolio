import Image from 'react-bootstrap/Image';
import selfie from '../../assets/selfie.jpeg';

export default function About() {
    return (
        <>
            <h1>About Me</h1>
            <div className="row">
                <Image src={selfie} className="col-6" roundedCircle />
                <p className="col-6">
                    Hello, my name is Joey Wiesner. I am currently attending a Full-Stack Coding Bootcamp hosted by Michigan State University. I graduated college from MSU 5 years ago with a degree in History in December of 2017, and have worked as a social worker for the Department of Health and Human Services ever since April of 2018. My job has been fulfilling and has given me great experience, but it became clear to me in the past couple years that I do not see myself continuing a career as a social worker and I am looking to branch out.
                    <br />
                    On this website you should be able to see some of the projects I have worked on during the bootcamp, and I hope to add any future projects that I might be working on. During this bootcamp I have found a new passion and hope to switch careers towards something I see myself growing and developing in.

                </p>
            </div>
        </>
    )
}
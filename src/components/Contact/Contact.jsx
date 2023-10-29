import Form from 'react-bootstrap/form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Contact() {
    return (
        <div className="row">
            <div>
                <h1>Contact Page</h1>        
            </div>
            <div className="col">
                <h2 className="text-center">My Information</h2>
                <address>
                    Pinckney, Mi <br />
                    Phone: <a href="tel:517.290.9695">517-290-9695</a> <br />
                    Email: <a href="mailto://joeywiesner@gmail.com">joeywiesner@gmail.com</a> <br />
                    Github: <a href="https://github.com/BertisJoey">https://github.com/BertisJoey</a>
                </address>
                <p>
                    <strong>I would love to hear from you!</strong>
                </p>
            </div>
            <div className="col">
                <h2 className="text-center">Email Me</h2>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control
                            placeholder="Name here"
                            aria-label="Input Name"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                        <Form.Control
                            placeholder="Email here"
                            aria-label="Input email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Message</InputGroup.Text>
                        <Form.Control
                            placeholder="Message"
                            aria-label="Input Message"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <input className="btn btn-primary" type="submit" value="Submit"></input>
                </div>

            </div>
        </div>
    )
}
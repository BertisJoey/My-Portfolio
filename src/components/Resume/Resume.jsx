import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Resume() {
    const [isLoading, setLoading] = useState(false);
      
    useEffect(() => {
        function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
        }
      
        if (isLoading) {
        simulateNetworkRequest().then(() => {
            setLoading(false);
        });
        }
    }, [isLoading]);
      
    const handleClick = () => setLoading(true);

    return (
        <div className="row">
            <h1>Resume</h1>
            <div className="col">
                <h2 className="text-center">Download my Resume</h2>
                <div className="row justify-content-center">
                    <Button className="col-4" variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
                        {isLoading ? 'Downloading…' : 'Click to download'}
                    </Button>
                </div>
            </div>
            <div className="col">
                <h2 className="text-center">My Proficiencies</h2>
                <div className="row">
                    <Card className="col col-6 bg-info-subtle">
                        <Card.Body>
                            <Card.Title> Front End Proficiencies </Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>HTML, CSS, Javascript</li>
                                    <li>Bootstrap</li>
                                    <li>React</li>
                                    <li>Experience with 3rd Part APIs</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col col-6 bg-info-subtle">
                        <Card.Body>
                            <Card.Title> Back End Proficiencies </Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>MongoDB/Mongoose</li>
                                    <li>Node.js</li>
                                    <li>MySQL</li>
                                    <li>Sequelize</li>
                                    <li>GraphQL</li>
                                    <li>Express.js</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
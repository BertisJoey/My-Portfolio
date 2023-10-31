import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { projects } from './Projects';

export default function Portfolio() {
    return (
        <>
            <div>
                <h1>Portfolio</h1>
            </div>
            <div className="card-section row justify-content-evenly py-4">
                {projects.map((project) => (
                    <Card style={{ width: '18rem', height: '24 rem' }} className ="col-4 m-4 bg-info-subtle">
                        <Card.Img variant="top" src={project.image}/>
                        <Card.Body>
                            <Card.Title className="text-center">{project.title}</Card.Title>
                            <Card.Text>
                               {project.description}
                            </Card.Text>
                            <Link to={project.link} className="card-footer row justify-content-center">
                             <Button variant="primary">Take me there!</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
</Card>

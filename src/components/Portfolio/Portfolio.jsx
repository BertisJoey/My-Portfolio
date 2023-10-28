import { Link } from 'react-router-dom';

export default function Projects(props) {
    return (
        <div className = "card">
            <header>
                <h3>{props.name}</h3>
                {props.link}
            </header>
            {props.image}
            <p>{props.description}</p>

        </div>
    )
}
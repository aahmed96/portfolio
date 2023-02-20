import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";

function ProjectCard(cards) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={cards.imgPath} />
                <Card.Body>
                    <Card.Title className="project-title">{cards.title}</Card.Title>
                            <Card.Text className="project-desc">{cards.description}</Card.Text>
                                <a href= {cards.url} target="_blank" className="card-link"><FaGithub className="git-icon" /></a>
                </Card.Body>
        </Card>
    )
}

export default ProjectCard
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(cards) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={cards.imgPath} />
                <Card.Body>
                    <Card.Title className="project-title">{cards.title}</Card.Title>
                            <Card.Text className="project-desc">{cards.description}</Card.Text>
                                <Button href= {cards.url} variant="primary">Gitub</Button>
                </Card.Body>
        </Card>
    )
}

export default ProjectCard
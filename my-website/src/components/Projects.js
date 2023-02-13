import {Row, Col, Container} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Drums from "../assets/drum_classifier.jpeg"

function Projects () {
    return(
        <section className='projects' id='projects'>
            <Container>
                <Row className='align-items-center'>
                    <h1 className="title">Projects</h1>
                </Row>
                <Row className ='align-items-center'>
                    <Col xs ={12} xl={4}>
                        <ProjectCard
                        imgPath={Drums}
                        title="Drum Classifier"
                        description="A multi-class CNN to classifiy seven classes of drums samples; Kicks, Claps, Crashes, Toms, Hi-Hats, Snares and Percussion. The aggregated accuracy for this model is 82%"
                        url = 'https://github.com/aahmed96/Drum_Classification'
                        />

                        <ProjectCard
                        imgPath={Drums}
                        title="COVID-19 Diagnosis using X-Rays"
                        description="CNN for multi-class prediction of COVID-19!"
                        />

                    </Col>
                    <Col xs ={12} xl={4}>
                    <ProjectCard
                        imgPath={Drums}
                        title="COVID-19 Tracker"
                        description="CNN to classifiy drum sounds!"
                        />

                    <ProjectCard
                        imgPath={Drums}
                        title="Dynamic Forecaster"
                        description="CNN for multi-class prediction of COVID-19!"
                        />
                        
                    </Col>
                    <Col xs ={12} xl={4}>
                    <ProjectCard
                        imgPath={Drums}
                        title="EURO 2020 Prediction Game"
                        description="CNN to classifiy drum sounds!"
                        />

                        <ProjectCard
                        imgPath={Drums}
                        title="Backdoor attacks"
                        description="CNN for multi-class prediction of COVID-19!"
                        />
                        
                    </Col>
                    
                    
                </Row>
            </Container>
        </section>
    )
}

export default Projects

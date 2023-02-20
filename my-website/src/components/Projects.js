import {Row, Col, Container} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Drums from "../assets/drum_classifier.jpeg";
import Euros from "../assets/euro-2020.jpg";
import CovidTracker from "../assets/covid-tracker.png";
import Forecaster from "../assets/time-series.gif";

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
                        description="A multi-class CNN developed using Tensorflow to classifiy seven classes of drums samples; Kicks, Claps, Crashes, Toms, Hi-Hats, Snares and Percussion. Aggregated accuracy: 82%"
                        url = 'https://github.com/aahmed96/Drum_Classification'
                        />

                    </Col>
                    <Col xs ={12} xl={4}>
                    <ProjectCard
                        imgPath={CovidTracker}
                        title="COVID-19 Tracker"
                        description="An interactive dashboard developed using Dash and Python that tracks the current numbers pertaining to COVID-19 cases across the globe."
                        url = "https://github.com/aahmed96/COVID19-Dashboard"
                        />

                    </Col>
                    <Col xs ={12} xl={4}>
                    <ProjectCard
                        imgPath={Forecaster}
                        title="Dynamic Forecaster"
                        description="A timeseries framework that iterates over a temporal dataset and fits various different models and outputs the result in the form of plots and accuracy (MAPE)."
                        url = "https://github.com/aahmed96/Dynamic-Forecaster"
                        />
                        
                    </Col>
                    </Row>
                    <Row className ='align-items-center'>
                    <Col className = 'align-items-center' xs ={12} xl={4}>
                    <ProjectCard
                        imgPath={Euros}
                        title="EURO 2020 Prediction Game"
                        description="A prediction game for the EUROs 2020 developed using Django and backed by a relational database (PostgreSQL) hosted on AWS"
                        url = "https://github.com/aahmed96/Euros-Prediction-Game"
                        />
                        
                    </Col>
                    </Row>
                    
                    
                
            </Container>
        </section>
    )
}

export default Projects

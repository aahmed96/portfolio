import { Container, Row, Col} from "react-bootstrap";
import NYU from "../assets/nyu-logo-full.png";
import TU from "../assets/trinity-logo.png";
import Card from "react-bootstrap/Card";

function About () {
    return (
       
        <Container className ="about" id="about">
               
            <div className="title">About Me</div>
               <Row className = "about-education">
                <Col xs={12} xl={6}>
                    <Card className="about-card-view">

                        <Card.Link href = "https://www.nyu.edu"/>
                        <Card.Img class="about-card-img-top" src={NYU}/>
                        <Card.Title> Master of Science in Computer Engineering</Card.Title>
                        <Card.Text>Specialization in Machine Learning</Card.Text>
                    </Card>
                </Col>
                    <Col xs={12} xl={6}>
                        <Card className="about-card-view">
                            <Card.Link href = "https://trinity.edu"></Card.Link>
                            <Card.Img class = "about-card-img-top" src={TU}></Card.Img>
                            <Card.Title> Bachelor of Science in Engineering Science</Card.Title>
                            <Card.Text>Minor in Mathematics</Card.Text>

                        </Card>

                 
                    </Col>
                </Row>


                
                   
                
                        <p>"I'm a creator at heart - whether I'm making beats, building websites, or making my utlimate team on FIFA. I live for the thrill of bringing new ideas to life. It all started with a laptop and a love for music, heavily inspired by Eminem, where I would write my own raps, create beats, and record a muddy rap vocal using fake apple earbuds. As I grew older, my passion for creating evolved into programming, where I found my calling in Machine Learning and Artificial Intelligence. There's something magical about utilizing data that gets me excited!
                            <br></br> </p>
                        <p>
                        When I'm not coding or diving deep into a data set, you can find me online on PSN, stealth-killing clickers on the Last of Us or trying to get that coveted Division 1 title on FIFA. Gaming helps me creatively think and brings out my competitive nature, pushing me to do better and try new things. And when I'm not gaming, you can find me at the gym pushing myself to bench a "respectable" weight (or as I like to call it, debugging my chest).<br></br>

Life is all about pushing yourself to be better and to create better. I never let myself get too comfortable, because I know that's the enemy of progress. Join me on this journey to create, to learn and to live!"</p>
                  
               

            
        </Container>
      
    )
}

export default About
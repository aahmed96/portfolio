// Body of my website 
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { useState, useEffect} from "react";
import Avatar from "/Users/Adil1/react-projects/portfolio/my-website/src/assets/Profile-Pic.JPG";
import { Container, Row, Col} from "react-bootstrap";
function Body () {

    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Machine Learning Engineer", "Data Scientist", "Music Producer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
    
    return (
        <section className="banner" id="body">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md={6} xl={7}>
                        <span className="tagline">Welcome to my World</span>
                        <h1>Hey! I'm a <span className="wrap">{text}</span></h1>
                        <p>I am a highly enthusiastic and motivated Data Scientist with a passion for deep learning & machine learning. I received my MSc from NYU, where I developed a solid foundation in AI & ML technologies. I have hands-on experience working as a software engineer in a data-focused consultancy, and have a track record of delivering end-to-end machine learning solutions for clients across the apparel, cosmetic and pharmaceutical industries. </p>
                    </Col>

                    <Col xs = {12} md={6} xl={5}>
                        <img src={Avatar} alt="Profile Picture"/>
                    </Col>
                </Row>
            </Container>
        </section>
    
    ) 
}

export default Body;
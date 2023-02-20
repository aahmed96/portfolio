import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaSoundcloud, FaHandHoldingHeart, FaHeart} from 'react-icons/fa';
import { Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <Row className="footer-contact-info">
                <div className="footer-title">Let's Connect</div>
                
            </Row>
            <Row clasName='align-items-center'>
                <Col>
                <div>Crafted with <FaHeart style={{color: '#49326B'}} /> by Adil Ahmed</div>
                </Col>
                <div className="social-icons">
                    <a href="https://instagram.com/adilahmed96?igshid=YmMyMTA2M2Y=" target="_blank"><i><FaInstagram /></i></a>
                    <a href="https://twitter.com/adilahmed420" target="_blank"><i><FaTwitter /></i></a>
                    <a href="https://soundcloud.com/user-453753064" target="_blank"><i><FaSoundcloud /></i></a>
                    <a href="mailto:aa8436@nyu.edu"><i><FaEnvelope /></i></a>

                </div>
            </Row>
        </footer>
    )
}

export default Footer;
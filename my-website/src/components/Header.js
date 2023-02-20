// The header component of my website 
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { useState, useEffect } from "react";
import Resume from "../assets/Resume.pdf"

//we create a useState function to highlight what page we are on! 

function Header () {
    const [activeLink, setActiveLink] = useState('About');
    const [scrolled, setScrolled] = useState(false);

    //function for checking scroll
    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false)
        }
    }

    window.addEventListener("scroll",onScroll)

    return () => window.removeEventListener("scroll", onScroll)
} ,[])

    const onUpdateActiveLink = (x) => {
        setActiveLink(x);
    }
    return (
        <Navbar expand="lg" className={scrolled ?  "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#body">
          <a className="first" >A</a>
          <a className="second">A</a>
          
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link href="#about" className = {activeLink === 'Body' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('body')}>About Me</Nav.Link>
              <Nav.Link href="#skills" className = {activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className = {activeLink === 'Project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#footer" className = {activeLink === 'Footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('footer')}>Connect</Nav.Link>
              
            </Nav>

            <span className="navbar-text">
                <div className = "social-icon">
                    <a href = "https://www.linkedin.com/in/adilahmed96/" target = "_blank" rel = "nonrefferer" className = "icon-link"><i><FaLinkedin /></i></a>
                    <a href = "https://github.com/aahmed96" target = "_blank" rel = "nonrefferer" className = "icon-link"><i><FaGithub /></i></a>
                </div>

                <button className="vvd" onClick={() => window.open(Resume, '_blank', 'noopener,noreferrer')}><span>My Resume </span></button>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;
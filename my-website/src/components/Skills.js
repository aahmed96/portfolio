import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker, FaPython, FaPytorch } from "react-icons/fa";
import { SiPytorch, SiTensorflow, SiPostgresql, SiDjango, SiMysql, SiMicrosoftazure, SiSwift } from "react-icons/si";
import { Container, Row, Col} from "react-bootstrap";
function Skills () {
    const skillsArr = [
        {
            "name" : "Python",
            "icon" : FaPython
        },
        {
            "name" : "Pytorch",
            "icon" : SiPytorch
        },
        {
            "name" : "Tensorflow",
            "icon" : SiTensorflow
        },
        {
            "name" : "Django",
            "icon" : SiDjango
        },
        {
            "name" : "Azure",
            "icon" : SiMicrosoftazure
        },
        {
            "name" : "Swift",
            "icon" : SiSwift
        },
        {
            "name" : 'JavaScript',
            "icon" : FaJs
        },
        {
            "name" : "HTML",
            "icon" : FaHtml5
        },
        {
            "name" : "CSS",
            "icon" : FaCss3
        },
        {
            "name" : "Git",
            "icon" : FaGithub
        },
        {
            "name" : "Reactjs",
            "icon" : FaReact
        },
        {
            "name" : "SQL",
            "icon" : SiMysql
        },
        
    ];
    
    return (
        <section id="skills" className="skills-new">
        <Container>
            <Row className='align-items-center'>
            <h3 className = 'title'> Skills </h3>
            </Row>
            <Row className='align-items-center'>
            
            <div className = 'skill-holder'>
                
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <i key= {index} className = 'skill-cards'>
                                <Icon className = 'skill-icon' />
                                <p className = 'skill'>
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })
                }
            
            </div>
            
            
            </Row>
        </Container>
        </section>

    )
}

export default Skills
import { Container, Row, Col} from "react-bootstrap";

function About () {
    return (
        <section className ="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md={6} xl={4}>
                    <span className="about-heading">About Me</span>
                    <span>
                        <li>Master of Science in Computer Engineering</li>
                        <li>Bachelor of Science in Engineering Science</li>

                    </span>
                    </Col>
                    <Col xs = {12} md={6} xl={8}>
                        <p>I am a highly enthusiastic and motivated Data Scientist with a passion for deep learning & machine learning. I received my MSc from NYU, where I developed a solid foundation in AI & ML technologies. I have hands-on experience working as a software engineer in a data-focused consultancy, and have a track record of delivering end-to-end machine learning solutions for clients across the apparel, cosmetic and pharmaceutical industries.

I am highly skilled in Python and proficient in several machine learning frameworks, specifically PyTorch and Tensorflow. My experience includes building REST-APIs, generating data visualization dashboards, and utilizing tools like Tableau and Power BI for reporting. I also have experience in data wrangling, computer vision, and in creating relational database systems. Additionally, I have worked on passion projects which required me to create interactive web applications using Django, React, and Flask.

Besides my technical skills, I am also a music producer, which has enhanced and built on my creative thinking which I regularly apply to Software Development. My diverse range of interests and experiences give me unique perspectives that allow me to thrive in roles that require innovative solutions to complex problems. I am very passionate about what I do and am always looking for opportunities to expand my skill set in these areas.</p>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default About
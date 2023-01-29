// Body of my website 
import { FaGithub, FaLinkedin} from "react-icons/fa";
import Avatar from "/Users/Adil1/react-projects/portfolio/my-website/src/assets/Profile-Pic.JPG";

function Body () {
    return (
        <div id= "body" className = "body">
            <div className = "body-container">
                <div className = "body-profile">
                    <img className = "body-img" alt='profile-pic' src = {Avatar} />
                    <div className= "body-content">
                        
                        <div className = "body-headline">
                            Adil Ahmed
                        </div>
                        
                        <h3 className = "body-content">
                            Software Engineer - AI & ML
                        </h3>

                        <div className = "body-icons">
                            <a href = "https://www.linkedin.com/in/adilahmed96/" target = "_blank" rel = "nonrefferer" className = "icon-link"><i><FaLinkedin /></i></a>
                            <a href = "https://github.com/aahmed96" target = "_blank" rel = "nonrefferer" className = "icon-link"><i><FaGithub /></i></a>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Body;
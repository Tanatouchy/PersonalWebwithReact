import {Link,NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo_t.png'
import LogoSubtitle from '../../assets/images/logo_touch.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHome,faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faFacebook,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = ()=>(
    <div className="nav-bar">
        <Link className='logo'to="/">
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo'src={LogoSubtitle} alt='tanakittouch'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/tanakit-tanayapong-963a4a19b/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/tanakit.tanayapong">
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/tanakittouch/">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="blank"
                    rel="noreferrer"
                    href="https://github.com/Tanatouchy">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        
    </div>
)
export default Sidebar
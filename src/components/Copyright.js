import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../styles/copyright.css'

export default function Copyright(){
    return(
        <div className='footer-copy-content'>
            <div className='copy-right-container'>
                <span>Copyright &copy; 2023 Lorem Ipsum. All rights reserved. | AGDP IT Solutions</span>
            </div>
            <div className='icon-container'>
                <div><FontAwesomeIcon icon={faLinkedin} style={{color:'#FFFFFF'}} /></div>
                <div><FontAwesomeIcon icon={faFacebook} style={{color:'#FFFFFF'}} /> </div>
                <div><FontAwesomeIcon icon={faInstagram} style={{color:'#FFFFFF'}} /></div>
                <div><FontAwesomeIcon icon={faYoutube}  style={{color:'#FFFFFF'}} /></div>
            </div>
        </div>
    )
}
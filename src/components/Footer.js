import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'

export default function Footer(){
    return (
        <footer>
            <div className='footer-content-wrapper'>
                <div className='footer-content'>
                    <div className='get-started'>
                        <h4>Get Started</h4>
                        <ul>
                            <li>Login</li>
                            <li>Join Our Group</li>
                            <li>Visit Our Group</li>
                            <li>30 Day Trial Membership</li>
                        </ul>
                    </div>
                    <div className='about'>
                        <h4>About</h4>
                        <ul>
                            <li>Why Lorem Ipsum?</li>
                            <li>Our Story</li>
                            <li>Community Involvement</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className='contact'>
                        <h4>Contact Us</h4>
                        <address>4517 Washington Ave. Manchester, Kentucky 39495</address>
                        <a href="(555) 543 - 7653">(555) 543 - 7653</a>
                    </div>
                    <div className='company-logo'>
                        <Image src='/images/NLX_Logo_Main_1.png' width={100} height={100} alt='company-logo'/>
                        <button>Join Our Group</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <span>Copyright &copy; 2023 Lorem Ipsum. All rights reserved. | AGDP IT Solutions</span>
                </div>
                <div className='bg-black flex'>
                    <div><FontAwesomeIcon icon={faLinkedin} style={{color:'#FFFFFF',borderRadius:'100px'}} /></div>
                    <div><FontAwesomeIcon icon={faFacebook} style={{color:'#FFFFFF',borderRadius:'100px'}} /> </div>
                    <div><FontAwesomeIcon icon={faInstagram} style={{color:'#FFFFFF',borderRadius:'100px'}} /></div>
                    <div><FontAwesomeIcon icon={faYoutube}  style={{color:'#FFFFFF',borderRadius:'100px'}} /></div>
                </div>
            </div>
        </footer>
    )
}
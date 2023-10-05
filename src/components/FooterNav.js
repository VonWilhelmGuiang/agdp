import Image from 'next/image';
import Link from 'next/link';
import '../styles/footer-nav.css'

export default function FooterNav(){
    return(
        <div className='footer-content'>
            <div className='get-started'>
                <h4>Get Started</h4>
                <ul>
                    <li><Link href="#">Login</Link></li>
                    <li><Link href="#">Join Our Group</Link></li>
                    <li><Link href="#">Visit Our Group</Link></li>
                    <li><Link href="#">30 Day Trial Membership</Link></li>
                </ul>
            </div>
            <div className='about'>
                <h4>About</h4>
                <ul>
                    <li><Link href="#">Why Lorem Ipsum</Link>?</li>
                    <li><Link href="#">Our Story</Link></li>
                    <li><Link href="#">Community Involvement</Link></li>
                    <li><Link href="#">Press</Link></li>
                </ul>
            </div>
            <div className='contact'>
                <h4>Contact Us</h4>
                <address>4517 Washington Ave. Manchester, Kentucky 39495</address>
                <span>(555) 543 - 7653</span>
            </div>
            <div className='company-logo'>
                <Image src='/images/NLX_Logo_Main_2.png' width={150} height={150} alt='company-logo'/>
                <button>Join Our Group</button>
            </div>
        </div>
    )
}
import '../styles/footer.css'
import FooterNav from './FooterNav';
import Copyright from './Copyright';

export default function Footer(){
    return (
        <footer>
            <div className='footer-content-wrapper'>
                <FooterNav />
            </div>
            <div className='footer-copy-right-wrapper'>
                <Copyright />
            </div>
        </footer>
    )
}
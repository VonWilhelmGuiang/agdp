import Image from 'next/image';
import '../styles/header.css'
import HeaderNav from './HeaderNav';

export default function Header(){
    return(
        <header>
            <div className='nav-wrapper md:flex md:justify-center'>
                <div className='logo-container'>
                    <Image src='/images/NLX_Logo_Main_1.png' width={100} height={100} alt='company logo'/>
                </div>
                <HeaderNav />
            </div>
        </header>
    )
}
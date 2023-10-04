import Image from 'next/image';
import '../styles/header.css'
import Link from 'next/link';

export default function Header(){
    return(
        <header>
            <div className='nav-wrapper md:flex md:justify-center'>
                <div className='logo-container'>
                    <Image src='/images/NLX_Logo_Main_1.png' width={100} height={100} alt='company logo'/>
                </div>
                <div className='nav-container'>
                    <nav>
                        <ul className='flex'>
                            <li><Link href='#'>Home</Link></li>
                            <li><Link href='#'>Why NLX</Link></li>
                            <li><Link href='#'>News</Link></li>
                            <li><Link href='#'>Events</Link></li>
                            <li className='group-find'><Link href='#'>Finds A Group</Link></li>
                            <li className='group-start'><Link href='#'>Start A Group</Link></li>
                            <li><Link href='#'>Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
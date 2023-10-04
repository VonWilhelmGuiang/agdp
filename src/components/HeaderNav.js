import Link from 'next/link';
import '../styles/nav.css'

export default function HeaderNav(){
    return(
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
    )
}
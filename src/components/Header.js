import Image from 'next/image';

export default function Header(){
    return(
        <header>
            <div className='flex'>
                <div className='w-1/3'>
                    <Image src='/images/NLX_Logo_Main_1.png' width={100} height={100}/>
                </div>
                <div className='w-2/3'>
                    <nav>
                        <ul className='flex justify-between'>
                            <li>Home</li>
                            <li>Why NLX?</li>
                            <li>News</li>
                            <li>Events</li>
                            <li>Finds A Group</li>
                            <li>Start A Group</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
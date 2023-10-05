import Image from 'next/image';
import '../styles/hero.css';

export default function Hero(){
    return(
        <div>
            <div className='hero-image-container'>
                <Image src='/images/hero.png' fill alt='hero-image'/>
            </div>
            <div className='site-title-container'>
                <div className='site-title'>
                    <div className='title'>
                        <h3>Lorem Ipsum dolor sit</h3>
                    </div>
                    <div className='sub-title'>
                        <span>Neque porro quisquam est, qui dolorem ipsum</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from 'next/image';

export default function Hero(){
    return(
        <div>
            <div>
                <Image src='/images/hero.png' layout="responsive" width={100} height={100} />
            </div>
            <div style={{position:'absolute',top:300}}>
                <div>
                    <h2>Lorem Ipsum dolor sit</h2>
                </div>
                <div>
                    <h3>Neque porro quisquam est, qui dolorem ipsum</h3>
                </div>
            </div>
        </div>
    )
}
import '../app/globals.css'
import Footer from './Footer'
import Header from './Header'


export default function Layout({children}){
    return(
        <div className='layout-wrapper' style={{maxWidth:'1500px', margin:'0 auto'}}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
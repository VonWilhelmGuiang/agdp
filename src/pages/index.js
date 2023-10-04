import Hero from "@/components/Hero";
import Filter from "@/components/Filter";
import MeetingList from "@/components/MeetingList";
import '../styles/Home.css'

export default function home(){
    return(
        <div>
            <Hero/>
            <div className="page-title">
                <h3 className="intro">Neque porro quisquam est:</h3>
                <h3 className="title">Ut enim ad minim veniam</h3>
                <span className="sub-title">Neque porro quisquam est, qui dolorem ipsum</span>
            </div>
            <div className="main-content">
                <div>
                    <Filter/>
                </div>
                <div>
                    <MeetingList/>
                </div>
            </div>
        </div>
    )
}
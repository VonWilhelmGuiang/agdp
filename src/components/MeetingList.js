import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faLocationDot, faUserGroup, faVideo} from "@fortawesome/free-solid-svg-icons"
import '../styles/meeting-list.css';
import { useState } from "react";

export default function MeetingList(){
    /*
        meeting types
        1 - in person
        2 - virtual
        3 - virtual and in person
    */
    const [viewHeight , setViewHeight] = useState(1000)
    const [list , setList] = useState([
        {
            'global': true,
            'title': 'Ut Enim Ad Minim Veniam',
            'meeting_type': 1
        },
        {
            'global': false,
            'title': 'Neque Porro Quisquam Est',
            'meeting_type': 3
        },
        {
            'global': false,
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'meeting_type': 2
        },
        {
            'global': true,
            'title': 'Qui Dolorem Ipsum Quia Dolor Sit Amet',
            'meeting_type': 1
        },
        {
            'global': false,
            'title': 'Quis Nostrud Exercitation Ullamco Laboris Nisi',
            'meeting_type': 3
        },
        {
            'global': false,
            'title': 'Sed So Eiusmod Tempor Incididunt Ut Labore',
            'meeting_type': 2
        },
        {
            'global': true,
            'title': 'Ut Enim Ad Minim Veniam',
            'meeting_type': 1
        },
        {
            'global': false,
            'title': 'Neque Porro Quisquam Est',
            'meeting_type': 3
        },
        {
            'global': false,
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'meeting_type': 3
        }
    ]);
   

    const list_view = list.map((item,count)=>{
        return(
            <div className="meeting-item" key={count}>
                <div className="location-type">
                    <span><FontAwesomeIcon className="location-icon" icon={item.global?faGlobe:faLocationDot} /></span> 
                    <span>{item.global?'GLOBAL':'LOCAL'} </span>
                    {/* linear gradient background for icons */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" >
                            <defs>
                            <linearGradient id="lgrad" x1="50%" y1="0%" x2="50%" y2="100%" >
                                
                                    <stop offset="0%" style={{stopColor:'rgb(62,210,255)',stopOpacity:1.00}} />
                                    <stop offset="99%" style={{stopColor:'rgb(24,57,216)',stopOpacity:1.00}} />

                                </linearGradient>
                            </defs>
                        </svg>
                    {/* end */}
                </div>
                <div className="meeting-title">
                    <h5>{item.title}</h5>
                </div>
                <div className="meeting-type">
                    {
                        item.meeting_type === 2 || item.meeting_type === 3?
                            <div className="type online">
                                <span><FontAwesomeIcon icon={faVideo}/></span>
                                <span>Virtual</span>
                            </div>
                        :''
                    }
                    {
                        item.meeting_type === 1 || item.meeting_type === 3?
                            <div className="type inperson">
                                <span><FontAwesomeIcon icon={faUserGroup}/></span>
                                <span>In Person</span>
                            </div>
                        :''
                    }
                    {/* linear gradient background for icons */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" >
                        <defs>
                            <linearGradient id="lgrad-meeting-type" x1="50%" y1="0%" x2="50%" y2="100%" >
                                <stop offset="0%" style={{stopColor:'rgb(223,237,90)',stopOpacity:1.00}} />
                                <stop offset="99%" style={{stopColor:'rgb(71,152,11)',stopOpacity:1.00}} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="visit-btn-container"> <button>Visit Group</button> </div>
            </div>
        )
    })

    const adjustView = () => {
        setViewHeight(viewHeight+300)
        setList([ ...list,
            {
                'global': true,
                'title': 'Ut Enim Ad Minim Veniam',
                'meeting_type': 1
            },
            {
                'global': false,
                'title': 'Neque Porro Quisquam Est',
                'meeting_type': 3
            },
            {
                'global': false,
                'title': 'Lorem Ipsum Dolor Sit Amet',
                'meeting_type': 3
            }
        ])
        console.log(list)
    }

    return(
        <div className="meeting-lists">
            <div className="title">
                <div><h2>Commodo Con</h2></div>
            </div>
            <div className="meeting-items-container" style={{height:viewHeight}}>
                {list_view}
            </div>
            <div className="load-more-container">
                <div className="load-more">
                    <button onClick={()=>{adjustView()}}>Load More</button>
                </div>
            </div>
        </div>
    )
}
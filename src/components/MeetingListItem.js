import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faLocationDot, faUserGroup, faVideo} from "@fortawesome/free-solid-svg-icons"
import '../styles/meeting-list-item.css'

export default function MeetingListItem(props){
    const {item, itemKey} = props;
    return(
        <div className="meeting-item">
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
}
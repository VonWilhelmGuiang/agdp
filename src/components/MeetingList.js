
import '../styles/meeting-list.css';
import MeetingListItem from "./MeetingListItem";
import { useState, Fragment } from "react";

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
            <Fragment key={count}>
                <MeetingListItem 
                    item={item}
                />
            </Fragment>
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
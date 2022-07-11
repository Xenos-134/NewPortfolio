import {WINDOS_TYPES_ENUM} from "../pages/index.js"
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {BrowserView, MobileView} from 'react-device-detect';


export default function AboutMe({window, changeWindowPosition}) {


    return (
        <div className="about_me">
        <MobileView>
            <div className="about_me_title_mobile">
                <p>ABOUT ME</p>
            </div>
        </MobileView>
        <BrowserView>
            <div className="about_me_title">
                <pre>
                    <code style={{"color":"black"}}>{`
    -----------------------------------
                ABOUT ME
    -----------------------------------
                    `}</code>
                </pre>  
            </div>
        </BrowserView> 
        <div className="about_me_text">
            <p>&emsp;Hi, my name is Artem. I like to use my programing skills to solve real-word problems.<br/>
               &emsp;Currently I&apos;m Computer Science Student at Superior Institute of Technology, Lisbon.</p> 
        </div>
        <div className="about_me_text">
            <p>
                &emsp; <b>NAME: </b> Artem Mordan<br/><br/>
                &emsp; <b>AGE: </b> 23<br/><br/>
                &emsp; <b>CURRENT OCCUPATION: </b> Studet<br/><br/>
                &emsp; <b>CURRENT LOCATION: </b> Lisbon, Portugal<br/><br/>
                &emsp; <b>GITHUB PROFILE: </b> Xenos-134<br/><br/>
            </p> 
        </div>
    </div>
    )
}
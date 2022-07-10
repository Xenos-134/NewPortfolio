import {WINDOS_TYPES_ENUM} from "../pages/index.js"
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


export default function MySkills() {
    return (
        <div className="my_skills">
        <p className="my_skills_title">Libraries and Frameworks</p>
        <div className="badges">

            <div className="badge">
                <img src={"./badges/react_native.png"}  className="ms_badge"  alt="react_badge"/>
                <p>React</p>
            </div>

            <div className="badge">
                <img src={"./badges/react_native.png"}  className="ms_badge"  alt="react_badge"/>
                <p>React Native</p>
            </div>

            <div className="badge">
                <img src={"./badges/next.svg"}  className="ms_badge"  alt="react_badge" style={{scale: "0.83"}}/>
                <p>Next</p>
            </div>

            <div className="badge">
                <img src={"./badges/node.png"}  className="ms_badge"  alt="react_badge" />
                <p>Node</p>
            </div>

            <div className="badge">
                <img src={"./badges/express.png"}  className="ms_badge"  alt="react_badge" style={{scale: "0.85"}}/>
                <p>Express</p>
            </div>


            <div className="badge">
                <img src={"./badges/django.png"}  className="ms_badge"  alt="react_badge" style={{scale: "0.9"}}/>
                <p>Django</p>
            </div>


            <div className="badge">
                <img src={"./badges/mysql.png"}  className="ms_badge"  alt="react_badge" />
                <p>MySQL</p>
            </div>


            <div className="badge">
                <img src={"./badges/mongodb.svg"}  className="ms_badge"  alt="react_badge" style={{scale: "0.85"}}/>
                <p>MongoDB</p>
            </div>


            <div className="badge">
                <img src={"./badges/three.png"}  className="ms_badge"  alt="react_badge" style={{scale: "0.85"}}/>
                <p>Three.js</p>
            </div>
        </div>


        <p className="my_skills_title">Languages</p>
        <div className="badges">

            <div className="badge">
                <img src={"./badges/js.png"}  className="ms_badge"  alt="react_badge" style={{scale: "0.8"}}/>
                <p>JS</p>
            </div>

            <div className="badge">
                <img src={"./badges/java.png"}  className="ms_badge"  alt="react_badge" style={{scale: "0.85"}}/>
                <p>Java</p>
            </div>

            <div className="badge">
                <img src={"./badges/c.png"}  className="ms_badge"  alt="react_badge" style={{scale: "1.2"}}/>
                <p>C</p>
            </div>

            <div className="badge">
                <img src={"./badges/cs.png"}  className="ms_badge"  alt="react_badge" style={{scale: "0.9"}}/>
                <p>C#</p>
            </div>

            <div className="badge">
                <img src={"./badges/py.png"}  className="ms_badge"  alt="react_badge" style={{scale: "0.9"}}/>
                <p>Python</p>
            </div>
        </div>
    </div>
    )
}
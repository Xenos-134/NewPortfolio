import {WINDOS_TYPES_ENUM} from "../pages/index.js"
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import AboutMe from "../components/about_me.js"
import MySkills from "./my_skills.js";
import SomeProjects from "./some_projects.js";
import SomeProjectsDescription from "./some_projects_description.js";
import ContactMe from "./contact_me.js";

export default function ProgramWindow({window, closeWindow, changePosition, createNewWindow}) {
    
    function changeWindowPosition(x, y) {
        const window_coppy = window;
        window_coppy.x = x;
        window_coppy.y = y;
        //console.log("WILL CAHNGE POSITION OF ", window.id, "TO ", x, y);
        changePosition(window_coppy);
    }

    function closeThisWindow() {
        console.log("WILL CLOSE WINDOW ", window.id)
        closeWindow(window.id)
    }

    return (
        <Draggable
            handle=".drag_zone"
            allowAnyClick
            position={{x:window.x, y: window.y}}
            grid={[5, 5]}
            scale={1}
            onStart={()=>{console.log("begin")}}
            onDrag={()=>{console.log("drag")}}
            onStop={(e, data)=>{console.log(data.x, data.y); changeWindowPosition(data.x, data.y)}}>
                <div className='window' style={{zIndex: window.zIndex}}>
                    <div className='window_top'>
                        <div className="drag_zone">
                            <p>{WINDOS_TYPES_ENUM[Object.keys(WINDOS_TYPES_ENUM)[window.type]].name}</p>
                        </div>
                        <divs>
                            <button className='window_top_button' onClick={()=>console.log("WILL NOT SHOW")}>
                            _
                            </button>
                            <button className='window_top_button' onClick={()=>closeWindow(window.id)}>
                            X
                            </button>
                        </divs>
                    </div>
                    <div className='window_inner'>
                      { window.type == WINDOS_TYPES_ENUM.ABOUT_ME.id && <AboutMe/> }
                      { window.type == WINDOS_TYPES_ENUM.MY_SKILLS.id && <MySkills/> }
                      { window.type == WINDOS_TYPES_ENUM.SOME_PROJECTS.id && <SomeProjects method={createNewWindow}/>}
                      { window.type == WINDOS_TYPES_ENUM.CONTACT_ME.id && <ContactMe window={window} close={closeWindow}/> }
                      { window.type == WINDOS_TYPES_ENUM.NOTES.id && <SomeProjectsDescription type={window.note}/>}
                    </div>
                </div>  
        </Draggable>
    )
}

//{ window.type == WINDOS_TYPES_ENUM.ABOUT_ME.id && <AboutMe/> }
//{ window.type == WINDOS_TYPES_ENUM.MY_SKILLS.id && <MySkills/> }
//<SomeProjects/>
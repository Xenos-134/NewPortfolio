import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import { useEffect, useRef, useState } from 'react';
const {ResizableBox} = require('react-resizable');

import BottomBarPogram from "../components/bottom_program.js"
import ProgramWindow from '../components/program_window';
import { NOTES } from '../components/some_projects_description';
import {BrowserView, MobileView} from 'react-device-detect';



const DEBUG_MODE = true;

function print_debug_message(message) {
  if(!DEBUG_MODE) return;
  console.log("--------------------------------");
  console.log(message);
  console.log("================================\n");
}

export const WINDOS_TYPES_ENUM = {
  ABOUT_ME: {
    id: 0,
    name: "About Me"
  },
  MY_SKILLS: {
    id: 1,
    name: "My Skills"
  },
  SOME_PROJECTS: {
    id: 2,
    name: "Some Projects"
  },
  CONTACT_ME: {
    id: 3,
    name: "Contact Me"
  },
  NOTES: {
    id: 4,
    name: "Notes",
  },
}

class Window {
  constructor(type, id) {
    this.id = id;
    this.type = type;
    this.active = false;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setZIndex(zIndex) {
    this.zIndex = zIndex;
  }

  setNote(type) {
    this.note = type;
  }
}


export default function Home() {
  const [isMenuOpen, setMenuVisibi] = useState(false);
  const [testFlag, setTestFlag] = useState(true);
  const [openWindowCounter, setOWC] = useState(0);
  const [windows, setOW] = useState([]);
  const id = useRef(0);
  const zIndex = useRef(0);
  const [currentPostion, setCP] = useState({x:0, y:0});
  const [clock, setClock] = useState("----")

  function manageMenuVisib() {
    setMenuVisibi(!isMenuOpen);
  }

  function generateNewId() {
    const newId = id.current + 1;
    id.current = newId;
    return newId;
  }

  function changeWindowVisib(name) {    
    setTestFlag(false)
  }

  function incrementZIndex() {
    const newZIndex = zIndex.current + 1;
    zIndex.current = newZIndex;
    return newZIndex;
  }

  function changePosition(window) {
    window.setZIndex(incrementZIndex());
    var new_window_list = windows.filter(w => w.id != window.id);
    new_window_list.forEach(w => w.active = false);
    window.active = true;
    setOW([...new_window_list, window]);
    setMenuVisibi(false)
    setCP({x: 0, y: 0})
  }

  function createNewWindow(type, noteType) {
    const window = new Window(type, generateNewId());
    window.setZIndex(incrementZIndex());
    if(noteType) window.setNote(noteType);

    window.setPosition(currentPostion.x, currentPostion.y);
    setCP({x: currentPostion.x + 40, y: currentPostion.y + 10})
    setOW([...windows, window]);
    setOWC(openWindowCounter+1);
    console.log("NEW WINDOW", window)
  }


  function closeWindow(id) {
    console.log("TRYING TO DELETE ", id)
    const new_window_list = windows.filter( window => window.id != id)
    setOW(new_window_list);
    console.log("New Window List ", new_window_list);
    if(new_window_list.length == 0) setCP({x: 0, y: 0})
  }



  function activateBottomProgram(window) {
    console.log("will activate bottom program")
    changePosition(window)
  }

  useEffect(()=>{
    const interval = setInterval(() => {
      setClock(c => new Date().getHours().toString()+":" + new Date().getMinutes().toString().padStart(2, "0")+":" + new Date().getSeconds().toString().padStart(2, "0"));
    }, 1000);

    return (clearInterval())
  },[])

  return (
    <div className={styles.container} 
    style={{ 
      backgroundImage: `url('/back.jpg')`,
      backgroundSize: 'cover',
      overflow: 'hidden',
    }}>
      <Head>
        <title>Hi :)</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/pika.png" />
      </Head>

      <main className={styles.main}>
        {
        //******************************************************
        //                    CENTER SCREEN
        //******************************************************
        }

        <div className='icons_div'>
          <div className='icon' onClick={()=>createNewWindow(WINDOS_TYPES_ENUM.ABOUT_ME.id)}>
            <img src={"./about_me_icon.png"}  className="icon_image"  alt="am_icon"/>
            <p>ABOUT ME</p>
          </div>

          <div className='icon' onClick={()=>createNewWindow(WINDOS_TYPES_ENUM.MY_SKILLS.id)}>
            <img src={"./my_computer.png"}  className="icon_image"  alt="am_icon"/>
            <p>MY SKILLS</p>
          </div>

          <div className='icon' onClick={()=>createNewWindow(WINDOS_TYPES_ENUM.SOME_PROJECTS.id)}>
            <img src={"./some_projects.png"}  className="icon_image"  alt="am_icon"/>
            <p>SOME PROJECTS</p>
          </div>

          <div className='icon' onClick={()=>createNewWindow(WINDOS_TYPES_ENUM.CONTACT_ME.id)}>
            <img src={"./mailer.png"}  className="icon_image"  alt="am_icon" style={{height: "60px", marginBottom: "-10px"}}/>
            <p>CONTACT ME</p>
          </div>
        </div>



        
        {
        //******************************************************
        //                    MENU SECTION
        //******************************************************
        }
        { isMenuOpen && 
          <div className='menu_window'>
            <div className='menu_window_lateral_text'>
              Windows 96
            </div>
            <div className='menu_windows_items'>
              <div className='menu_windows_items_div'>
                <div className='menu_windows_item'  onClick={()=>createNewWindow(WINDOS_TYPES_ENUM.ABOUT_ME.id)}>
                    <img src={"./about_me_icon.png"}  className="menu_icons"  alt="am_icon"/>
                    <p>About Me</p>
                  </div>

                  <div className='menu_windows_item' onClick={()=>createNewWindow(WINDOS_TYPES_ENUM.MY_SKILLS.id)}>
                    <img src={"./my_computer.png"}  className="menu_icons"  alt="am_icon"/>
                    <p>My Skills</p>
                  </div>

                  <div className='menu_windows_item' onClick={()=>createNewWindow(WINDOS_TYPES_ENUM.SOME_PROJECTS.id)}>
                    <img src={"./some_projects.png"}  className="menu_icons"  alt="am_icon"/>
                    <p>Some Projects</p>
                  </div>

                  <div className='menu_windows_item' onClick={()=>createNewWindow(WINDOS_TYPES_ENUM.CONTACT_ME.id)}>
                    <img src={"./mailer.png"}  className="icon_image"  alt="am_icon" style={{height: "50px", marginLeft: "5px"}}/>
                    <p>Contact Me</p>
                  </div>
              </div>
              <div className='filler'/>
            </div>
          </div>
        }
        {
          openWindowCounter>0 &&
          windows.map(window => (
              <ProgramWindow 
                key={window.id}
                window={window} 
                closeWindow={closeWindow}
                changePosition={changePosition}
                createNewWindow={createNewWindow}
                />
          ))
        }

        <div className='bottom_bar'>
          <button className='menu_button'>
            <div className='menu_button_center' onClick={manageMenuVisib}>
              <img className='menu_button_icon' src={"./winicon2.png"} alt="Logo"/>
              <p>Menu</p>
            </div>
          </button>
          <div className='bottom_bar_separator'/>
          <div className='bottom_bar_convex_bump'/>


              <BrowserView>
                <div className='bottom_bar_programs'>
                { openWindowCounter>0 &&
                  windows.sort((a,b) => a.id - b.id).map(window => (<BottomBarPogram key={window.id} window={window} method={activateBottomProgram}/>))
                }
                </div>
              </BrowserView>
              <MobileView>
                <div className='bottom_bar_programs'>
                </div>
              </MobileView>

            <div className='time_div'>
              <p>{clock}</p>
            </div>
        </div>
      </main>
    </div>
  )
}

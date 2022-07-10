import { useEffect, useState } from "react"
import {WINDOS_TYPES_ENUM} from "../pages/index.js"

const BOOKS = {
    REACT_NATIVE: 1,
    PYTHON: 2,
    CS: 3,
    THREEJS: 4,
    C: 5,
}

export const NOTES = {
    NOTES_APP: 1,
    KERAS: 2,
    SKLEARN: 3,
    WPF: 4,
    THREEJS: 5,
    COMPILERS: 6,
}


export default function SomeProjectsDescription({type}) {

    function redirect() {
        window.open('https://github.com/Xenos-134')
    }

    return (
        <div className="some_projects">
            <div className="note_desctiption">
                <div className="notes_title">
                    {type == NOTES.NOTES_APP && <p>NOTES APP</p>}
                    {type == NOTES.KERAS && <p>KERAS AND MEDIA PIPE</p>}
                    {type == NOTES.SKLEARN && <p>SKLEARN</p>}
                    {type == NOTES.WPF && <p>MICROSOFT WPF</p>}
                    {type == NOTES.THREEJS && <p>THREE.JS</p>}
                    {type == NOTES.COMPILERS&& <p>COMPILER</p>}
                </div>
                <div className="notes_text">
                    {type == NOTES.NOTES_APP && 
                        <p>&emsp;Small project that I used to learn worklets and React Native Reanimated. <br/>
                        &emsp;It is possible to create/ move/ delete notes around and then group them.
                        </p>
                    }

                    {type == NOTES.KERAS && 
                        <p>&emsp; My free time hobby. Using both to construct cnn to classify images of Sign Language Alphabet. <br/>
                        &emsp; Achived 97% of accuracy. Currently testing with different pre-processing, configurations and more data.
                        </p>
                    }

                    {type == NOTES.SKLEARN && 
                        <p>&emsp; Small uni project to learn different AI algorithms. <br/>
                        This one was about kNN.
                        </p>
                    }

                    {type == NOTES.WPF && 
                        <p>&emsp; Very basic notes app that I used to learn C#, WPF and MVVM pattern.
                        </p>
                    }

                    {type == NOTES.THREEJS && 
                        <p>&emsp; Computer graphic exercices done for Graphic Computations Subject.
                        </p>
                    }

                    {type == NOTES.COMPILERS && 
                        <p>&emsp; Self made compiler of my group for Compilers Subject. 
                        </p>
                    }
                </div>
                <div className="notes_bottom" onClick={redirect}>
                    <button className="github_button">Git Hub</button>
                </div>
            </div>
        </div>
    )
}

/*
                    <p>&emsp; Very basic notes app that I used to learn C#, WPF and MVVM pattern.
                     </p>
*/

/*
                    <p>&emsp; Computer graphic exercices done for Graphic Computations Subject.
                    </p>
*/
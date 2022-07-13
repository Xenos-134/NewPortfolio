import { useEffect, useState } from "react"
import {WINDOS_TYPES_ENUM} from "../pages/index.js"
import { NOTES } from "./some_projects_description.js";

const BOOKS = {
    REACT_NATIVE: 1,
    PYTHON: 2,
    CS: 3,
    THREEJS: 4,
    C: 5,
}




export default function SomeProjects({method}) {
    const [openBooks, setOB] = useState([]);

    function open_close(book) {
        if(openBooks.includes(book)) {
            setOB([...openBooks.filter(b => b!= book)]);
            return;
        }

        setOB([...openBooks, book]);

    }   

    function createNewProgram(type) {
        method(WINDOS_TYPES_ENUM.NOTES.id, type);
        console.log("CREATING NEW NOTE :", type)
    }


    return (
        <div className="some_projects">
            <div className="some_projects_inner1">
                <p>Click book and then click open.</p>

                <div className="some_projects_inner2">
                     {/*  REACT NATIVE */}
                    <div className="ms_book" onClick={()=>open_close(BOOKS.REACT_NATIVE)}>
                        <img src={"./book.png"}  className="book_icon"  alt="book"/>
                        <p>react native</p>
                    </div>
                    { 
                        openBooks.includes(BOOKS.REACT_NATIVE) &&
                        <div className="ms_note" onClick={()=>createNewProgram(NOTES.NOTES_APP)}>
                            <img src={"./note.png"}  className="note_icon"  alt="book"/>
                            <p>notes app</p>
                        </div>
                    }


                    {/*  PY */}
                    <div className="ms_book" onClick={()=>open_close(BOOKS.PYTHON)}>
                        <img src={"./book.png"}  className="book_icon"  alt="book"/>
                        <p>python</p>
                    </div>
                    {
                        openBooks.includes(BOOKS.PYTHON) &&
                        <>
                            <div className="ms_note" onClick={()=>createNewProgram(NOTES.KERAS)}>
                                <img src={"./note.png"}  className="note_icon"  alt="book"/>
                                <p>keras and media pipe</p>
                            </div> 
                            <div className="ms_note" onClick={()=>createNewProgram(NOTES.SKLEARN)}>
                                <img src={"./note.png"}  className="note_icon"  alt="book"/>
                                <p>sklearn</p>
                            </div>  
                        </>
                    }
       

                    {/*  C# */}
                    <div className="ms_book" onClick={()=>open_close(BOOKS.CS)}>
                        <img src={"./book.png"}  className="book_icon"  alt="book"/>
                        <p>C#</p>
                    </div>
                    {
                        openBooks.includes(BOOKS.CS) &&
                        <div className="ms_note" onClick={()=>createNewProgram(NOTES.WPF)}>
                            <img src={"./note.png"}  className="note_icon"  alt="book"/>
                            <p>microsoft wpf</p>
                        </div>     
                    }


                    {/*  JS */}
                    <div className="ms_book" onClick={()=>open_close(BOOKS.THREEJS)}>
                        <img src={"./book.png"}  className="book_icon"  alt="book"/>
                        <p>three.js</p>
                    </div>
                    {
                        openBooks.includes(BOOKS.THREEJS) &&
                        <div className="ms_note" onClick={()=>createNewProgram(NOTES.THREEJS)}>
                            <img src={"./note.png"}  className="note_icon"  alt="book"/>
                            <p>project</p>
                        </div>  
                    }


                    {/*  C */}
                    <div className="ms_book" onClick={()=>open_close(BOOKS.C)}>
                        <img src={"./book.png"}  className="book_icon"  alt="book"/>
                        <p>C</p>
                    </div>
                    {
                        openBooks.includes(BOOKS.C) &&
                        <div className="ms_note" onClick={()=>createNewProgram(NOTES.COMPILERS)}>
                            <img src={"./note.png"}  className="note_icon"  alt="book"/>
                            <p>compiler</p>
                        </div>  
                    }
                </div>
            </div>
    </div>
    )
}
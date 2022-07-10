import { useEffect } from "react"
import {WINDOS_TYPES_ENUM} from "../pages/index.js"

export default function BottomBarPogram({window, method}) {
    useEffect(()=>{
        console.log(WINDOS_TYPES_ENUM[Object.keys(WINDOS_TYPES_ENUM)[window.type]].name)
    },[])

    if(!window.active) {
        return (
            <>
                <button className='bottom_bar_program' onClick={()=>method(window)}>
                    <p>{WINDOS_TYPES_ENUM[Object.keys(WINDOS_TYPES_ENUM)[window.type]].name}</p>
                </button>
            </>
        )
    }

    return (
        <>
            <button className='bottom_bar_program_active'>
                <p>{WINDOS_TYPES_ENUM[Object.keys(WINDOS_TYPES_ENUM)[window.type]].name}</p>
            </button>
        </>
    )
}
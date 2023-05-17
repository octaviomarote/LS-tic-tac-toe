import React from 'react'

import "./BoxSingle.css"

export const BoxSingle = ({value, onClick}) => {
    const style = value === "X" ? "single_X" : "single_O" // taking the value of the box, if X assigns single_X

    return(
        <button className={style} onClick={onClick}>{value}</button>
    )
}

import React from 'react'
import "./boxSingle.css"

export const BoxSingle = ({value, onClick}) => {
    const style = value === "X" ? "single_X" : "single_O";
    return (
        <button class={style} onClick={onClick}>{value}</button>
    )
}
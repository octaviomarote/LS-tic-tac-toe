import React from 'react'
import './smallBoard.css'

import {BoxSingle} from './boxSingle'

export const SmallBoard = ({SmallBoard, onClick}) => {
    return(
        <div>
            {SmallBoard.map((value, idx) => {
                return <BoxSingle value={value} onClick={() => onClick(idx)}/>
            })}
            </div>
    )
}
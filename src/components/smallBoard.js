import React from "react"

// import { BoxSingle } from './components/BoxSingle' - esse era o erro, por algum motivo isso nao funciona
import "./BoxSingle.css"
import "./smallBoard.css"
import "./Buttons.css"

export const BoxSingle = ({value, onClick}) => {
    const style = value === "X" ? "single_X" : "single_O" // taking the value of the box, if X assigns single_X

    return(
        <button className={style} onClick={onClick}>{value}</button>
    )
} //tive que colocar essa funcao nesse aqui tbm

export const Board = ({board, onClick}) => {
    return (
        <div className="smallBoard">
            {board.map((value, idx) => {
                return <BoxSingle value={value} onClick={() => onClick(idx)}/>
            })}
            </div>
    )
}

// export const BigBoard = ({bigboard, onClick}) => {
//    return (
//        <div className="smallBoard">
//            {bigboard.map((value, idx) => {
//                return <BoxSingle value={value} onClick={() => onClick(idx)}/>
//            })}
//            </div>
//    )
//}  Isso sera para fazer os outros grids depois, tentei algumas coisas que meio que funcionaram mas nao como eu quero

export const Reset = () => {
    return (
        <div>
            <button className="reset">Reset</button>
        </div>
    )
}

export const Inicio = () => {
    return (
        <div>
            <button className="inicio">Novo Jogo</button>
        </div>
    )
}

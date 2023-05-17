import React, {useState} from 'react';

import './App.css';

import { Inicio, Reset, Board, Board1 } from './components/smallBoard'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [vezX, xJogando] = useState(true);

  const clicaBoxSingleCLick = (BoxSingleIdx) => {
    const boardupdate = board.map((value, idx) => {
      if (idx === BoxSingleIdx) {
        return vezX === true ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(boardupdate);
    xJogando(!vezX)
  }

  const [board1, setBoard1] = useState(Array(9).fill(null))
  const [vezX1, xJogando1] = useState(true);

  const clicaBoxSingleCLick1 = (BoxSingle1Idx) => {
    const boardupdate1 = board1.map((value, idx) => {
      if (idx === BoxSingle1Idx) {
        return vezX1 === true ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard1(boardupdate1);
    xJogando1(!vezX1)
  }

  return (
    <div className="App">
      <div>
        <Reset/>
      </div>
      <div>
        <Board board={board} onClick={clicaBoxSingleCLick}/>
        <Board1 board1={board1} onClick={clicaBoxSingleCLick1}/>
      </div>
      <div>
        <Inicio/><Reset/>
      </div>
    </div>
  );
}

export default App;

import './App.css';

import { Inicio, Reset, Board } from './components/smallBoard'

function App() {
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]

  return (
    <div className="App">
      <div>
        <Reset/>
      </div>
      <div>
        <Board board={board} onClick={null}/>
      </div>
      <div>
        <Inicio/><Reset/>
      </div>
    </div>
  );
}

export default App;

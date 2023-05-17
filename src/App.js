import './App.css';

import {SmallBoard} from './components/smallBoard';

function App() {
  const board_tic_tac = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]
  return (
    <div className="App">
      <SmallBoard board_tic_tac={board_tic_tac} onClick={null}/>
    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import Bord from './Component/Bord/Board';
import ScoreBord from './Component/ScoerBord/ScoreBord';

function App() {

  const [board , setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying , setXIsPlaying] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [OScore, setOScore] = useState(0);
  const [tie , setTie] = useState(0);
  const [gameOver , setgameOver] = useState(false);


  const WIN_CONDITIONs =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ];


  const handleBoxClick = (boxID) =>  {
    const updateBoard = board.map((value,id) => {
      if (id === boxID) {
        return xIsPlaying === true ? "X" : "O"
      }
      else{
        return value ;
      }
    })
    setBoard(updateBoard);
    setXIsPlaying(!xIsPlaying);
    const winner = checkWinner(updateBoard);

    if (winner) {
      if (winner === "X" ) {
        setXScore(xScore + 1 );
        alert(" X Is Winner");
        
        setgameOver(true);
      }
      else{
        setOScore(OScore +1 );
        alert("O Is Winner")
        setgameOver(true);
      }
    }

    let filled = true ;
    updateBoard.map((item) => {
      if (item === null) {
        filled =false;
      }
    });

    if(filled){
      filled = true;
      setTie(tie + 1);
      alert(" Tiea Match ")
    }

  };

  const checkWinner = (updateBoard) => {
    
    for (let i = 0; i < WIN_CONDITIONs.length; i++) {
      
      const [x, y,z ] = WIN_CONDITIONs[i];

      if (updateBoard[x]&&
          updateBoard[x] === updateBoard[y] &&
          updateBoard[x] === updateBoard[z]
        ) {
          // alert("winner");
          return updateBoard[x];

      }
      
    }
  };
  const reset = () => {

    setgameOver(false);
    setBoard(Array(9).fill(null));

  }

  const restartGame = () => {
    setgameOver(false);
    setBoard(Array(9).fill(null));
    setXScore(0);
    setOScore(0);
    setTie(0);
  }


  return (
    <div className='App' >
      <ScoreBord 
        xScore={xScore} OScore={OScore} tie={tie}  Playing={xIsPlaying}
        />
      <Bord 
        borad={board}
        onClick={ gameOver === true ? reset : handleBoxClick} 
      />
      
       <button className='buttonR' onClick={reset} >Play Again</button>
        <button className='buttonR' onClick={restartGame} >Restart Game</button>

      

    </div>
  );
}
 
export default App;

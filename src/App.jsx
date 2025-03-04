import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Circle from './circle'
import { useEffect } from 'react'
import X from './x'
import './App.css'

function App() {

  //0 = Nothing, 1 = Circle, 2 = X
  const [boardData, setBoardData] = useState([0,0,0,0,0,0,0,0,0])
  const [boardColour, setBoardColour] = useState([0,0,0,0,0,0,0,0,0])
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [turns, setTurns] = useState(0);

  //1 = Circle, 2 = X
  const [whosTurn, setWhosTurn] = useState(1)
  
  

  const turnSwitchLookUp = {1:2, 2:1}

  const clickAttempt = (gridNumber) =>{

    if (boardData[gridNumber] === 0){
      setTurns(prevTurns => prevTurns + 1)
      setBoardData(prevBoard => {
        const newBoard = [...prevBoard]; 
        newBoard[gridNumber] = whosTurn; 
        return newBoard;
      });

      setWhosTurn(turnSwitchLookUp[whosTurn])

      
    }

  }

  // 0 1 2
  // 3 4 5
  // 6 7 8

  useEffect(() => {
    console.log(boardData)

 
  
    
 

    //Across
    if(boardData[0] === boardData[1] && boardData[0] === boardData[2] && boardData[0] !== 0){

      console.log("1")
      setTurns(0)
      setBoardColour([3,3,3,0,0,0,0,0,0]);
      disPlayWin(1);
      return;

    }
    else if(boardData[3] === boardData[4] && boardData[3] === boardData[5] && boardData[3] !== 0){

      console.log("2")
      setTurns(0)
      setBoardColour([0,0,0,3,3,3,0,0,0]);
      disPlayWin(1);
      return;
    }
    else if(boardData[6] === boardData[7] && boardData[6] === boardData[8] && boardData[6] !== 0){
      
      console.log("3")
      setTurns(0)
      setBoardColour([0,0,0,0,0,0,3,3,3]);
      disPlayWin(1);
      return;
    }

    //Vertical
    if(boardData[0] === boardData[3] && boardData[0] === boardData[6] && boardData[0] !== 0){

      console.log("4")
      setTurns(0)
      setBoardColour([3,0,0,3,0,0,3,0,0]);
      disPlayWin(1);
      return;
    }
    else if(boardData[1] === boardData[4] && boardData[1] === boardData[7] && boardData[1] !== 0){

      console.log("5")
      setTurns(0)
      setBoardColour([0,3,0,0,3,0,0,3,0]);
      disPlayWin(1);
      return;
    }
    else if(boardData[2] === boardData[5] && boardData[2] === boardData[8] && boardData[2] !== 0){
      
      console.log("6")
      setTurns(0)
      setBoardColour([0,0,3,0,0,3,0,0,3]);
      disPlayWin(1);
      return;
      
    }

    //Diagonal
    if(boardData[0] === boardData[4] && boardData[0] === boardData[8] && boardData[0] !== 0){

      console.log("7")
      setTurns(0)
      setBoardColour([3,0,0,0,3,0,0,0,3]);
      disPlayWin(1);
      return;
    }
    else if(boardData[6] === boardData[4] && boardData[6] === boardData[2] && boardData[6] !== 0){

      console.log("8")
      setTurns(0)
      setBoardColour([0,0,3,0,3,0,3,0,0]);
      disPlayWin(1);
      return;
    }

    console.log("turn: " + turns)

    if(turns === 9){
      setTurns(0)
      setBoardColour([3,3,3,3,3,3,3,3,3]);
      disPlayWin(2);
      return;
    }
  
  }, [boardData]);



  const disPlayWin = (type) => {

    console.log("win")

    if(type === 1){

      setTimeout(() => {
        setDisplay(true)
      }, 700)
    }
    else{
      setTimeout(() => {
        setDisplay2(true)
      }, 700)

    }


   
  }

  const tryAgainClicked = () =>{

    console.log("reset")
    setBoardData([0,0,0,0,0,0,0,0,0])
    setBoardColour([0, 0, 0, 0, 0, 0, 0, 0, 0]); 
    setDisplay(false);
    setDisplay2(false);
   
    



  }

  

  return (
    
    
    <div id='masterDiv'>

      <h1 id="title">Tic Tac Toe</h1>

      <h1 id="playerCard"> {whosTurn == 1 ? "Player 1's Turn!" : "Player 2's Turn!"}</h1>


      <div id="gameBoard">

        <div className="gameBox" id='topLeft' onClick={() => clickAttempt(0)} style={{ backgroundColor: boardColour[0] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[0] === 0 && <></>}
          {boardData[0] === 1 && <Circle></Circle>}
          {boardData[0] === 2 && <X></X>}

        </div>
        <div className="gameBox" onClick={() => clickAttempt(1)} style={{ backgroundColor: boardColour[1] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[1] === 0 && <></>}
          {boardData[1] === 1 && <Circle></Circle>}
          {boardData[1] === 2 && <X></X>}
   
        </div>
        <div className="gameBox" id='topRight' onClick={() => clickAttempt(2)} style={{ backgroundColor: boardColour[2] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[2] === 0 && <></>}
          {boardData[2] === 1 && <Circle></Circle>}
          {boardData[2] === 2 && <X></X>}
       
        </div>
        <div className="gameBox" onClick={() => clickAttempt(3)} style={{ backgroundColor: boardColour[3] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[3] === 0 && <></>}
          {boardData[3] === 1 && <Circle></Circle>}
          {boardData[3] === 2 && <X></X>}
        
        </div>
        <div className="gameBox" onClick={() => clickAttempt(4)} style={{ backgroundColor: boardColour[4] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[4] === 0 && <></>}
          {boardData[4] === 1 && <Circle></Circle>}
          {boardData[4] === 2 && <X></X>}
        
        </div>
        <div className="gameBox" onClick={() => clickAttempt(5)} style={{ backgroundColor: boardColour[5] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[5] === 0 && <></>}
          {boardData[5] === 1 && <Circle></Circle>}
          {boardData[5] === 2 && <X></X>}
       
        </div>
        <div className="gameBox" id='bottomLeft' onClick={() => clickAttempt(6)} style={{ backgroundColor: boardColour[6] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[6] === 0 && <></>}
          {boardData[6] === 1 && <Circle></Circle>}
          {boardData[6] === 2 && <X></X>}
       
        </div>
        <div className="gameBox" onClick={() => clickAttempt(7)} style={{ backgroundColor: boardColour[7] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[7] === 0 && <></>}
          {boardData[7] === 1 && <Circle></Circle>}
          {boardData[7] === 2 && <X></X>}

        </div>
        <div className="gameBox" id='bottomRight' onClick={() => clickAttempt(8)} style={{ backgroundColor: boardColour[8] === 3 ? '#27bcc0' : '#5edee2' }}>
          {boardData[8] === 0 && <></>}
          {boardData[8] === 1 && <Circle></Circle>}
          {boardData[8] === 2 && <X></X>}

        </div>

        {display === true && 
        
          <div id="gameOver">

            <div id="gameOverContent">
              <h1 id="playerWin">Player {turnSwitchLookUp[whosTurn]} Wins</h1>

              <button id="playAgain" onClick ={() => {tryAgainClicked()}}>Play Again</button>

            </div>

        </div>}

        {display2 === true && 
        
        <div id="gameOver">

          <div id="gameOverContent">
            <h1 id="playerWin">Tie!</h1>

            <button id="playAgain" onClick ={() => {tryAgainClicked()}}>Play Again</button>

          </div>

      </div>}

 

      </div>

    </div>

  
  )
}

export default App

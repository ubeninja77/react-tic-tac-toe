import React, { useState } from 'react';
import "./App.css";

import Board from "./components/Board";
// cd desktop/ada/projects/react-tic-tac-toe\ 2/
const PLAYER_1 = "X";
const PLAYER_2 = "O";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: "",
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
  const [winner, setCurrentWinner] = useState(null);
  const [count, setCurrentCount] = useState(0)

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (id) => {
    if (winner === "PLAYER_1" || winner === "PLAYER_2") return
    const newSquare = [...squares] 
    let i = 0
    while(i < squares.length){
      let x = 0
      while (x < squares.length){
        if (squares[i][x].id === id && squares[i][x].value === "" ){
          squares[i][x].value = currentPlayer? PLAYER_1 : PLAYER_2;
          setCurrentPlayer(!currentPlayer)
          setCurrentWinner(checkForWinner())
          setCurrentCount(count + 1)
        };    
        x += 1
      }
      i += 1
    }
   setSquares(newSquare);
  }

  // Complete in Wave 3
  const checkForWinner = () => {
    
    }

    if (!newSquare.includes("")) return "tied";
    return null; 
  }


  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setCurrentPlayer(PLAYER_1);
    setCurrentWinner(null);
    setCurrentCount(0); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>"${winner} in the winner"!!! </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App

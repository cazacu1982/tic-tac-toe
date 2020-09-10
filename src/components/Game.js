import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const styles = {
    display: 'block',
    margin: '5px auto',
    background: 'lightgrey',
    border: '2px solid darkgrey',
    fontSize: '40px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
  };
  const [history, setHistory] = useState([Array(9).fill('')]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  
  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // If user click an occupied square or if game is won, return
    if (squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };
  
  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <button style= {styles} onClick={() => window.location.reload()}>{'refresh'}</button>
    </>
  );
};

export default Game;

import React, { useState } from "react";

const GameApp = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [score, setScore] = useState({ playerX: 0, playerO: 0 });
  const [message, setMessage] = useState("See Game Result Here");

  const handleBoxClick = (index) => {
    if (boxes[index] || checkWinner(boxes)) return;
    const newBoxes = boxes.slice();
    newBoxes[index] = isPlayerX ? "X" : "O";
    setBoxes(newBoxes);

    if (checkWinner(newBoxes)) {
      const winner = isPlayerX ? "Player X" : "Player O";
      setMessage(`${winner} has won!`);
      setScore((prev) => ({
        ...prev,
        [isPlayerX ? "playerX" : "playerO"]:
          prev[isPlayerX ? "playerX" : "playerO"] + 1,
      }));
    } else {
      setIsPlayerX(!isPlayerX);
    }
  };

  const checkWinner = (boxes) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winPatterns.some(
      ([a, b, c]) => boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]
    );
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(null));
    setMessage("See Game Result Here");
  };

  const resetAll = () => {
    resetGame();
    setScore({ playerX: 0, playerO: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-400">
      <button onClick={resetGame} className="btn">
        New Game
      </button>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {boxes.map((box, index) => (
          <button
            key={index}
            className="h-16 w-16 border rounded text-xl flex items-center justify-center bg-white"
            onClick={() => handleBoxClick(index)}
            disabled={box || checkWinner(boxes)}
          >
            {box}
          </button>
        ))}
      </div>

      <p className="mt-4 text-lg text-red-700">{message}</p>

      <div className="flex gap-8 mt-4">
        <p className="text-red-700">Player X: {score.playerX}</p>
        <p className="text-red-700">Player O: {score.playerO}</p>
      </div>

      <button onClick={resetAll} className="btn mt-4">
        Reset
      </button>
    </div>
  );
};

export default GameApp;

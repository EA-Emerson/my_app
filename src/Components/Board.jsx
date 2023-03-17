import { useState } from "react";
import Square from "./Square";


const Board = ({ xIsNext, squares, onPlay }) => {
    // console.error()
    // create a state to track the current player
    // const [xIsNext, setXIsNext] = useState(true)

    // create an array containing 9 null items and use it as the default state
    // const [squares, setSquares] = useState(Array(9).fill(null));

    // Create a boolean state, xIsNext which will be flipped to determine which player goes next and save the game's state 
    function handleClick(i) {
        // check to see if the square already has a x or o. If the square is already filled, you will return to the handleClick function early- before it tries to update the board state.
        if (calculateWinner(squares) || squares[i] ) {
            return;
        }
        // console.log(calculateWinner)
        // create a copy of the 'squares' array (nextSquares) with the slice( ) Array method.
        // Update the nextSquares array to add x to the index(i) of the square to be updated
        const nextSquares= squares.slice();
        
        if (xIsNext) {
            nextSquares[i] = 'x';
        } else {
            nextSquares[i] = 'o';
        }

        onPlay(nextSquares);
}

    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = 'winner: ' + winner;
        
        if (squares[0] == squares[1] && squares[0] == squares[2]) {
            console.log(squares[0], squares[1], squares[2]);
        }

        if (squares[3] == squares[4] && squares[3] == squares[5]) {
            console.log(squares[3], squares[4], squares[5])
        }

        if (squares[6] == squares[7] && squares[6] == squares[8]) {
            console.log(squares[6], squares[7], squares[8])
        }

        if (squares[0] == squares[3] && squares[0] == squares[6]) {
            console.log(squares[0], squares[3], squares[6])
        }

        if (squares[1] == squares[4] && squares[1] == squares[7]) {
            console.log(squares[1], squares[4], squares[7])
        }

        if (squares[2] == squares[5] && squares[2] == squares[8]) {
            console.log(squares[2], squares[5], squares[8])
        }

        if (squares[0] == squares[4] && squares[0] == squares[8]) {
            console.log(squares[0], squares[4], squares[8])
        }

        if (squares[2] == squares[4] && squares[2] == squares[6]) {
            console.log(squares[2], squares[4], squares[6])
        }
    }
    else {
        status = 'Next player:' + (xIsNext ? 'x' : 'o')
    }

    return ( 
        <>
            <div>{status}</div>
            <div className='grid grid-cols-3 w-max'>

                {/* set the value of each square to correspond to an index in the null array created above and pass it as a prop */}
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
             </div>
        </>
     );
}
 
export default Board;


function calculateWinner(squares) {

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i< lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
            
        }
    }
    return null;
}
// Clicking on the very first square runs the function that the button received as its onClick prop from the square. The square component received that function as its onSquareClick prop from the Board. The Board component defined that function directly in the JSX. It calls handleClick with an argument of 0.
// HandleClick uses the argument(0) to update the first element of the squares array from null to x.
// The squares state of the board component was updated so the board and all of its children re-render. This causes the value prop of the square component with index 0 to change from null to x.

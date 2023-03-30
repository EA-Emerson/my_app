import Square from "./Square";


const Board = ({ xIsNext, squares, onPlay, winnerSquares}) => {
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
    let winner = calculateWinner(squares);
    let status;
    if(winner ) {
        status = 'winner: ' + winner;
       }
    else {
        status = 'Next player:' + (xIsNext ? 'x' : 'o')
    }
    
    function renderSquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => onClick(i)}
                isWinner={winnerSquares && winnerSquares.includes(i)}
            />
        );
    }
    return ( 
        <>
            <div>{status}</div>
            <div className='grid grid-cols-3 w-max'>

                {/* set the value of each square to correspond to an index in the null array created above and pass it as a prop */}
                <Square value={renderSquare(0)} id={0} onSquareClick={() => handleClick(0)}
                />
                <Square value={renderSquare(1)} id={1}  onSquareClick={() => handleClick(1)}/>
                <Square value={renderSquare(2)} id={2}  onSquareClick={() => handleClick(2)}/>
                <Square value={renderSquare(3)} id={3}  onSquareClick={() => handleClick(3)}/>
                <Square value={renderSquare(4)} id={4}  onSquareClick={() => handleClick(4)}/>
                <Square value={renderSquare(5)} id={5}  onSquareClick={() => handleClick(5)}/>
                <Square value={renderSquare(6)} id={6}  onSquareClick={() => handleClick(6)}/>
                <Square value={renderSquare(7)} id={7}  onSquareClick={() => handleClick(7)}/>
                <Square value={renderSquare(8)} id={8}  onSquareClick={() => handleClick(8)}/>
             </div>
        </>
     );
}
 
export default Board;
function removeWinningSquares() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.classList.remove("winning-square");
    });
  }


function calculateWinner(squares, box) {

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

    removeWinningSquares();

    for (let i = 0; i< lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            document.getElementById(a).classList.add("winning-square");
            document.getElementById(b).classList.add("winning-square");
            document.getElementById(c).classList.add("winning-square"); 

            return squares[a]
        }
    }
    
    return null;
}
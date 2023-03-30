import { current } from "immer";
import Board from "./Board";
import { useState } from "react";

const Game = () => {
    
    // create an array containing 9 null items and use it as the default state
    const [history, setHistory] = useState([Array(9).fill(null)]);

    // define a new state variable called currentMove to keep track of which step the user is currently viewing.
    const [currentMove, setCurrentMove] = useState(0)

    const xIsNext = currentMove % 2 === 0;
    
    const [isAscending, setIsAscending] = useState(true);

    // to render the squares for the current move, you'll want to read the last squares array from the history. You don't need useState for this. You already have enough information to calculate it during rendering, defaulting to 0.
    const currentSquares = history[currentMove];
    // Create a handlePlay function inside the Game component that will be called by the Board component to update the game. Pass xIsNext, currentSquares and handlePlay as props to the Board component.
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        // here, setHistory([...history, nextSquares]); creates a new array that contains all the items in history, followed by nextSquares. It is a spread syntax
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        // update this function to update that currentMove. You'll also set xIsNext to true is the number that you're changing currentMove to is even.
        setCurrentMove(nextMove)

        // then make two changes to the games's handlePlay function
        // If you 'go back in time' and then make a new move from that point, you only want to keep the history up to that point. Instead of adding nextSquares after all items (... spread syntax) in history, you'll add it after all items in history.slice(0, currentMove + 1) so that you're only keeping that portion of the old history.

        // Each time a move is made, you need to update currentMove to point to the latest history entry.
    }


        // const sortedMoves = isAscending ? history.slice() : history.slice().reverse();

        
        // const moves = sortedMoves.map((squares, move) => {
            const moves = history.slice().map((squares, move) => {

                let description;
            
                if (move > 0 && move == history.length - 1) {
                    return description = "You are at move #" + move;
                }
                else if ( move > 0 ) {
                    description = "Go to move #" + move;
                }
                else {
                    description = "Go to game start";
                }

                return (
                    <li key={move}>
                        <button onClick={() => jumpTo(move)}>{description}</button>
                    </li>
                )
            })

        const handleSort = () => {
            setIsAscending(!isAscending);
          }

    return ( 
        <>
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>

                <button onClick={() => handleSort()}>Sort by {isAscending ? "Newest to Oldest" : "Oldest to Newest"}</button>
     
                <ol>
                    {isAscending ? moves : moves.reverse()}
                </ol>
            </div>
        </>
     );
}
 
export default Game;
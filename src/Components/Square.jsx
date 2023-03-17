import { useState } from "react";

const Square = ({value, onSquareClick}) => {

    return ( 
        <button className='border-2 border-black h-20 w-20 text-center font-bold text-5xl' onClick={onSquareClick}>{value}</button>
     );
}
 
export default Square;
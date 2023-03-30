import { useState } from "react";

const Square = ({value, onSquareClick, id}) => {
    return ( 
        // <button className='border-4 border-black h-20 w-20 text-center font-bold text-5xl' onClick={onSquareClick}>{value}</button>
        <button id={id} className={ 'square'} onClick={onSquareClick}>{ value }</button>
     );
}
 
export default Square;
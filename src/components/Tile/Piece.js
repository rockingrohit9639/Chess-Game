import "./Tile.scss";
import { useState } from "react";
import React from "react";



// esline-disable-next-line
const Square = ({ nameOfPiece, Coordinates,  ChessBoardRef}) => {

    return (
    <>{ nameOfPiece && (<div   className={`${nameOfPiece} square-${Coordinates} piece`}  style={{backgroundImage: `url(https://images.chesscomfiles.com/chess-themes/pieces/neo/150/${nameOfPiece}.png)`}} ></div>)}</>)
};


const Piece = ({ChessBoardRef}) => {
    const PiecesName = ["r", "n", "b", "q", "k", "b", "n", "r"];
    let wp = []
    let bp = []
    let pieces = []
    const RenderPiece = () => {
        
        for ( let p = 0; p < PiecesName.length; p ++) {
            pieces.push(<Square nameOfPiece={`b${PiecesName[p]}`} Coordinates={`${p + 1}8`} key={`${p + 1}, 8`} ChessBoardRef={ChessBoardRef}/>)
        }
        for ( let p = 0; p < PiecesName.length; p ++) {
            pieces.push(<Square nameOfPiece={`w${PiecesName[p]}`} Coordinates={`${p + 1}1`} key={`${p + 1}, 1`} ChessBoardRef={ChessBoardRef}/>)
        }
        for(let i = 1; i < 9; i++){
            wp.push(<Square nameOfPiece="wp" Coordinates={i + "2"}  key={`${i + 2}`} ChessBoardRef={ChessBoardRef}/>)
        }
        for(let i = 1; i < 9; i++){
            bp.push(<Square nameOfPiece="bp" Coordinates={i + "7"}  key={`${i + 7}`} ChessBoardRef={ChessBoardRef}/>)
        }
    }
    RenderPiece();
    return (<>
        {wp.map(p=> {return p})}{bp.map(p=> {return p})}{pieces.map(p=>{return p})}
    </>);
};


export default Piece;

   // let style = getComputedStyle(e.target);
            // const matrix = style.transform || style.webkitTransform || style.mozTransform;
            // console.log(matrix);
            // const matrixType = matrix.includes('3d') ? '3d' : '2d';
            // const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
            // e.target.style.transform = `matrix(1, 0, 0, 1, ${e.clientX}, ${e.clientY})`
            // if (matrixType === '2d') {
            //     // matrixValues[4] = 20;
            //     // e.target.style.transform =   
            //     const x = matrixValues[4] / e.target.offsetWidth;
            //     const y = matrixValues[5] / e.target.offsetHeight;
                
            // };
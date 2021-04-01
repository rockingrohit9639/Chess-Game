import { useRef, useState } from "react";
import Piece from "../Tile/Piece";
import React from "react";
import "./ChessBoard.scss";



const ChessBoard = () => {
    const ChessBoardRef = useRef(null);
    const [dragItem, setdragItem] = useState();
    const [isClicked, setisClicked] = useState(false);
    const [currentX, setcurrentX] = useState(undefined);
    const [currentY, setcurrentY] = useState(undefined);
    const [initialX, setinitialX] = useState(undefined);
    const [initialY, setinitialY] = useState(undefined);
    const [xOffset, setxOffset] = useState(0);
    const [yOffset, setyOffset] = useState(0);

    // Handle Events

    const getPosition = element => {
        var xPosition = 0;
        var yPosition = 0;

        while(element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            xPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }

        return {
            x: xPosition,
            y: yPosition
        }
    }

    const handleMouseDown = e => {
        if (e.type == "touchstart") {
            setinitialX(e.touches[0].clientX - xOffset);
            setinitialY(e.touches[0].clientY - yOffset);
        }else {
            if (xOffset === NaN) {
                
            }else {
                var parentPosition = getPosition(ChessBoardRef.current);
                var xPos = e.clientX - parentPosition.x - (e.target.offsetWidth / 2) + 70;
                var yPos = e.clientY - parentPosition.y - (e.target.offsetHeight / 2) -70;
                var transition3dValue = "translate3d(" + xPos + "px," + yPos + "px,0)";
                e.target.style.transform = transition3dValue;
                
            }
            
            
        }

        if (e.target !== ChessBoardRef.current) {
            setdragItem(e.target);
            setisClicked(true);
        }
        

    }

    const handleMouseMove = e => {
        if (isClicked) {
            
            if(e.type == "touchmove"){
                // e.preventDefault();
                setcurrentX(e.touches[0].clientX - initialX);
                setcurrentY(e.touches[0].clientY - initialY);
            }else {
                setcurrentX(e.clientX - initialX);
                setcurrentY(e.clientY - initialY);
              }

            setxOffset(currentX);
            setyOffset(currentY);
            setTranslate(currentX, currentY, dragItem);
        }

    }

    const setTranslate = (xPos, yPos, el) =>{
        
        if (el.style !== undefined) {el.style.transform = "translate(" + xPos + "px, " + yPos + "px)"};
      }

    const handleMouseUp = e => {
        setinitialX(currentX);
        setinitialY(currentY);

        setisClicked(false);
    }
   
    return (
        <>
            <div className="chess-board" >
            {/* <svg viewBox="0 0 100 100" className="coordinates"><text x="0.75" y="3.5" fontSize="2.8" className="coordinate-light">8</text><text x="0.75" y="15.75" fontSize="2.8" className="coordinate-dark">7</text><text x="0.75" y="28.25" fontSize="2.8" className="coordinate-light">6</text><text x="0.75" y="40.75" fontSize="2.8" className="coordinate-dark">5</text><text x="0.75" y="53.25" fontSize="2.8" className="coordinate-light">4</text><text x="0.75" y="65.75" fontSize="2.8" className="coordinate-dark">3</text><text x="0.75" y="78.25" fontSize="2.8" className="coordinate-light">2</text><text x="0.75" y="90.75" fontSize="2.8" className="coordinate-dark">1</text><text x="10" y="99" fontSize="2.8" className="coordinate-dark">a</text><text x="22.5" y="99" fontSize="2.8" className="coordinate-light">b</text><text x="35" y="99" fontSize="2.8" className="coordinate-dark">c</text><text x="47.5" y="99" fontSize="2.8" className="coordinate-light">d</text><text x="60" y="99" fontSize="2.8" className="coordinate-dark">e</text><text x="72.5" y="99" fontSize="2.8" className="coordinate-light">f</text><text x="85" y="99" fontSize="2.8" className="coordinate-dark">g</text><text x="97.5" y="99" fontSize="2.8" className="coordinate-light">h</text></svg> */}
                <div className="ChessBoard" ref={ChessBoardRef}   onTouchMove={e=>handleMouseMove(e)} onTouchEnd={e=>handleMouseUp(e)} onTouchStart={e=>handleMouseDown(e)} onMouseMove={e=> handleMouseMove(e)} onMouseDown={ e=> handleMouseDown(e) } onMouseUp={e=> handleMouseUp(e)}>
                    <Piece ChessBoardRef={ChessBoardRef} />
                </div>
            </div>
        </>
    );
};


export default ChessBoard;

// setxOffset(e.target.offsetLeft);
                // console.log(xOffset);
                // console.log(e)
                // setinitialX(e.clientX - xOffset);
                // setinitialY(e.clientY - yOffset);
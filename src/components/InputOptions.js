import React from 'react';
import './InputOptions.css'

const InputOptions = ({ startGame, props }) => {

    return (
        <div className="container">
    
    <div className="container" id="boardgame">
        <div className="row mt-5">
            <div className="col-md-12 text-center font-weight-bold">
                <p id="titulo">Selecciona simbolo</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-10 col-md-6 mb-2" >
                <input type="text" name="player1" id="player1" placeholder="Jugador" />
            </div>
            <div className="col-10 col-md-6">
                <input type="text" name="player2" id="player2" placeholder="Jugador" />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-6 col-md-6 text-right ">
                <button id=" x" onClick={() => startGame(true)}>X</button>
            </div>
            <div className="col-6 col-md-6 text-left">
                <button id=" o" onClick={() => startGame(false)}>O</button>
            </div>
        </div>
    </div>
</div>
    )
};
    
export default InputOptions;
import React, { useState } from 'react'

export const Challenge02 = () => {

    const [winer, setWiner] = useState({
        player: "",
        score: ""
    })
    const [load, setLoad] = useState(0)
    const [row, setRow] = useState([
        {
            player1: "",
            player2: "",
            winer: "",
            score: ""
        }
    ])

    const handleAddRow = async() => {

        setRow([...row,
            {
                player1: "",
                player2: ""
            }
        ])
    }
    const handleWiner = () => {
        let _player = "";
        let _winer = 0;

        row.forEach( _row => {
            let resul = _row.player1  - _row.player2;
            if ( resul < 0 ) {
                console.log( -( resul ) );
                resul = -( resul );
            }
            _row.score = resul;

            if ( _row.player1 > _row.player2 ) {
                _row.winer = "player 1";
            }
            else{
                _row.winer = "player 2";
            }
        })

        row.forEach( _row => {

            console.log();
            if ( _row.score > _winer ) {
                _winer = _row.score;
                _player = _row.winer;
            }
        })

        setWiner({ player: _player, score: _winer })

    }
    
    const Load = () => setLoad( load + 1 )

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player 1</th>
                        <th scope="col">Player 2</th>
                    </tr>
                </thead>
                <tbody>
                    { row.map( (_row, index) => 
                        <tr>
                            <th scope="row">{ index+1 }</th>
                            <td>
                                <input 
                                    type="text" 
                                    required
                                    className="form-control" 
                                    placeholder="New score" 
                                    value={ _row.player1 } 
                                    onChange={ e => { _row.player1 = e.target.value; Load()}} 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    required
                                    className="form-control" 
                                    placeholder="New score" 
                                    value={ _row.player2 } 
                                    onChange={ e => { _row.player2 = e.target.value; Load()}} 
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <button 
                onClick={ () => handleAddRow() }
                className="btn btn-primary m-2"
            >
                New row
            </button>
            <button 
                onClick={ () => handleWiner() }
                className="btn btn-success m-2"
            >
                Winer
            </button>
            <div className="">
                <p className="text-success m-3">
                    Games: { row.length }
                    Winer: { winer.score }
                    Score: { winer.player }
                </p>
                { load }
            </div>
        </div>
    )
}

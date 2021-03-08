import React, { useState } from 'react'

export const Challenge01 = () => {

    const [state, setstate] = useState({
        word: "",
        loading: false,
        result: ""
    })

    const handleSubmit = ( e ) => {
        e.preventDefault();

        const _word = Array.from( state.word )
        let tem= "";
        let wordClean= "";

        _word.forEach( l => {
            if( l != tem ){
                wordClean = wordClean + l;
                tem= l;
            }
            else
                tem= l;
        })

        const salt1 = wordClean.split('Xcamak');
        const salt2 = salt1[1].split('DLmN');

        setstate({...state, 
            result: salt2
        })
    }

    return (
        <div className="text-center container py-3">
            <form onSubmit={handleSubmit} >
                
                <input 
                    type="text" 
                    required
                    className="form-control" 
                    placeholder="Message" 
                    value={ state.word }
                    onChange={ e => setstate({...state,  word: e.target.value }) }
                />
                
                <button 
                    type="submit" 
                    className="btn btn-primary m-2"
                >
                    { state.loading
                        ? <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        : "Send"
                    }
                </button>
                <h5
                    className="text-success m-3"    
                > 
                    { state.result } 
                </h5>
            </form>
        </div>
    )
}

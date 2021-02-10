import {useEffect} from 'preact/hooks';

export function Win({onRestart,time}){

    useEffect(()=>{
        document.getElementById('restart-button').focus();
    },[]);

    return <div>
        <h2>You got through it in {time} seconds!</h2> 
        <h2>You're a phonetic expert.</h2>
        <button id="restart-button" className="restart-button" onClick={onRestart}>Play again?</button>
    </div>
}
import { useState,useEffect,useRef } from '/@npm/preact/hooks'


let mutableTime = 0;

export const useTimer = ()=>{    

    const [time,setTime] = useState(0);
    const [running,setRunning] = useState(true);
    const interval = useRef();

useEffect(()=>{
    if(running){
    interval.current = window.setInterval(()=>{
        mutableTime=mutableTime+1;
        setTime(mutableTime);
    },1000)
    }
    else{
        window.clearInterval(interval.current);
    }
    return ()=>{window.clearInterval(interval.current);}
},[running]);

const stopTimer= ()=>{setRunning(false)};
const startTimer= ()=>{
    mutableTime=0;
    setTime(0); 
    setRunning(true)
};

return {time,stopTimer,startTimer};

}
import { createHotContext as $w_h$ } from '/_wmr.js'; $w_h$(import.meta.url);
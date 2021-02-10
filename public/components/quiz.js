import {Question} from './question.js'
import {Answer} from './answer.js'
import {useState, useEffect} from 'preact/hooks'

function isSame(string1,string2){
    return string1.trim().toLowerCase()===string2.trim().toLowerCase();
}

export function Quiz({questions,alphabet, onWin}){
    const [currentQuestionIndex,setCurrentQuestionIndex]= useState(0);
    const [currentLetterIndex,setCurrentLetterIndex]= useState(0);

    const letters = questions[currentQuestionIndex].split('').filter(e=>e!=" ");
    const currentLetter = letters[currentLetterIndex].toUpperCase();
    
    useEffect(()=>{
        document.getElementById('answer').focus();
    },[]);

    const onInputChange = (e)=>{

        if(isSame(e.target.value,alphabet[currentLetter])){
            
            if(currentLetterIndex===letters.length-1){
                if(currentQuestionIndex===questions.length-1){
                    onWin();
                }
                setCurrentQuestionIndex(currentQuestionIndex+1);
                setCurrentLetterIndex(0);
                e.target.value="";
                return;
            }
            setCurrentLetterIndex(currentLetterIndex+1);
            e.target.value="";
        }
    }
return <>
	<Question questionContent={questions[currentQuestionIndex]} currentLetterIndex={currentLetterIndex}/>
	<Answer onInputChange={onInputChange}/>
	</>;
}
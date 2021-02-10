import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import {Question} from './question.js'
import {Answer} from './answer.js'
import {useState, useEffect} from '/@npm/preact/hooks'

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
return $$html`
	<${Question} questionContent=${questions[currentQuestionIndex]} currentLetterIndex=${currentLetterIndex}/>
	<${Answer} onInputChange=${onInputChange}/>
	`;
}

import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}

import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
function wordToArray(word){
    return word.split('');
}

export function Question({questionContent, currentLetterIndex}){
    const letterArray=wordToArray(questionContent);

    const getLetterClass = (indexWithSpaces)=>{
        if(letterArray[indexWithSpaces]===" "){
            return ""; 
        }

        let reducer = (indexNoSpaces, input, index)=>{
            if(input===" "&& index<indexWithSpaces){
                return indexNoSpaces-1;
            }
            return indexNoSpaces;
        }
        let indexNoSpaces=letterArray.reduce(reducer,indexWithSpaces);
        
        let letterClass;
        switch(true){
            case (indexNoSpaces<currentLetterIndex):
                letterClass="completed-letter";
            break;
            case(indexNoSpaces===currentLetterIndex):
                letterClass ="current-letter";
            break;
            default:
                letterClass="";
            break;
        }
        return letterClass;
    };

    return $$html`<div className="question">
            <p>Type this message using the phonetic alphabet:</p>
            <div className="letterList">
        ${letterArray.map((letter,index)=>

            $$html`<div class=${"questionLetter "+getLetterClass(index)}>${letter.toUpperCase()}</div>`
        )}
        </div>
    </div>`
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

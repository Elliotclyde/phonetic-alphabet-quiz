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

    return <div className="question">
            <p>Type this message using the phonetic alphabet:</p>
            <div className="letterList">
        {letterArray.map((letter,index)=>

            <div class={"questionLetter "+getLetterClass(index)}>{letter.toUpperCase()}</div>
        )}
        </div>
    </div>
}
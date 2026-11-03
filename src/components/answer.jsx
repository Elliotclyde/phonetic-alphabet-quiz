export function Answer({onInputChange}){
    return <div className="answer">
        <label htmlFor="answer">Enter phonetic word:</label>
        <input id="answer" onInput={onInputChange} type="text"></input>
    </div>
}
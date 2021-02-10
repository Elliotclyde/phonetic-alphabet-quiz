import { render } from 'preact'
import {useState,useEffect} from 'preact/hooks'
import { Quiz } from './components/quiz'
import { Win } from './components/win'
import { Timer } from './components/timer'
import { useTimer } from './utilities/usetimer' 
import {shuffle} from './utilities/utilities'

const states = {loading:"loading",playing:"playing",won:"won"};

let questions;

function App() {
	const [state, setState] = useState(states.loading);
	const [componentQuestions,setComponentQuestions]= useState([]);
	const [alphabet,setAlphabet]= useState(null);
	const {time,stopTimer,startTimer} = useTimer();

	useEffect(()=>{
		fetch("data/data.json")
		.then(response=>response.json()
		.then(result=>{
			questions= result.questions;
			shuffleQuestions();	
			setAlphabet(result.alphabet);
			setState(states.playing);
		})); 
	},[]);

	const shuffleQuestions = ()=>{
		setComponentQuestions(shuffle(questions).slice(0,5));
	}

	const onWin = () => {
		stopTimer();
		setState(states.won);
	}

	const onRestart = () => {
		shuffleQuestions();
		startTimer();
		setState(states.playing);
	}

	const renderState = (state)=>{
		switch(state){
			case states.loading:
				return "loading . . . "
			break;
			case states.playing:
				return (
				<>	
					<Quiz onWin={onWin} questions={componentQuestions} alphabet={alphabet}/>
					<Timer time={time}/>
				</>
				)
			break;
			case states.won:
				return <Win time={time} onRestart={onRestart}/>
			break;
		}
	}

	return <div className="wrapper">
	<h1>Phonetic Alphabet Quiz</h1>
	{renderState(state)}
	</div>;
}

render(<App />, document.body);
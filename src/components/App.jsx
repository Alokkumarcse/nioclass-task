import { useEffect, useState } from "react";

import styles from "./App.module.css";
import Navbar from "./Navbar";
import QuestionCard from "./QuestionCard";
import Button from "./Button";

function App() {
	const [question, setQuestion] = useState("");
	const [questionNumber, setQuestionNumber] = useState(0);
	const [loading, setLoading] = useState(true);

	// array of question Id
	const QuestionID = [
		"AreaUnderTheCurve_901",
		"AreaUnderTheCurve_1",
		"AreaUnderTheCurve_2",
		"BinomialTheorem_901",
		"DifferentialCalculus2_901",
	];

	// root url
	const root =
		"https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails";
	// url === combination of root + questionID
	const url = `${root}?QuestionID=${QuestionID[questionNumber]}`;

	// when ever our url change question related component will re-render
	useEffect(() => {
		// Fetch question data
		async function getQuestion() {
			const res = await fetch(url, {
				mode: "cors",
			});
			const data = await res.json();
			setQuestion(data[0]);
			setLoading(false);
			console.log(data[0]);
		}
		getQuestion();
	}, [url]);

	// console.log(question.Question);

	// FUNCTION: handling the previous button Click
	function showPrevious() {
		if (questionNumber === 0) return;
		setLoading(true);
		setQuestionNumber(questionNumber - 1);
	}

	// FUNCTION: handling the next button Click
	function showNext() {
		if (questionNumber >= QuestionID.length - 1) return;
		setQuestionNumber(questionNumber + 1);
	}

	return (
		<div className={styles.app}>
			<Navbar />
			{loading ? <span>Loading...</span> : <QuestionCard question={question} />}
			<div>
				<Button name="Previous" handleChange={showPrevious} />
				<Button name="Next" handleChange={showNext} />
			</div>
		</div>
	);
}

export default App;

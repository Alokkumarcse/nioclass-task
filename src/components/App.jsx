import { useEffect, useState } from "react";

import styles from "../styles/App.module.css";
import Navbar from "./Navbar";
import QuestionCard from "./QuestionCard";
import Button from "./Button";

function App() {
	const [question, setQuestion] = useState({});
	const [questionNumber, setQuestionNumber] = useState(2);
	const [loading, setLoading] = useState(true);
	const [showPrev, setShowPrev] = useState(true);
	const [showNext, setShowNext] = useState(true);
	const [theme, setTheme] = useState(false);

	// array of question Id
	const QuestionID = [
		"AreaUnderTheCurve_901",
		"BinomialTheorem_901",
		"AreaUnderTheCurve_1",
		"DifferentialCalculus2_901",
		"BinomialTheorem_901",
		"AreaUnderTheCurve_2",
	];

	// root url
	const root =
		"https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails";

	const url = `${root}?QuestionID=${QuestionID[questionNumber]}`;
	// when ever our url change question related component will re-render
	useEffect(() => {
		// Fetch question data
		async function getQuestion() {
			try {
				const res = await fetch(url, { mode: "cors" });
				const data = await res.json();
				setQuestion(data[0]);
				setLoading(false);
			} catch (e) {
				console.log(e.message);
			}
			// console.log(data[0]);
		}
		getQuestion();
	}, [url]);

	// console.log(question.Question);

	// FUNCTION: handling the previous button Click
	function handlePrevious() {
		if (questionNumber === 0) {
			setShowPrev(false);
			return;
		}
		setQuestionNumber(questionNumber - 1);
		setShowPrev(true);
		setShowNext(true);
	}

	// FUNCTION: handling the next button Click
	function handleNext() {
		if (questionNumber >= QuestionID.length - 1) {
			setShowNext(false);
			return;
		}
		setQuestionNumber(questionNumber + 1);
		setShowNext(true);
		setShowPrev(true);
		// setLoading(true);
	}

	// FUNCTION: handle theme change
	function changeTheme() {
		setTheme(!theme);
	}

	return (
		<div className={`${styles.app} ${theme && styles.dark}`}>
			<Navbar theme={theme} changeTheme={changeTheme} />
			{loading ? (
				<span className={styles.spinner}>Loading...</span>
			) : (
				<QuestionCard question={question} theme={theme} />
			)}
			<div className={styles.btn__container}>
				{showPrev && <Button name="prev" handleChange={handlePrevious} />}
				{showNext && <Button name="next" handleChange={handleNext} />}
			</div>
		</div>
	);
}

export default App;

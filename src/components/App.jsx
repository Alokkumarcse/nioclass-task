import { useEffect, useState } from "react";
import { MathJax } from "better-react-mathjax";
import "./App.css";
import Button from "./components/Button";

function App() {
	const [question, setQuestion] = useState("");
	const [questionNumber, setQuestionNumber] = useState(0);
	const [loading, setLoading] = useState(true);

	const QuestionID = [
		"AreaUnderTheCurve_901",
		"AreaUnderTheCurve_1",
		"AreaUnderTheCurve_2",
		"BinomialTheorem_901",
		"DifferentialCalculus2_901",
	];

	const root =
		"https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails";
	const url = `${root}?QuestionID=${QuestionID[questionNumber]}`;

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

	console.log(question.Question);

	function showPrevious() {
		if (questionNumber === 0) return;
		setLoading(true);
		setQuestionNumber(questionNumber - 1);
	}

	function showNext() {
		if (questionNumber >= QuestionID.length - 1) return;
		setQuestionNumber(questionNumber + 1);
	}

	return (
		<div className="App">
			<div>Hello</div>
			{loading ? (
				<span>Loading...</span>
			) : (
				<MathJax styles={{ border: "none !important" }}>
					{question.Question}
				</MathJax>
			)}

			<button onClick={showPrevious}>previous</button>
			<button onClick={showNext}>next</button>
		</div>
	);
}

export default App;

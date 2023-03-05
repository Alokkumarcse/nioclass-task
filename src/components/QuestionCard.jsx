import React from "react";
import { MathJax } from "better-react-mathjax";

function QuestionCard({ question }) {
	console.log(question);
	return (
		<div>
			<div>
				<span>Topic : </span>
				<span>{question.ChapterID}</span>
			</div>
			<div>
				<MathJax>{question.Question}</MathJax>
			</div>
		</div>
	);
}

export default QuestionCard;

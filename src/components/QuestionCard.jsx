import React from "react";
import { MathJax } from "better-react-mathjax";

import styles from "./QuestionCard.module.css";

function QuestionCard({ question }) {
	console.log(question);
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<span className={styles.topic}>Topic : </span>
				<span className={styles.topic__info}>{question.ChapterID}</span>
			</div>
			<div className={styles.content}>
				<MathJax>{question.Question}</MathJax>
			</div>
		</div>
	);
}

export default QuestionCard;

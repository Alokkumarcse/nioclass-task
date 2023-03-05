import React from "react";
import { MathJax } from "better-react-mathjax";

import styles from "../styles/QuestionCard.module.css";

function QuestionCard({ question, theme }) {
	console.log(question);
	return (
		<div className={styles.container}>
			<div className={theme ? styles.info__dark : styles.info__light}>
				<span className={styles.topic}>Topic : </span>
				<span className={styles.topic__info}>{question.ChapterID}</span>
			</div>
			<div className={styles.content}>
				<MathJax hideUntilTypeset={"first"} inline dynamic>
					{question.Question}
				</MathJax>
			</div>
		</div>
	);
}

export default QuestionCard;

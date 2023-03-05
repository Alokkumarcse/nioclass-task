import React from "react";

import styles from "./Button.module.css";

function Button({ name, handleChange }) {
	return (
		<button onClick={handleChange} className={styles.btn}>
			{name === "next" ? (
				<i className="fa-solid fa-square-caret-right"></i>
			) : (
				<i className="fa-solid fa-square-caret-left"></i>
			)}
		</button>
	);
}

export default Button;

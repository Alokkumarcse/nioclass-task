import React from "react";

import styles from "../styles/Button.module.css";

function Button({ name, handleChange }) {
	return (
		<button onClick={handleChange} className={styles.btn}>
			{name}
		</button>
	);
}

export default Button;

import React from "react";
import styles from "../styles/Navbar.module.css";

function Navbar({ theme, changeTheme }) {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo__part}>
				<i className={`bi bi-journal-text ${styles.logo}`}></i>
				<span>NioClass</span>
			
				{theme ? (
					<i
						className={`bi bi-moon-stars ${styles.theme}`}
						onClick={changeTheme}
					></i>
				) : (
					<i
						className={`bi bi-brightness-high ${styles.theme}`}
						onClick={changeTheme}
					></i>
				)}
			</div>
			<div className={styles.contact__part}>
				<i
					className="bi bi-telephone"
					onClick={() => alert("Get in touch:)")}
				></i>
				<i
					className="bi bi-envelope"
					onClick={() => alert("Leave a email :)")}
				></i>
			</div>
		</nav>
	);
}

export default Navbar;

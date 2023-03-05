import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo__part}>
				<i className="bi bi-journal-text"></i>
				<span>NioClass</span>
			</div>
			<div className={styles.contact__part}>
				<i className="bi bi-telephone"></i>
				<i className="bi bi-envelope"></i>
			</div>
		</nav>
	);
}

export default Navbar;

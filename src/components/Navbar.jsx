import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo__part}>
				<i className="fa-solid fa-chalkboard-user"></i>
				<span>NioClass</span>
			</div>
			<div className={styles.contact__part}>
				<i className="fa-solid fa-envelope"></i>
				<i className="fa-solid fa-phone"></i>
			</div>
		</nav>
	);
}

export default Navbar;

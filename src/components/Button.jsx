import React from "react";

function Button({ name, handleChange }) {
	return <button onClick={handleChange}>{name}</button>;
}

export default Button;

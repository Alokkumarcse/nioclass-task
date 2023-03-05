import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { MathJaxContext } from "better-react-mathjax";

// Latex configuration to show mathjax expression correctly
const config = {
	jax: ["input/TeX", "output/HTML-CSS"],
	extensions: ["tex2jax.js"],
	TeX: {
		extensions: ["AMSmath.js", "AMSsymbols.js"],
		equationNumbers: { autoNumber: "AMS" },
		displayMath: [
			["$$", "$$"],
			["\\[", "\\]"],
		],
		inlineMath: [
			["$", "$"],
			["\\(", "\\)"],
		],
		processEscapes: true,
		automaticLinebreaks: true,
	},
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MathJaxContext config={config}>
			<App />
		</MathJaxContext>
	</React.StrictMode>
);

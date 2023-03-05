import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { MathJaxContext } from "better-react-mathjax";

// Latex configuration to show mathjax expression correctly
const config = {
	"fast-preview": {
		disabled: true,
	},
	tex2jax: {
		inlineMath: [
			["$", "$"],
			["\\(", "\\)"],
		],
		displayMath: [
			["$$", "$$"],
			["\\[", "\\]"],
		],
	},
	messageStyle: "none",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MathJaxContext
			version={2}
			config={config}
			onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
		>
			<App />
		</MathJaxContext>
	</React.StrictMode>
);

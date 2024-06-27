import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
	${reset}
	body {
		max-width : 1200px;
		margin: 0 auto;
	}
`;

export default GlobalStyles;

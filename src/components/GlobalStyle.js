import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        background-color: ${({ theme }) => theme.background}
    }
`;

export default GlobalStyle;

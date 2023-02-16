import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color}
    }
`;

export default GlobalStyle;

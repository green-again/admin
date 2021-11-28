import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


const GlobalStyle = createGlobalStyle`
    ${normalize}
    html,
    body{
        overflow-x: hidden;
        width: 100%;
    }
    *{
        border: none;
        outline: none;
        list-style: none;
    }
    button{
        cursor: pointer;
    }
    img{
        width: 100vw;
    }  
`;

export default GlobalStyle;

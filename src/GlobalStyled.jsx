import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-weight: 400;
    
    
    
    body{
        min-height: 100vh;
        background-image: linear-gradient(#041833, #154580);    
        
    }
    body::-webkit-scrollbar {
        width: 3px;
        }
        body::-webkit-scrollbar-track {
        background: linear-gradient(#041833, #154580);
        }
        body::-webkit-scrollbar-thumb {
        background-color: #154580;
        border-radius: 20px;  
        }

        }

`;

export default GlobalStyled;
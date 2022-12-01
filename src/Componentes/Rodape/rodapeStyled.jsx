import styled from "styled-components";

export const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;

background-color: #04244f;
box-shadow: rgba(0, 0, 0, 0.56) 0px -2px 30px ;
height: 60px;
width: 100%;
padding: 24px;
position: fixed;
bottom: 0;

div{
    width: 150px;
    display: flex;
    justify-content: space-between;
}

p{
    color: white;
}
`
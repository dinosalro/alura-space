import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem 24px;

    div{
        display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 10px;
    width: 33%;
    position: relative;
    z-index: 0;  
    }

    div::before{
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 10px;
      z-index: -1;
      border: 2px solid transparent;
      background: linear-gradient(to right, #c98cf1, #7b78e5) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    input {
    width: 80%;
    height: 30px;
    color: #d9d9d9;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    outline: 0;
      
    }

    img {
    cursor: pointer;
  }
`
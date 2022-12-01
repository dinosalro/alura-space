import styled from "styled-components";

export const BoxMenu = styled.div`
    width: 18%;
    
    ul{
    padding-left: 2rem;
    margin: 0;
    height: 260px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    li{
       

    a{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        color: #7b78e5;
        font-family: "GandhiSansRegular";
        text-decoration: none;
        font-size: 1.125rem;

        span{
            margin: 0.2rem;
        }

        :hover{
            color: white;
        }

        
    }
    
    


    img {
    margin-right: 0.5rem;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  

    }
    }
`
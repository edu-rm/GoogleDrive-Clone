import styled, { css } from 'styled-components';

export const Header = styled.div`
  display : flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 18px;
    font-weight: 200;
  }

  button {
    border: 0;
    background: none;
    padding: 8px;

  }

  button:hover{
    background-color: #E2E5E6;
    border-radius: 50%;

  }

  ul {
    display: flex;
    
    li + li{
      margin-left: 25px;
    } 

  }
  
   
`;

export const Container = styled.div`
  /* background-color: red; */
  height:100% ;
  width:80%;
  margin-left: 20%;

  .dropzone {
    height: 100%;
    position: relative;

  }
`;

export const Files = styled.div`
  /* background-color: red; */
  height:100% ;
  padding: 12px 40px 0 12px;

  .header {
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    align-items: center;
    color: rgba(0,0,0,0.65);
    font-weight: bold;
    margin-bottom: 20px;
  }

  .row{
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    padding: 12px 0px;
    cursor: pointer;
    z-index: 2;
    font-weight: bold;
    color: rgba(0,0,0,0.65);
  }

  .row + .row {
    border-top: 1px solid rgba(0,0,0,0.2);
  }

  #active {
    background-color: #E8F0FE;
    color: #1A73E8;
    border: 1px solid #1A73E8;
  }

  

  div {
    display: flex;
    align-items: center;

    svg {
      margin: 0 12px 0 12px;
    }
  }

  ${(props) => css`


  `};

`;
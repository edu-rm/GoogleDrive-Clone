import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: red; */
  height:100% ;
  width:80%;
  margin-left: 20%;
`;

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
  
  /* #drop-zone {
    padding: 500px 0;
    cursor: pointer;
    
  }
  
    */
`;

import styled from 'styled-components';

export const Container = styled.div`
  /* position: fixed; */
  /* margin-top: 10%; */
  /* width: 20%; */
  font-size: 12px;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);


  display: flex;
  flex-direction: column;

  li {
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
  }
  
  li:hover{
    background-color: #E2E5E6;
  }

  button {
    width: 30%;
    margin: 16px 0 16px 20px;
    background: white;
    border: 0;
    padding: 12px 0px;
    border-radius: 20px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }


  a {
    display: flex;
    align-items: center;
    height: 50px;
    margin-left: 20px;
    color: rgba(0,0,0,0.65);
    

    p {
      margin-left: 20px;
    }

  }

  #active {
    background-color: #E8F0FE;
  }

  #active a {
    color: #1A65C8;

  }

`;

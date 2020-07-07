import styled from 'styled-components';

export const Container = styled.div`
  font-size: 12px;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  #items li {
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
  }
  
  #items li:hover{
    background-color: #E2E5E6;
  }

  button {
    display: flex;
    align-items: center;
    width: 40%;
    margin: 16px 0 16px 20px;
    background: white;
    border: 0;
    padding: 12px 20px;
    border-radius: 50px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .new-button {
    position: relative;
  }

  #invisible {
    display: none;
  }

  .menu {
    position: absolute;
    z-index: 10;
    bottom: 8px;
    left: 8px;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.2);
    /* border: 1px solid black; */
    border-radius: 8px;

    
    ul {
      background-color: white;
      /* height: 100%; */
      border-radius: 8px;

      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 12px 24px;
        color: rgba(0,0,0,0.75);

        &:hover {
          background-color: #E2E5E6;
        }

        svg {
          margin-right: 20px;
        }
      }
    }

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




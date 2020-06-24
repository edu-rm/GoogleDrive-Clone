import styled from 'styled-components';


export const Header = styled.header`
  /* margin: 8px 8px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);
  /* z-index: unset; */
  
  height: 10%;


  .logo {
    display: flex;
    align-items: center;
    padding: 12px;

    img {
      width: 35px;
      margin-right:8px;
    }

    h1 {
      color: rgba(0,0,0,0.65);
      font-weight: 400;
      font-size: 30px;
    }
  }

  .right {
    padding: 12px;
  }
  .right a {
    color: rgba(0,0,0,0.65);
    margin-right: 24px;
  }

  .right button {
    padding: 12px 22px;
    border: 0;
    background-color: #1A73E8;
    color: white;
    font-size: 17px;
    letter-spacing: 0.2px;
  }

  .right button:hover {
    opacity: 0.9;
    transition: 200ms;
  }

`;

export const Content = styled.div`
  display: flex;
  padding: 0px 80px;
  align-items: center;
  color: rgba(0,0,0,0.8);
  background-color: #F8F9FA;
  height: 90%;

  button {
    padding: 12px 22px;
    border: 0;
    background-color: #1A73E8;
    color: white;
    font-size: 17px;
    letter-spacing: 0.2px;
  }

  button:hover {
    opacity: 0.9;
    transition: 200ms;
  }

  .text h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .text p {
    margin-bottom: 30px;
    font-size: 16px;
  }

  .image img {
    /* min-width: 300px; */
    width: 500px;
  }

`;
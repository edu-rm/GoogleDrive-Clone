import styled from 'styled-components';

export const Header = styled.header`
  /* margin: 8px 8px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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

  .search {
    position: relative;
    width: 500px;


    button {
      position: absolute;
      background: 0;
      border: 0;
      top: 6px;
      left: 8px;
      padding: 8px;
    }

    button:hover{
      background-color: #E2E5E6;
      border-radius: 50%;
    }

    input {
      padding: 20px 60px;
      width: 100%;
      background-color: #F1F3F4;
      border: 0;
      border-radius: 8px;
    }

    input:focus{
      background-color: white;
      box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);

    }

    input::placeholder{
      margin-left: 20px;
      font-size: 18px;
    }
    
  }

  .right {
    padding: 12px;
  }

  .right img {
    width: 50px;
    border-radius: 50%;
  }

`;
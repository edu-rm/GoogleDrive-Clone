import styled from 'styled-components';



export const Header = styled.header`
  /* margin: 8px 8px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  /* padding: 12px 0; */
  /* z-index: unset; */
  /* position: fixed; */

  
  height: 12%;


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
    width: 600px;


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
      padding: 18px 60px;
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


export const Container = styled.div`
  height: 100%;
  /* position: relative; */
  .left-bar {
    position: fixed;
    width: 20%;
  }
  /* height:90% ; */
`;
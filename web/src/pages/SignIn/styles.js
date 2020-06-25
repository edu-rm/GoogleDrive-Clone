import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
`;

export const Content = styled.div`
  padding: 48px 40px 50px;
  border: 1px solid rgba(0,0,0,0.4);
  border-radius: 8px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;


  h1 {
    font-weight: 200;
    margin-bottom: 12px;
  }

  p{
    font-size: 18px;
    margin-bottom: 40px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 16px 30px;    
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 4px;
    width: 100%;
  }

  form div + div {
    margin-top: 30px;
  }


  .email, .senha {
    position: relative;
    width: 70%;
  }

  .footer-signin {
      display: flex;
      justify-content: space-between;
      width: 70%;
      margin-top: 45px;
      
      #signup {
        color: #1A73E8;
        font-weight: bold;
      }

      button {
        border: 0;
      }

      button a {
        background-color: #1A65C8;
        color: white;
        letter-spacing: 0.2px;
        padding: 10px 40px;
        border-radius: 6px;
        font-weight: bold;
      }
    }

`;
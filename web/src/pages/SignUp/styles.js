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
  align-items: center;
  width: 55%;

  button {
    border: 0;
    background:none;
  }
  /* left side */

  .left {
    width: 60%;

    .nome, .sobrenome, .email, .confirmar-senha, .primeira-senha {
      position: relative;
    }



    h2 {
      font-size: 24px;
      color: rgba(0,0,0,0.92);
      font-weight: 200;
      margin-bottom: 16px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 40px;
      font-weight: 200;
    }

    input {
      padding: 7px 11px;
      border-radius: 4px;
      /* width: 200px; */
      width: 100%;
    }

    .nomes {
      margin-bottom: 32px;
      display: flex;
      div + div {
        margin-left: 20px;
      }
    }

    .email input {
      width: 100%;
      margin-bottom: 32px;
    }
    
    .senha {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
      
      div + div {
        margin: 0 20px 0 20px;
      }
    }

    .form-footer {
      display: flex;
      justify-content: space-between;

      #signin {
        color: #1A73E8;
        font-weight: bold;
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
  }

  .right {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    text-align: center;

    img {
      width: 80%;      
    }

  }

`;

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


  /* left side */

  .left {
    width: 60%;

    .nome, .sobrenome, .email, .confirmar-senha, .primeira-senha {
      position: relative;
    }

    /* Efeitos */

    label {
      position : absolute;
      left: 8px;
      top: 8px;
      cursor: text;
      background-color: white;
      padding: 0 4px;
      color: rgba(0,0,0, 0.5);
      font-weight: 100;
    }

    #effect {
      top: -4px;
      /* right: 8px; */
      font-size: 10px;
      transition: 300ms;
    }

    #no-effect {
      transition: 300ms;
    }

    #outline-effect {
      border: 1px solid blue;
      transition:cubic-bezier(0.075, 0.82, 0.165, 1);
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
      border: 1px solid rgba(0,0,0,0.4);
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

      button {
        border: 0;
      }

      button a {
        background-color: #1A65C8;
        color: white;
        letter-spacing: 0.2px;
        padding: 10px 12px;
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

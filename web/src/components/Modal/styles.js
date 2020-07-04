import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  padding: 50px 50px;
  height: 100%;
  top: 0;
  width: 100%;
  color: black;
  display: ${(props) => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
  

  .folder-name {
    background-color: white;
    padding: 20px 20px;
    width: 30%;
    border-radius: 8px;
    color: rgba(0,0,0,0.75);
    font-size: 16px;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.4);



    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-weight: 100;
      }
    }

    input {
      width: 100%;
      padding: 8px 12px;
      background: transparent;
      border: 1px solid #1A73E8;
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .footer {
      margin: 20px 8px 12px 0; 
      text-align: right;
      
      button {
        border: 0;
        font-size: 12px;
        background-color: transparent;
      }

      button#criar {

        background-color: #4285F4;
        color: white;
        letter-spacing: 0.2px;
        padding: 8px 12px;
        font-weight: bold;
        margin-left: 24px;
        transition: 300ms;

        &:hover {
          box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.2);
        }
      }

      button#cancelar {
        padding: 8px 12px;
        transition: 300ms;
        
        &:hover {
          box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
        }
      }
    }

  }
`;

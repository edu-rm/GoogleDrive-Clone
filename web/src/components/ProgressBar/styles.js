import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.4);
    .header {
      color: white;
      background-color: #323232;
      padding: 20px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .buttons {
        display: flex; 
        align-items: center;
      }

      button {
        margin: 0;
        background: transparent;
        border:0;

        svg {
          color: white;
        }
      }
  }

  #invisible { 
    display: none;
  }

  .body .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);


    .name-icon {
      display: flex;
      align-items: center;
      width: 85%;

      p {
        width: 80%;
      }
      .progress {
        width: 15%;
      }
      svg {
        margin-right: 8px;
      }
    }
  }
`;

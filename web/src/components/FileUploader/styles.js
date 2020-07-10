import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 7%;
  right: 2%;
  background-color: white;
  z-index: 5;
  width: 350px;
  /* border: 1px solid rgba(0,0,0,0.2); */
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.4);

  /* padding: 20px 20px; */

  .header {
    color: white;
    background-color: #323232;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin: 0;
      background: transparent;
      border:0;

      svg {
        color: white;
      }
    }
  }

  .body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;

    .name-icon {
      display: flex;
      align-items: center;
      
      svg {
        margin-right: 8px;
      }
    }
  }
`;

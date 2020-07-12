import styled from 'styled-components';

export const Container = styled.div`
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

  #invisible { 
    display: none;
  }

  .body .item {
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

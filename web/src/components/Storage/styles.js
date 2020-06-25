import styled from 'styled-components';

export const Container = styled.div`
    /* position: fixed; */
    /* margin-top: 10%; */
    /* width: 20%; */
    font-size: 12px;
    font-weight: bold;
    margin-top: 16px;

    a {
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
      display: flex;
      align-items: center;
      height: 50px;
      padding-left: 20px;
      color: rgba(0,0,0,0.65);
    }
    
    .storage p {
      margin-left: 20px;
    }

    a:hover{
      background-color: #E2E5E6;
    }

    .barra {
      color: rgba(0,0,0,0.65);
      font-weight: 100;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 12px 0 auto;
    }

    .barra p {
      margin-bottom: 8px;
    }
    .barra svg {
      background-color: rgba(0,0,0,0.40);

    }
    .barra rect {
      /* fill:rgb(0,0,255); */
      fill:  #ED3237 ;
      background-color: white;
      stroke: gray;
    }
`;

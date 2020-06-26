import styled , { keyframes } from 'styled-components';

const UpAndDown = keyframes`  
  0% { 
    transform: translateY(10px);
  }
  50% { 
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(10px);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  display: none; 
  opacity: 1;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  /* opacity: 0.2; */
  position: absolute;


  svg {
    animation: ${UpAndDown} 1s infinite;
  }

`;



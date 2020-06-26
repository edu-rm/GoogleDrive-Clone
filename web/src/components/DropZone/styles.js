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
  display: flex; 
  justify-content: center;
  align-items: center;

  svg {
    animation: ${UpAndDown} 1s infinite;
  }

`;



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
  position: absolute;
  z-index: 3;

  height: 100%;
  width: 100%;
  display: flex; 
  /* z-index: ${(props)=> props.drag ? 3 : 1 }; */
  /* opacity: 1; */
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  /* opacity: 0.2; */


  svg {
    animation: ${UpAndDown} 1s infinite;
  
  }

`;



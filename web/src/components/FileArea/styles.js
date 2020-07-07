import styled, { keyframes } from 'styled-components';

import PerfectScrollbar from 'react-perfect-scrollbar';


export const Container = styled.div`
  /* background-color: red; */
  height:100% ;
  width:80%;
  margin-left: 20%;
  position: fixed;


  .dropzone {
    height: 100%;
    position: relative;

  }
`;


export const Header = styled.div`
  display : flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 8%;
  h1 {
    font-size: 18px;
    font-weight: 200;
  }

  button {
    border: 0;
    background: none;
    padding: 8px;

  }

  button:hover{
    background-color: #E2E5E6;
    border-radius: 50%;

  }

  ul {
    display: flex;
    /* grid-template-columns: 1fr 200px 1fr; */
    
    #invisible {
      visibility: hidden;
    }
  }
  
   
`;


export const ContextMenuStyle = styled.div`
    /* height: auto; */
    /* overflow: hidden;
    max-height: 0; */
    background-color: white;
    /* border: 1px solid rgba(0, 0, 0, 0.2); */
    /* padding: 20px 20px; */
    width: 300px;
    position: absolute;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    z-index: 10;
    /* top: 0; */
    /* display: flex; */
    top: ${(props) => `${props.y}px`};
    left: ${(props) => `${props.x - 5}px`};

    button {
      background: none;
      width: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      border: 0;
      padding: 12px 20px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      svg {
        margin-right: 12px;
        color: rgba(0, 0, 0, 0.7);
      }
    }


`;

export const Files = styled.div`
  user-select: none; 
  /* background-color: red; */
  height:92% ;
  padding: 12px 40px 0 12px;
  font-size: 12px;


  .header {
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    align-items: center;
    color: rgba(0,0,0,0.65);
    font-weight: bold;
    margin-bottom: 20px;
  }

  .row{
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    padding: 12px 0px;
    cursor: pointer;
    font-weight: bold;
    color: rgba(0,0,0,0.65);
    border-top: 1px solid rgba(0,0,0,0.2);

  }


  #active {
    background-color: #E8F0FE;
    color: #1A73E8;
  }

  

  #name, #owner, #createdAt, #size{
    display: flex; 
    align-items: center;

    svg {
      margin: 0 12px 0 12px;
    }
  }

  

  /* .context-menu  */

`;

export const Scroll = styled(PerfectScrollbar)`
  height: 100%;
  z-index: 2;


`;



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

export const ContainerDrag = styled.div`

  z-index: 3;

  height: 100%;
  width: 100%;

  .drop-area {
    justify-content: center;
    display: flex; 
    height: 100%;
    align-items: center;

  }

  #arrow-down {
    animation: ${UpAndDown} 1s infinite;
    justify-self: center;
  
  }

`;
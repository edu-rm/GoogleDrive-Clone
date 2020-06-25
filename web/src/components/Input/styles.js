import styled, { css } from 'styled-components';

export const InputStyle = styled.div`
/* Efeitos */


${
  (props)=> props.size === 'small'
  ?
  css`
    label {
      top: 8px;
    }
  `
  :
  css`
    label {
      top: 16px;
    }
  `
}

label {
  position : absolute;
  left: 8px;
  /* top: 8px; */
  cursor: text;
  background-color: white;
  padding: 0 4px;
  color: rgba(0,0,0, 0.6);
  font-weight: 100;
}

input {
  background-color: white;
}

${(props) => 
    props.focus ?
    css`
      label{
        top: -4px;
        font-size: 10px;
        transition: 300ms;
        color: #1A73E8;
      }
      input {
        border: 1.5px solid #1A73E8;
      }
    ` 
    :
    css`
      label{
        /* top: -4px;
        font-size: 10px; */
        transition: 300ms;
        /* color: black; */
      }
    `
  }

`;

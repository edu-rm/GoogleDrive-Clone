import styled, { css } from 'styled-components';

export const InputStyle = styled.div`
/* Efeitos */

label {
  position : absolute;
  left: 8px;
  top: 16px;
  cursor: text;
  background-color: white;
  padding: 0 4px;
  color: rgba(0,0,0, 0.6);
  font-weight: 100;

  ${(props) => 
    props.focus ?
    css`
      &{
        top: -4px;
        font-size: 10px;
        transition: 300ms;
        color: black;
      }
    ` 
    :
    css`
      &{
        /* top: -4px;
        font-size: 10px; */
        transition: 300ms;
        /* color: black; */
      }
    `
  }
}





#no-effect {
  transition: 300ms;
}

#outline-effect {
  border: 1px solid blue;
  transition:cubic-bezier(0.075, 0.82, 0.165, 1);
}


`;

import React from 'react';


import { InputStyle } from './styles';

export default function Input({ id, type, labelContent }){

  function handleFocus(e) {
    var label= null;

    var labels = document.getElementsByTagName('LABEL');
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor === e.target.id) {
          label = labels[i];   
          break;   
        }
    }
    label.id = 'effect';
    // e.target.id = 'outline-effect';
  }

  function handleFocusOut(e) {
    var label = null;
    if(! e.target.value ){
      var labels = document.getElementsByTagName('LABEL');
      for ( let i = 0 ; i < labels.length ; i++) {
        if(labels[i].htmlFor === e.target.id){
          label = labels[i];
          break;
        }
      }
      label.id = 'no-effect';
    }
    // e.target.id = 'no-outline-effect';
  }

  return (
    <InputStyle>
      <label htmlFor={id}>{labelContent}</label>
      <input 
        id={id}
        type={type} 
        onBlur={(event) => handleFocusOut(event)} 
        onFocus={(event) => handleFocus(event)}
      />
    </InputStyle>
    
  );
}
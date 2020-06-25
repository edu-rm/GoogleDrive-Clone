/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useCallback } from 'react';


import { InputStyle } from './styles';

export default function Input({ id, type, labelContent }){
  const [isFocused, setIsFocused ]  = useState(false);
  const [isFilled, setIsFilled ]  = useState(false);

  const inputRef = useRef(null);

  function handleFocus(){
    setIsFocused(true);
    // console.log(isFocused);
  };

  function handleBlur(){
    if(inputRef.current.value === ''){
      setIsFocused(false);
    }
    // console.log(isFocused);
  };

  return (
    <InputStyle focus={isFocused}>
      <label htmlFor={id}>{labelContent}</label>
      <input 
        ref={inputRef}
        id={id}
        type={type} 
        onBlur={handleBlur} 
        onFocus={handleFocus}
      />
    </InputStyle>
    
  );
}
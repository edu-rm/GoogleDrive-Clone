/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useCallback } from 'react';


import { InputStyle } from './styles';

export default function Input({ id, type, labelContent, size }){
  const [isFocused, setIsFocused ]  = useState(false);

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
    <InputStyle focus={isFocused} size={size}>
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
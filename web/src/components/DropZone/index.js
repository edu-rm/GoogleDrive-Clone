import React, { useCallback } from 'react';

import { MdGetApp } from 'react-icons/md';

import {useDropzone} from 'react-dropzone'

import { Container } from './styles';

function DropZone() {

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log(acceptedFiles);
    })
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <Container {...getRootProps()}>
      {
        isDragActive &&
        <>
          <input {...getInputProps()} />
          <MdGetApp size={40} />
        </>
      }
      <p>qui</p>
     
    </Container>
  );
}

export default DropZone;
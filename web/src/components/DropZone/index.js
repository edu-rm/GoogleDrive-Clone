import React, { useCallback, useEffect  } from 'react';

import { MdGetApp } from 'react-icons/md';

import {useDropzone} from 'react-dropzone'

import { Container } from './styles';

function DropZone({ setDragActive }) {

  // useEffect(()=> {

  // }, [isDragActive])

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log(file);
    })
    

  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <Container drag={isDragActive} {...getRootProps()}>
      {isDragActive && 
        <>
          <input {...getInputProps()} />
          <MdGetApp size={40} />
        </>
      }
      {/* <p>{String(isDragActive)}</p>    */}
      <p>aqui</p>
    </Container>
  );
}

export default DropZone;
import React, { useState, useEffect } from 'react';
import { toArray } from 'lodash';

import ProgressBar from '../ProgressBar';

import api from '../../services/api';

import { useSelector, useDispatch } from 'react-redux';

import { setUploadProgress,setFileExists } from '../../store/modules/file/actions';
import { setStorage } from '../../store/modules/storage/actions';


import { Container } from './styles';

function FileUploader() {
  const dispatch = useDispatch();
  const files = useSelector((state)=>state.file.files);
  const fileExists = useSelector((state)=>state.file.fileExists);

  const currentFolder = useSelector((state)=>state.folder.currentFolder);


  useEffect(()=>{
    const filesArray = toArray(files);

    if(filesArray.length && fileExists) {
      
      async function requestUploadFile () {

        for(const file of filesArray ){
          const formPayload = new FormData();
          formPayload.append('files', file.file);
          
          try {
            const response = await api.post('files', formPayload, {
              params: {
                folder_id: currentFolder,
              },
              onUploadProgress: progress => {
                const { loaded, total } = progress;
                const percentageProgress = Math.floor((loaded/total) * 100);
                dispatch(setUploadProgress(file.id, percentageProgress));
              }
            });
      
            // dispatch(setStorage(response.data.storage));

          }catch(e) {
            console.log(e);
          }
        
        } 
      }

      requestUploadFile();
      dispatch(setFileExists(false))
    }
    
  },[files, dispatch, currentFolder, fileExists]);

  return (
    <Container>
      <ProgressBar />
    </Container>
  );
}

export default FileUploader;
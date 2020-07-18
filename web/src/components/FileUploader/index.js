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

  const [showProgress, setShowProgress] = useState(false);

  useEffect(()=>{
    async function getStorage() {
      try {
        const response = await api.get('/storage');
        dispatch(setStorage(response.data.storage));
      }catch (e) {
        console.log(e);
      }
    }

    if(!fileExists) {
      getStorage();
    }
  },[dispatch, fileExists])

  useEffect(()=>{
    const filesArray = toArray(files);

    if(filesArray.length && fileExists) {
      setShowProgress(true);
      async function requestUploadFile () {

        filesArray.forEach(async (file) => {
          const formPayload = new FormData();
          formPayload.append('files', file.file);
          
          try {
            await api.post('files', formPayload, {
              params: {
                folder_id: currentFolder,
              },
              onUploadProgress: progress => {
                const { loaded, total } = progress;
                const percentageProgress = Math.floor((loaded/total) * 100);
                dispatch(setUploadProgress(file.id, percentageProgress));
              }
            });
    
          }catch(e) {
            console.log(e);
          }
        
        });
      }

      async function getStorage() {
        try {
          const response = await api.get('/storage');
          dispatch(setStorage(response.data.storage));
        }catch (e) {
          console.log(e);
        }
      }

      requestUploadFile(); 

      const timer = setTimeout(()=> {
        console.log('atualizei')
        getStorage();
      }, 2000) 

      dispatch(setFileExists(false))

      return () => clearTimeout(timer);
    }
    
  },[files, dispatch, currentFolder, fileExists]);

  return (
    <Container>
      {showProgress && <ProgressBar setShow={setShowProgress} />}
    </Container>
  );
}

export default FileUploader;
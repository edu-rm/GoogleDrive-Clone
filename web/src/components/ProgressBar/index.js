import React, {useState,useEffect, useMemo} from 'react';
import { useSelector } from 'react-redux';
import { toArray } from 'lodash';
import { CircularProgress } from '@material-ui/core';

import { AiOutlineFile, AiFillCheckCircle } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from 'react-icons/io';

import { Container } from './styles';

function ProgressBar({ setShow }) {
  // const progress = useSelector((state)=>state.file.progress);
  const files = useSelector((state)=>state.file.files);
  
  // useEffect(()=> {
  //   const array = toArray(files);
  //   console.log(array)
  // }, [files])

  const [menu, setMenu] = useState(true);

  const toUploadSize = useMemo(()=> toArray(files).length, [files]);
  const uploadFinished = useMemo(() => toArray(files).every((file) => file.progress === 100), [files]);



  return (
    
    <Container>
      <div className="header">
        {uploadFinished ?
          <p>{toUploadSize} concluídos</p>
          :
          <p>Fazendo o upload de {toUploadSize} arquivos</p>
        }
        <div className="buttons">

          <button onClick={(e) => setMenu(!menu)}>
            {menu ? <IoIosArrowDown size={24} /> : <IoIosArrowUp size={24} />}
          </button>
          <button onClick={(e) => setShow(false)}>
            <IoIosClose size={30} />
          </button>
        </div>
      </div>
       
      <div className="body" id={menu ? "visible" : "invisible"}>
        {toArray(files).map(file => 
          <div key={file.path} className="item">
            <div className="name-icon">
              <AiOutlineFile size={24} />
              <p>{file.file.name}</p>
            </div>
            <div className="progress">
              {
                file.progress < 100 ?
                <CircularProgress size={24} variant="static" value={file.progress} />
                :
                <AiFillCheckCircle size={24} color="green"/>
              }
            </div> 
          </div>  
        )}
      </div>
    </Container>
  );
}

export default ProgressBar;
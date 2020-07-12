import React, {useState} from 'react';

import { AiOutlineFile, AiFillCheckCircle } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { Container } from './styles';

function ProgressBar() {
  const [menu, setMenu] = useState(true);

  return (
    <Container>
      <div className="header">
        <p>1 upload concluido</p>
        <button onClick={(e) => setMenu(!menu)}>
        {menu ? <IoIosArrowDown size={24} /> : <IoIosArrowUp size={24} />}
        </button>
      </div>
      <div className="body" id={menu ? "visible" : "invisible"}>
        {/* {files.map(file => 
          <div className="item">
            <div className="name-icon">
              <AiOutlineFile size={24} />
              <p>{file.name}</p>
            </div>
            {progress}
            <AiFillCheckCircle size={24} color="green"/>
          </div>  
        )} */}
        <div className="item">
          <div className="name-icon">
            <AiOutlineFile size={24} />
            <p>nome</p>
          </div>
          <AiFillCheckCircle size={24} color="green"/>
        </div>
      </div>
    </Container>
  );
}

export default ProgressBar;
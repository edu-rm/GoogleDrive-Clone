import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

function SignUp() {
  const [inputEffect, setInputEffect] = useState(false);

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
    <Container>
      <Content>
        <div className="left">
          <h2>Criar uma conta Duolc</h2>
          <h3>Preencha seus dados</h3>
          <form>
            <div className="nomes">
              <div className="nome">
                <label htmlFor="input-nome">Nome</label>
                <input 
                  id="input-nome"
                  onBlur={(event) => handleFocusOut(event)} 
                  onFocus={(event) => handleFocus(event)} 
                  type="text"
                />
              </div>
              <div className="sobrenome">
                <label htmlFor="input-sobrenome">Sobrenome</label>
                <input 
                  type="text" 
                  id="input-sobrenome"
                  onBlur={(event) => handleFocusOut(event)} 
                  onFocus={(event) => handleFocus(event)}
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"                   
                onBlur={(event) => handleFocusOut(event)} 
                onFocus={(event) => handleFocus(event)}
              />
            </div>

            <div className="senha">
              <div className="primeira-senha">
                <label htmlFor="senha1">Senha</label>
                <input 
                  type="password" 
                  id="senha1"                  
                  onBlur={(event) => handleFocusOut(event)} 
                  onFocus={(event) => handleFocus(event)}
                />
              </div>
              <div className="confirmar-senha">
                <label htmlFor="senha2">Confirmar</label>
                <input 
                  type="password" 
                  id="senha2"
                  onBlur={(event) => handleFocusOut(event)} 
                  onFocus={(event) => handleFocus(event)}
                />
              </div>

            
              <MdVisibility size={40} color="#000" />
            </div>
            
            <div className="form-footer">
              <Link id="signin" to='/signin'>Faça login</Link>
              <button type="button">
                <Link to='/'>Próxima</Link>
              </button>
            </div>
          </form>
        </div>
        <div className="right">
          <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="defesa"/>
          <p>Uma conta, milhares de arquivos</p>
        </div>
      </Content>
    </Container>
  );
}

export default SignUp;
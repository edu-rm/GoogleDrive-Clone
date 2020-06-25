import React from 'react';

import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

function SignIn() {

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
        <h1>Fazer login</h1>
        <p>Ir para o Duolc</p>
        <form>
          <div className="email">
            <label htmlFor="email-login">Email</label>
            <input 
              id="email-login" 
              type="text"
              onBlur={(event) => handleFocusOut(event)} 
              onFocus={(event) => handleFocus(event)}
            />
          </div>
          <div className="senha">
            <label htmlFor="senha-login">Senha</label>
            <input 
              id="senha-login" 
              type="password"
              onBlur={(event) => handleFocusOut(event)} 
              onFocus={(event) => handleFocus(event)}
            />
          </div>
        </form>
        <div className="footer-signin">
          <Link id="signin" to='/signin'>Faça login</Link>
          <button type="button">
            <Link to='/'>Próxima</Link>
          </button>
        </div>

      </Content>
    </Container>
  );
}

export default SignIn;
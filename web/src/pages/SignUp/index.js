import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import Input from '../../components/Input';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

function SignUp() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [senhaVisible, setSenhaVisible] = useState(false);
  const [inputSenhaType, setInputSenhaType] = useState('password');

  function handleVisibility () {
    setSenhaVisible(!senhaVisible);
    if(inputSenhaType === 'password'){
      setInputSenhaType('text');
      console.log('aqui');
    }else {
      setInputSenhaType('password');
    }
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
                <Input 
                  id="input-nome"
                  type="text"
                  labelContent="Nome"
                  size="small"
                  onChange={setNome}
                />
              </div>
              <div className="sobrenome">
                <Input 
                  type="text" 
                  id="input-sobrenome"
                  labelContent="Sobrenome"
                  size="small"
                  onChange={setSobrenome}
                />
              </div>
            </div>
            <div className="email">
              <Input 
                type="email" 
                id="email"   
                labelContent="Email"
                size="small"
                onChange={setEmail}
              />
            </div>

            <div className="senha">
              <div className="primeira-senha">
                <Input 
                  type={inputSenhaType} 
                  id="senha1"
                  labelContent="Senha"
                  size="small"
                  onChange={setSenha}
                />
              </div>
              <div className="confirmar-senha">
                <Input 
                  type={inputSenhaType} 
                  id="senha2"
                  labelContent="Confirmar"
                  size="small"
                  onChange={setConfirmarSenha}
                />
              </div>

              {
                !senhaVisible 
                ?
                <button onClick={handleVisibility}>
                  <MdVisibility size={40} color="#000" />
                </button>
                :
                <button onClick={handleVisibility}>
                  <MdVisibilityOff size={40} color="#000" />
                </button>
              }
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
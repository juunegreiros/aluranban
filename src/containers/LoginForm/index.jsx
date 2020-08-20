import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FormWrapper, Button, Titulo } from './style';
import FormField from '../../components/FormField';
import { fakeAuth } from '../../Router';
const LoginForm = () => {
  const [nome, setNome] = useState('');
  const history = useHistory();
  const handleTyping = (e) => setNome(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    fakeAuth.autenticar(nome);
    history.push('/boards');
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Titulo>Login</Titulo>

      <FormField label="usuário" value={nome} onChange={handleTyping} />

      <Button>Entrar</Button>
    </FormWrapper>
  );
};

export default LoginForm;

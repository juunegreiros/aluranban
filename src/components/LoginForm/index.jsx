import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FormWrapper, Button, Titulo } from './style';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import autentica from '../../router/autentica';

const LoginForm = () => {
  const valoresIniciais = {
    usuario: '',
  };
  const { handleChange, valores } = useForm(valoresIniciais);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    autentica.autenticar(valores.usuario).then(() => history.push('/boards'));
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Titulo>Login</Titulo>

      <FormField
        label="usuário"
        name="usuario"
        value={valores.usuario}
        onChange={handleChange}
      />

      <Button>Entrar</Button>
    </FormWrapper>
  );
};

export default LoginForm;

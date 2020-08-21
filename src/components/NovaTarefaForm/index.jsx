import React from 'react';
import { Form } from './style';
import FormField from '../FormField';
import useForm from '../../hooks/useForm';

const NovaTarefaForm = ({ cadastrarTarefa }) => {
  const dadosIniciais = {
    usuarioID: 2,
    quadro: '',
    texto: '',
  };
  const { valores, handleChange } = useForm(dadosIniciais);

  const handleSubmit = (evento) => {
    evento.preventDefault();
  };
  return (
    <Form>
      <FormField label="quadro" name="quadro" />
      <FormField label="texto" name="texto" />
      <button>Cadastrar</button>
    </Form>
  );
};

export default NovaTarefaForm;

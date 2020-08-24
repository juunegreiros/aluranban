import React from 'react';
import { Form } from './style';
import FormField from '../FormField';
import useForm from '../../hooks/useForm';
import tarefasApi from '../../api/tarefas';

const NovaTarefaForm = ({ cadastraTarefa }) => {
  const dadosIniciais = {
    usuarioId: 2,
    quadro: '',
    texto: '',
  };
  const { valores, handleChange } = useForm(dadosIniciais);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    cadastraTarefa(valores);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="quadro"
        name="quadro"
        value={valores.quadro}
        onChange={handleChange}
      />

      <FormField
        label="texto"
        name="texto"
        value={valores.texto}
        onChange={handleChange}
      />

      <button>Cadastrar</button>
    </Form>
  );
};

export default NovaTarefaForm;

import React from 'react';
import { TarefaWrapper, Texto, Autor } from './style';

const Tarefa = ({ autor, texto }) => (
  <TarefaWrapper>
    <Texto>{texto}</Texto>

    <Autor>{autor}</Autor>
  </TarefaWrapper>
);

export default Tarefa;

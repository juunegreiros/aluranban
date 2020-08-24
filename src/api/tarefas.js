import conecta, { TAREFAS_URI } from '../api';

const busca = () => conecta(`${TAREFAS_URI}?_expand=usuario`);

const cadastra = (dados) =>
  conecta(TAREFAS_URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(dados),
  });

const remove = (id) =>
  conecta(`${TAREFAS_URI}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

export default {
  busca,
  cadastra,
  remove,
};

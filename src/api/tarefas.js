import conecta, { TAREFAS_URI } from '../api';

const busca = () => conecta(`${TAREFAS_URI}?_expand=usuario`);

const cadastra = (dados) =>
  conecta(TAREFAS_URI, {
    method: 'POST',
    body: dados,
  });

export default {
  busca,
  cadastra,
};

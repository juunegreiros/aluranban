import conecta, { USUARIOS_URI } from '../api';

const busca = () => conecta(`${USUARIOS_URI}?_embed=tarefas`);

export default {
  busca,
};

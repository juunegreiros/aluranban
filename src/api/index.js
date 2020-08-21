export const API_URL = 'http://localhost:4000';

export const USUARIOS_URI = `${API_URL}/usuarios`;

export const TAREFAS_URI = `${API_URL}/tarefas`;

const conecta = (uri) =>
  fetch(uri).then(async (resposta) => {
    if (resposta.ok) {
      const dados = await resposta.json();
      return dados;
    }

    throw new Error(resposta);
  });

const buscaUsuarios = () => conecta(`${USUARIOS_URI}?_embed=tarefas`);

const buscaTarefas = () =>
  fetch(`${TAREFAS_URI}?_expand=usuario`).then(async (resposta) => {
    if (resposta.ok) {
      const dados = await resposta.json();
      return dados;
    }

    throw new Error(resposta);
  });

const buscaTarefasDoUsuario = (id) => conecta(`${USUARIOS_URI}/${id}/tarefas`);

export default {
  buscaUsuarios,
  buscaTarefas,
  buscaTarefasDoUsuario,
};

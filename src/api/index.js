export const API_URL = 'http://localhost:4000';

export const USUARIOS_URI = `${API_URL}/usuarios`;

export const TAREFAS_URI = `${API_URL}/tarefas`;

const conecta = (uri, options = {}) =>
  fetch(uri, options).then(async (resposta) => {
    if (resposta.ok) {
      const dados = await resposta.json();
      return dados;
    }

    throw new Error(resposta);
  });

export default conecta;

import api from '../api';

const autentica = {
  estaAutenticado: false,
  autenticar: function (user) {
    return api.buscaUsuarios().then((usuarios) => {
      const usuarioEstaCadastrado = usuarios.filter(
        (usuario) => usuario.nome === user,
      );

      if (usuarioEstaCadastrado.length) {
        this.estaAutenticado = true;
      }
    });
  },
  deslogar: function (user) {
    this.estaAutenticado = false;
  },
};

export default autentica;

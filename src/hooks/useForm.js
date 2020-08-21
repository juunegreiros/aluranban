import { useState } from 'react';

const useForm = (valoresIniciais) => {
  const [valores, setValores] = useState(valoresIniciais);

  const setValor = (chave, valor) =>
    setValores({
      ...valores,
      [chave]: valor,
    });

  const handleChange = (evento) => {
    const chave = evento.target.getAttribute('name');
    const valor = evento.target.value;

    setValor(chave, valor);
  };

  return {
    valores,
    handleChange,
  };
};

export default useForm;

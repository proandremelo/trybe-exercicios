import React, { useState } from "react";

const INITIAL_STATE = {
  nome: '',
  idade: 0,
  cidade: '',
  modulo: 'fund',
}

const Form = () => {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        name="nome"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="Number"
        placeholder="Idade"
        name="idade"
        value={form.idade}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Cidade"
        name="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <fieldset>
        <legend>Módulo que está estudando</legend>
        <label htmlFor="fund">
          <input
            type="radio"
            name="modulo"
            id="fund"
            value="fund"
            checked={ form.modulo === 'fund'}
            onChange={handleChange}
          />
          Fundamentos
        </label>
        <label htmlFor="front">
          <input
            type="radio"
            name="modulo"
            id="front"
            value="front"
            checked={ form.modulo === 'front'}
            onChange={handleChange}
          />
          Front-End
        </label>
        <label htmlFor="back">
          <input
            type="radio"
            name="modulo"
            id="back"
            value="back"
            checked={ form.modulo === 'back'}
            onChange={handleChange}
          />
          Back-End
        </label>
        <label htmlFor="sc">
          <input
            type="radio"
            name="modulo"
            id="sc"
            value="sc"
            checked={ form.modulo === 'sc'}
            onChange={handleChange}
          />
          Ciência da Computação
        </label>
      </fieldset>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const Form = () => {
  const { form, handleChange, addStudent } = useContext(FormContext);

  const handleClick = () => {
    addStudent(form);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        name="nome"
        value={form.nome}
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
            value="Fundamentos"
            checked={ form.modulo === 'Fundamentos'}
            onChange={handleChange}
          />
          Fundamentos
        </label>
        <label htmlFor="front">
          <input
            type="radio"
            name="modulo"
            id="front"
            value="Front-End"
            checked={ form.modulo === 'Front-End'}
            onChange={handleChange}
          />
          Front-End
        </label>
        <label htmlFor="back">
          <input
            type="radio"
            name="modulo"
            id="back"
            value="Back-End"
            checked={ form.modulo === 'Back-End'}
            onChange={handleChange}
          />
          Back-End
        </label>
        <label htmlFor="sc">
          <input
            type="radio"
            name="modulo"
            id="sc"
            value="Ciência da Computação"
            checked={ form.modulo === 'Ciência da Computação'}
            onChange={handleChange}
          />
          Ciência da Computação
        </label>
      </fieldset>
      <button type="button" onClick={handleClick}>Enviar</button>
    </form>
  );
};

export default Form;
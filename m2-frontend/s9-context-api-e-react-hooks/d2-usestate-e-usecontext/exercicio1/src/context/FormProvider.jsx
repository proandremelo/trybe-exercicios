import React, { useState } from "react";

import FormContext from "./FormContext";

const FORM_INITIAL_STATE = {
  nome: '',
  idade: 0,
  cidade: '',
  modulo: 'Fundamentos',
};

const FormProvider = ({ children }) => {
  const [form, setForm] = useState(FORM_INITIAL_STATE);
  const [students, setStudents] = useState([]);

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
    setForm(FORM_INITIAL_STATE);
  };

  const resetForm = (value) => {
    setForm(value);
  };

  return (
    <FormContext.Provider value={{
      form,
      students,
      handleChange,
      addStudent,
      resetForm,
    }}>
      { children }
    </FormContext.Provider>
  );
};

export default FormProvider;
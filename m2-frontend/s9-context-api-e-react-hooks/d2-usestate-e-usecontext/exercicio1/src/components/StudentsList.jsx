import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const StudentsList = () => {
  const { students } = useContext(FormContext);

  return (
    <section>
      <ul>
        {students.map((student, index) => (<li key={index}>
          <span>{` [ ${student.nome} ] `}</span>
          <span>{` [ ${student.idade} ] `}</span>
          <span>{` [ ${student.cidade} ] `}</span>
          <span>{` [ ${student.modulo} ] `}</span>
        </li>))}
      </ul>
    </section>
  );
};

export default StudentsList;
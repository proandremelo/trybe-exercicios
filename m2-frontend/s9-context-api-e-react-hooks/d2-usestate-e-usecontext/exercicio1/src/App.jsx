import React from 'react';

import Form from './components/Form';
import StudentsList from './components/StudentsList';
import FormProvider from './context/FormProvider';

function App() {
  return (
    <FormProvider>
      <Form />
      <StudentsList />
    </FormProvider>
  );
}

export default App;

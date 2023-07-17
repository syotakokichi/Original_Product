import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientsList from './components/pages/PatientsList';
import PatientCreate from './components/pages/PatientCreate';
import PatientUpdate from './components/pages/PatientUpdate';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/patients/new" element={<PatientCreate />} />
        <Route path="/patients/:id/update" element={<PatientUpdate />} />
      </Routes>
    </Router>
  );
};

export default App;

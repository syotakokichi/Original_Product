// PatientCreate.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { patientListState, Patient } from '../../state/patients';
import PatientForm from '../shared/PatientForm';

const PatientCreate: React.FC = () => {
  const [patients, setPatients] = useRecoilState(patientListState);
  const navigate = useNavigate();

  const onSubmit = (data: Patient) => {
    setPatients([...patients, { ...data, id: patients.length + 1 }]);
    navigate('/patients'); // After submit, redirect to /patients
  };

  return (
    <div>
      <h1>Create Patient</h1>
      <PatientForm onSubmit={onSubmit} />
    </div>
  );
};

export default PatientCreate;

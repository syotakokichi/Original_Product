// PatientCreate.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { patientListState, Patient } from '../../state/patients';
import PatientForm from '../shared/PatientForm';
import { Container, Button } from '../../styles/CommonStyles';
import { FormTitle } from '../../styles/PageStyles';

const PatientCreate: React.FC = () => {
  const [patients, setPatients] = useRecoilState(patientListState);
  const navigate = useNavigate();

  const onSubmit = (data: Patient) => {
    setPatients([...patients, { ...data, id: patients.length + 1 }]);
    navigate('/patients'); // After submit, redirect to /patients
  };

  return (
    <Container>
      <FormTitle>患者登録</FormTitle>
      <PatientForm onSubmit={onSubmit}/>
      <Button onClick={() => navigate('/patients')}>戻る</Button>
    </Container>
  );
};

export default PatientCreate;

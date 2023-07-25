// PatientCreate.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { patientListState, Patient } from '../../state/patients';
import { createPatient } from '../../api/patientsApi'; // createPatientをインポートします
import PatientForm from '../shared/PatientForm';
import { Container, Button } from '../../styles/CommonStyles';
import { FormTitle } from '../../styles/PageStyles';

const PatientCreate: React.FC = () => {
  const [patients, setPatients] = useRecoilState(patientListState);
  const navigate = useNavigate();

  const onSubmit = async (data: Patient) => {
    const newPatient = await createPatient(data); // createPatientを使用してAPIにデータを送信します
    setPatients([...patients, newPatient]); // APIから返された新規患者データをRecoilステートに保存します
    navigate('/patients'); // その後、/patientsにリダイレクトします
  };

  return (
    <Container>
      <FormTitle>患者登録</FormTitle>
      <PatientForm onSubmit={onSubmit} formType="register" />
      <Button onClick={() => navigate('/patients')}>戻る</Button>
    </Container>
  );
};

export default PatientCreate;

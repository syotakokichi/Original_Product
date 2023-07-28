// components/pages/PatientsList.tsx
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { patientListState } from '../../state/patients';
import { getPatients,deletePatient } from '../../api/patientsApi';
import { Container, Button, Link, DeleteButton } from '../../styles/CommonStyles';
import { FormTitle, List, ListItem, PatientDetail } from '../../styles/PageStyles';

const PatientsList: React.FC = () => {
  const [patients, setPatients] = useRecoilState(patientListState);

  useEffect(() => {
    const fetchPatients = async () => {
      const result = await getPatients();
      setPatients(result);
    };

    fetchPatients();
  }, []);

  const handleDelete = async (id: number) => {
    await deletePatient(id);
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <Container>
      <FormTitle>患者一覧</FormTitle>
      <List>
        <ListItem>
          <PatientDetail flexBasis={10}>名前</PatientDetail>
          <PatientDetail flexBasis={5}>性別</PatientDetail>
          <PatientDetail flexBasis={15}>生年月日</PatientDetail>
          <PatientDetail flexBasis={30}>住所</PatientDetail>
          <PatientDetail flexBasis={20}>電話番号</PatientDetail>
          <PatientDetail flexBasis={20}>緊急連絡先</PatientDetail>
          <PatientDetail flexBasis={10}></PatientDetail>
        </ListItem>
        {patients.map((patient) => (
          <ListItem key={patient.id}>
            <PatientDetail flexBasis={10}>
              <Link to={`/patients/${patient.id}/update`}>{patient.name}</Link>
            </PatientDetail>
            <PatientDetail flexBasis={5}>{patient.sex === 'M' ? '男性' : '女性'}</PatientDetail>
            <PatientDetail flexBasis={15}>{patient.dob}</PatientDetail>
            <PatientDetail flexBasis={30}>{patient.address}</PatientDetail>
            <PatientDetail flexBasis={20}>{patient.phone}</PatientDetail>
            <PatientDetail flexBasis={20}>{patient.emergency_contact}</PatientDetail>
            <PatientDetail flexBasis={10}>
              <DeleteButton onClick={() => handleDelete(patient.id)}>削除</DeleteButton>
            </PatientDetail>
          </ListItem>
        ))}
      </List>
      <Link to="/patients/new">
        <Button>新規登録</Button>
      </Link>
    </Container>
  );
}

export default PatientsList;

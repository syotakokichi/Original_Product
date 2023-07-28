// PatientsList.tsx
import { useRecoilValue } from 'recoil';
import { patientListState } from '../../state/patients';
import { Container, Button, Link } from '../../styles/CommonStyles';
import { FormTitle, List, ListItem, PatientDetail } from '../../styles/PageStyles';

const PatientsList: React.FC = () => {
  const patients = useRecoilValue(patientListState);

  return (
    <Container>
      <FormTitle>患者一覧</FormTitle>
      <List>
        <ListItem>
          <PatientDetail flexBasis={15}>名前</PatientDetail>
          <PatientDetail flexBasis={10}>性別</PatientDetail>
          <PatientDetail flexBasis={20}>生年月日</PatientDetail>
          <PatientDetail flexBasis={50}>住所</PatientDetail>
          <PatientDetail flexBasis={25}>電話番号</PatientDetail>
          <PatientDetail flexBasis={25}>緊急連絡先</PatientDetail>
        </ListItem>
        {patients.map((patient) => (
          <ListItem key={patient.id}>
            <PatientDetail flexBasis={15}>
              <Link to={`/patients/${patient.id}/update`}>{patient.name}</Link>
            </PatientDetail>
            <PatientDetail flexBasis={10}>{patient.gender === 'M' ? '男性' : '女性'}</PatientDetail>
            <PatientDetail flexBasis={20}>{patient.birthdate}</PatientDetail>
            <PatientDetail flexBasis={50}>{patient.address}</PatientDetail>
            <PatientDetail flexBasis={25}>{patient.phone}</PatientDetail>
            <PatientDetail flexBasis={25}>{patient.emergency}</PatientDetail>
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

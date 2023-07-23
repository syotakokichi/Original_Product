// PatientsList.tsx
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { patientListState } from '../../state/patients';
import { Container, Button } from '../../styles/CommonStyles';
import { FormTitle, List, ListItem, PatientDetail } from '../../styles/PageStyles';

const PatientsList: React.FC = () => {
  const patients = useRecoilValue(patientListState);

  return (
    <Container>
      <FormTitle>患者一覧</FormTitle>
      <Link to="/patients/new">
        <Button>新規登録</Button>
      </Link>
      <List>
        {patients.map((patient) => (
          <ListItem key={patient.id}>
            <Link to={`/patients/${patient.id}/update`}>
              <PatientDetail>{patient.name}</PatientDetail>
              <PatientDetail>{patient.medicineName}</PatientDetail>
              <PatientDetail>{patient.unit}</PatientDetail>
              <PatientDetail>{patient.dosageTimes}回</PatientDetail>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PatientsList;

// PatientsList.tsx
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { patientListState } from '../../state/patients';

const PatientsList: React.FC = () => {
  const patients = useRecoilValue(patientListState);

  return (
    <div>
      <h1>Patients List</h1>
      <Link to="/patients/new">Add New Patient</Link>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}/update`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientsList;

// PatientUpdate.tsx
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { patientListState } from '../../state/patients';
import { Patient } from '../../state/patients';
import PatientForm from '../shared/PatientForm';

const PatientUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [patients, setPatients] = useRecoilState(patientListState);
  const patientIndex = patients.findIndex(patient => patient.id === Number(id));
  const patient = patients[patientIndex];

  const navigate = useNavigate();

  const onSubmit = (data: Patient) => {
    const updatedPatients = [...patients];
    updatedPatients[patientIndex] = { ...patient, ...data };
    setPatients(updatedPatients);
    navigate("/patients");
  };

  return patient ? (
    <div>
      <h1>Edit Patient</h1>
      <PatientForm defaultValues={patient} onSubmit={onSubmit} />
    </div>
  ) : null;
};

export default PatientUpdate;

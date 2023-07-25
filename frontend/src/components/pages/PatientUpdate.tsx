import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { patientListState } from '../../state/patients';
import { Patient } from '../../state/patients';
import { updatePatient, getPatient } from '../../api/patientsApi'; // updatePatientとgetPatientをインポートします
import PatientForm from '../shared/PatientForm';
import { Container, Button } from '../../styles/CommonStyles';
import { FormTitle } from '../../styles/PageStyles';

const PatientUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [patients, setPatients] = useRecoilState(patientListState);
  const patient = patients.find(patient => patient.id === Number(id));

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatient = async () => {
      const fetchedPatient = await getPatient(Number(id)); // getPatientを使用して特定の患者データをAPIから取得します
      setPatients(prevPatients => prevPatients.map(patient => patient.id === Number(id) ? fetchedPatient : patient)); // 取得した患者データをRecoilステートに保存します
    };
    fetchPatient();
  }, [id, setPatients]);

  const onSubmit = async (data: Patient) => {
    const updatedPatient = await updatePatient(Number(id), data); // updatePatientを使用してAPIにデータを送信します
    setPatients(prevPatients => prevPatients.map(patient => patient.id === Number(id) ? updatedPatient : patient)); // APIから返された更新された患者データをRecoilステートに保存します
    navigate('/patients'); // その後、/patientsにリダイレクトします
  };

  return patient ? (
    <Container>
      <FormTitle>患者情報</FormTitle>
      <PatientForm defaultValues={patient} onSubmit={onSubmit} formType="update" />
      <Button onClick={() => navigate('/patients')}>戻る</Button>
    </Container>
  ) : null;
};

export default PatientUpdate;

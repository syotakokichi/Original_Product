// PatientForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { Patient } from '../../state/patients';

interface PatientFormProps {
  defaultValues?: Patient;
  onSubmit: SubmitHandler<Patient>;
}

const PatientForm: React.FC<PatientFormProps> = ({ defaultValues, onSubmit }) => {
  const { register, handleSubmit } = useForm<Patient>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label>
        名前:
        <input {...register('name')} />
      </label>

      <br />

      <label>
        性別:
        <select {...register('gender')}>
          <option value="M">男性</option>
          <option value="F">女性</option>
        </select>
      </label>

      <br />

      <label>
        生年月日:
        <input type="date" {...register('birthdate')} />
      </label>

      <br />

      <label>
        住所:
        <input {...register('address')} />
      </label>

      <br />

      <label>
        電話番号:
        <input {...register('phone')} />
      </label>

      <br />

      <label>
        緊急連絡先:
        <input {...register('emergency')} />
      </label>

      <br />

      <label>
        薬名:
        <input {...register('medicineName')} />
      </label>

      <br />

      <label>
        単位:
        <input {...register('unit')} />
      </label>

      <br />

      <label>
        服用回数:
        <input type="number" {...register('dosageTimes')} />
      </label>

      <br />

      <input type="submit" />

    </form>
  );
}

export default PatientForm;

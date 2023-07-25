// PatientForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { Patient } from '../../state/patients';
import { Form, FormButton, FormLabel, FormInput, FormSelect } from '../../styles/FormStyles';
import { Button } from '../../styles/CommonStyles';

interface PatientFormProps {
  defaultValues?: Patient;
  onSubmit: SubmitHandler<Patient>;
  formType: 'register' | 'update';
}

const PatientForm: React.FC<PatientFormProps> = ({ defaultValues, onSubmit, formType }) => {
  const { register, handleSubmit } = useForm<Patient>({ defaultValues });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      
      <FormLabel htmlFor="name">
        名前:
        <FormInput {...register('name')} id="name" />
      </FormLabel>

      <FormLabel htmlFor="gender">
        性別:
        <FormSelect {...register('gender')} id="gender">
          <option value="M">男性</option>
          <option value="F">女性</option>
        </FormSelect>
      </FormLabel>

      <FormLabel htmlFor="birthdate">
        生年月日:
        <FormInput type="date" {...register('birthdate')} id="birthdate" />
      </FormLabel>

      <FormLabel htmlFor="address">
        住所:
        <FormInput {...register('address')} id="address" />
      </FormLabel>

      <FormLabel htmlFor="phone">
        電話番号:
        <FormInput {...register('phone')} id="phone" />
      </FormLabel>

      <FormLabel htmlFor="emergency">
        緊急連絡先:
        <FormInput {...register('emergency')} id="emergency" />
      </FormLabel>

      <FormLabel htmlFor="medicineName">
        薬名:
        <FormInput {...register('medicineName')} id="medicineName" />
      </FormLabel>

      <FormLabel htmlFor="unit">
        単位:
        <FormInput {...register('unit')} id="unit" />
      </FormLabel>

      <FormLabel htmlFor="dosageTimes">
        服用回数:
        <FormInput type="number" {...register('dosageTimes')} id="dosageTimes" />
      </FormLabel>

      <FormButton type="submit">{formType === 'update' ? '更新する' : '登録する'}</FormButton>

    </Form>
  );
}

export default PatientForm;

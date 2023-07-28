// patians.ts
import { atom } from 'recoil';

export interface Patient {
  id: number;
  name: string;
  gender: string;
  birthdate: string;
  address: string;
  phone: string;
  emergency: string;
  medicineName: string;
  unit: string;
  dosageTimes: number;
}

export const patientListState = atom<Patient[]>({
  key: 'patientListState',
  default: [],
});

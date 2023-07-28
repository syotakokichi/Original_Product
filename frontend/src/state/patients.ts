// state/patients.ts
import { atom } from 'recoil';

export interface Patient {
  id: number;
  name: string;
  sex: string;
  dob: string;
  address: string;
  phone: string;
  emergency_contact: string;
}

export const patientListState = atom<Patient[]>({
  key: 'patientListState',
  default: [],
});

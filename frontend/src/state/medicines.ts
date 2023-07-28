// state/medicines.ts
import { atom } from 'recoil';

export interface Medicine {
  id: number;
  name: string;
  unit: string;
  dosageTimes: number;
}

export const medicineListState = atom<Medicine[]>({
  key: 'medicineListState',
  default: [],
});

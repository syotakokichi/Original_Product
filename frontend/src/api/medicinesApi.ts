// api/medicinesApi.ts
import api from './axiosConfig';
import { Medicine } from '../state/medicines';

export const getMedicines = async () => {
  try {
    const response = await api.get<Medicine[]>('/medicines');
    return response.data;
  } catch (e) {
    console.error("Error fetching medicines:", e);
    throw e;
  }
};

export const createMedicine = async (medicine: Medicine) => {
  try {
    const response = await api.post<Medicine>('/medicines', medicine);
    return response.data;
  } catch (e) {
    console.error("Error creating medicine:", e);
    throw e;
  }
};

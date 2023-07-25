// api/patientsApi.ts
import api from './axiosConfig';
import { Patient } from '../state/patients'; 

export const getPatients = async () => {
  const response = await api.get<Patient[]>('/patients');
  return response.data;
};

export const getPatient = async (id: number) => {
  const response = await api.get<Patient>(`/patients/${id}`);
  return response.data;
};

export const createPatient = async (patient: Patient) => {
  const response = await api.post<Patient>('/patients', patient);
  return response.data;
};

export const updatePatient = async (id: number, patient: Patient) => {
  const response = await api.put<Patient>(`/patients/${id}`, patient);
  return response.data;
};

export const deletePatient = async (id: number) => {
  const response = await api.delete(`/patients/${id}`);
  return response.data;
};

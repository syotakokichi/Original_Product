// api/patientsApi.ts
import api from './axiosConfig';
import { Patient } from '../state/patients';

export const getPatients = async () => {
  try {
    const response = await api.get<Patient[]>('/patients');
    return response.data;
  } catch (e) {
    console.error("Error fetching patients:", e);
    throw e;
  }
};

export const getPatient = async (id: number) => {
  try {
    const response = await api.get<Patient>(`/patients/${id}`);
    return response.data;
  } catch (e) {
    console.error(`Error fetching patient with id ${id}:`, e);
    throw e;
  }
};

export const createPatient = async (patient: Patient) => {
  try {
    const response = await api.post<Patient>('/patients', patient);
    return response.data;
  } catch (e) {
    console.error("Error creating patient:", e);
    throw e;
  }
};

export const updatePatient = async (id: number, patient: Patient) => {
  try {
    const response = await api.put<Patient>(`/patients/${id}`, patient);
    return response.data;
  } catch (e) {
    console.error(`Error updating patient with id ${id}:`, e);
    throw e;
  }
};

export const deletePatient = async (id: number) => {
  try {
    const response = await api.delete(`/patients/${id}`);
    return response.data;
  } catch (e) {
    console.error(`Error deleting patient with id ${id}:`, e);
    throw e;
  }
};
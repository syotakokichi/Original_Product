// styles/FormStyles.ts
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormButton = styled.button`
  width: fit-content;
  margin-top: 8px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: #008CBA; // Teal color
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #007B9A; // Darken teal color
  }
`;

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FormInput = styled.input`
  margin-left: 8px;
  flex-grow: 1;
`;

export const FormSelect = styled.select`
  margin-left: 8px;
  flex-grow: 1;
`;
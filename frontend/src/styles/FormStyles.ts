// styles/FormStyles.ts
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const FormInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const FormSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;


export const FormButton = styled.button`
  width: fit-content;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: #76bcbd;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #66a6a9;
  }
`;

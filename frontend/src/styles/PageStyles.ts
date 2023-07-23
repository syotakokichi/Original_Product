// styles/PageStyles.ts
import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const FormTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 16px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormButton = styled.button`
  width: fit-content;
`;

export const PatientDetail = styled.span`
  margin-right: 10px;
`;
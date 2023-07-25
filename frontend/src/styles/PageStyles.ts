// styles/PageStyles.ts
import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;


export const FormTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 16px;
  text-align: center;
  color: #76bcbd;
`;

export const PatientDetail = styled.span<{ flexBasis: number }>`
  flex-basis: ${({ flexBasis }) => `${flexBasis}%`};
  margin-right: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all; 
`;

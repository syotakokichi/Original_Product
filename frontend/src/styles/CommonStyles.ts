// styles/CommonStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 16px;
`;

export const Button = styled.button`
  width: fit-content;
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 8px;
  cursor: pointer;
  &:hover {
    background-color: #3d8c40; // Darken teal color
  }
`;
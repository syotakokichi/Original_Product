// styles/CommonStyles.ts
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';


export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 16px;
`;

export const Button = styled.button`
  display: block;
  width: 200px;
  height: 40px;
  margin: 16px auto;
  border: none;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  color: #76bcbd;
  background-color: white;
  border: 2px solid #76bcbd; 
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #76bcbd;
    color: white;
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: none;
  }
  &:visited {
    text-decoration: underline;
  }
`;

export const DeleteButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: #e3342f; // Red background for delete button
  &:hover {
    background-color: #cc1f1a; // Darker red on hover
  }
`;

// styles/AppStyles.ts
import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const Nav = styled.nav`
  margin-bottom: 16px;
  a {
    color: blue;
    text-decoration: none;
    margin-right: 8px;
    &:hover {
      color: darkblue;
    }
  }
`;

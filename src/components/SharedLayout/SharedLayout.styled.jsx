import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const HeaderStyled = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
`;
export const NavLinkStyled = styled(NavLink)`
  padding: 6px;
  border-radius: 8px;

  &.active {
    background-color: var(--color-text);
  }
`;

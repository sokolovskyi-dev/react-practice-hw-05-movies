import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkStyled = styled(Link)`
  display: inline-flex;
  gap: 3px;
  padding: 6px;

  transition: all 0.2s ease;

  &:hover {
    scale: 1.05;
  }
`;

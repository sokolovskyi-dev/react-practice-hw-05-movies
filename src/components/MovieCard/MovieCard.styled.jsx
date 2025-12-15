import styled from 'styled-components';

export const ImageWrapper = styled.div`
  height: 400px;
  // overflow: hidden;

  & img {
    // width: 100%;
    height: 100%;
    // object-fit: cover;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

import React from 'react';

import { IoIosArrowRoundBack } from 'react-icons/io';

// import { Link } from 'react-router-dom';
import { BackLinkStyled } from './BackLink.styled';
const BackLink = ({ to }) => {
  return (
    <BackLinkStyled to={to}>
      <IoIosArrowRoundBack />
      Go back
    </BackLinkStyled>
  );
};

export default BackLink;

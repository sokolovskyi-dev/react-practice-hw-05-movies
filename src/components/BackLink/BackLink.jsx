import React from 'react';

import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
const BackLink = () => {
  return (
    <Link>
      <IoIosArrowRoundBack />
      Go back
    </Link>
  );
};

export default BackLink;

import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';

import { HeaderStyled, NavLinkStyled, NavList } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <NavList>
            <li>
              <NavLinkStyled to="/" end>
                Home
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </li>
          </NavList>
        </nav>
      </HeaderStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

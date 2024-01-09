import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;

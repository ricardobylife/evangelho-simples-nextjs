import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

function Header(props) {
  return (
    <header>
      <Nav>
      <div className="logo">
      EVANGELHO SIMPLES
      </div>
      <Burger />
    </Nav>
    </header>
  );
}

export default Header;
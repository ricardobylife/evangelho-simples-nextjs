import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  margin-top: 3em;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo {
    padding-left: 1em;
    font-size: 2.5em;
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

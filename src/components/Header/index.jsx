import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  margin-top: 3em;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family:'Anton', sans-serif;

  .logo {
    margin-left: 0.2em;
    font-size: 2.5em;
    white-space: nowrap;
    font-family: 'Anton';
    
  }

  a{
    font-size: 17px;
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

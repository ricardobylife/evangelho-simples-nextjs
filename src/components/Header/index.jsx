import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  
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
    font-size: 1.45em;
    letter-spacing: 0.03em;
  }
  @media screen and (max-width: 768px) {
    .logo{
      margin-top: 0;
    }
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

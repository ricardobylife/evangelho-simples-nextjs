import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  

   a {
     padding: 16px
   }
`;

function Header(props) {
  return (
    <header>
      <h3>EVANGELHO SIMPLES</h3>
      <Nav>
        <Link href="/philosophy">
          <a>Filosofia de ministério</a>
        </Link>
        <Link href="/about">
          <a>O que cremos</a>
        </Link>
        <Link href="/pastors">
          <a>Pastores</a>
        </Link>
        <Link href="/history">
          <a>Nossa História</a>
        </Link>
        <Link href="/services">
          <a>Ministérios</a>
        </Link>
        <Link href="/our-dream">
          <a>Nosso Sonho</a>
        </Link>
        <Link href="/location">
          <a>Localização</a>
        </Link>
      </Nav>
    </header>
  );
}

export default Header;

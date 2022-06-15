import React from 'react';
import styled from 'styled-components';

const NavMain = styled.nav`
  font-size: 3em;

  ul {
    list-style: none;
    text-align: right;
  }
  li:hover{
    font-size: 3.2rem;
    word-wrap: no-wrap;
    transition: all 0.3s ease-in-out;
  }
`;

function MainNav(props) {
  return (
      <NavMain>
        <ul>
          <li>
            <a href="#">SÉRIES</a>
          </li>
          <li>
            <a href="#">PODCASTS</a>
          </li>
          <li>
            <a href="#">CONTRIBUIÇÃO</a>
          </li>
          <li>
            <a href="#">GABINETE ONLINE</a>
          </li>
          <li>
            <a href="#">CONTATO</a>
          </li>
        </ul>
      </NavMain>
  );
}

export default MainNav;

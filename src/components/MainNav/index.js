import React from 'react';
import styled from 'styled-components';

const NavMain = styled.nav`
  font-size: 3em;

  ul {
    list-style: none;
  }
`;

function MainNav(props) {
  return (
    <nav>
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
    </nav>
  );
}

export default MainNav;

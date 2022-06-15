import React from 'react';
import styled from 'styled-components';

const NavMain = styled.nav`
  font-size: 3em;

  @media screen and (max-width: 768px) {
    li {
      font-size: 0.7em;
    }
  }

  ul {
    list-style: none;
    text-align: right;
    white-space: nowrap;
    font-family: 'Anton', sans-serif;
  }
  li {
    margin-top: -20px;
    margin-bottom: -17px;
  }
  li:hover {
    font-size: 3.2rem;

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

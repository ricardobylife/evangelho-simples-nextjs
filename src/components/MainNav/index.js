import React from 'react';
import styled from 'styled-components';

const NavMain = styled.nav`
  ul {
    list-style: none;
    text-align: right;
    white-space: nowrap;
    font-family: 'Anton', sans-serif;
  }
  li {
    font-size: clamp(0.5em, 7vw, 3.2em);
    margin-top: -20px;
    margin-bottom: -17px;
  }
  li:hover {
    font-size: clamp(1em, 12vw, 3.5em);

    transition: all 0.3s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    li {
      font-size: clamp(1em, 9vw, 3em);
    }
    li:hover {
      font-size: clamp(1em, 10vw, 3.2em);
    }
  }
  @media screen and (max-width: 480px) {
    li {
      font-size: clamp(1em, 10vw, 3em);
    }
    li:hover {
      font-size: clamp(1em, 11vw, 3.2em);
    }
  }
  @media screen and (max-width: 425px) {
    ul {
      text-align: center;
    }
    li {
      padding-top: 0.1em;
    }
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

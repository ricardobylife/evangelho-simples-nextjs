import React from 'react';
import styled, {css} from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 2em;
  li{
    padding: 0 10px;
    text-align: center;
  }


  @media (max-width: 850px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    right: 0;
    top: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    ${({ open }) => open && css`
      position: fixed;
    `}

    li {
      color: #000000;
      padding: 0.25em 0 0.25em 0;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li>
            <a>FILOSOFIA DE MINISTÉRIO</a>
       </li>
        <li>
            <a>O QUE CREMOS</a>
        </li>
        <li>
            <a>PASTORES</a>
            </li>
            <li><a>NOSSA HISTÓRIA</a> </li>
        <li>
            <a>MINISTÉRIOS</a>
        </li>
        <li>
            <a>NOSSO SONHO</a>
        </li>
        <li>
            <a>LOCALIZAÇÃO</a>
        </li>
    </Ul>
  )
}

export default RightNav

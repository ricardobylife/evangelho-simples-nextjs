import React from 'react';
import styled, {css} from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 2em;
  font-size: 12px;
  li{
    padding: 0 10px;
    text-align: center;
  }


  @media (max-width: 915px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${({ open }) => open ? 'translateX(12%)' : 'translateX(160%)'};
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    

    li {
      color: #000000;
      font-family: 'Chivo', sans-serif;
      font-weight: 500;
      padding: 0.4em 0 0.25em 0;
      cursor: pointer;
    }
    li:hover{
      
      color: #2d2727;
      text-decoration: underline;
      transition: 300ms;
      
    }
    
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li>
            <a href='#'>FILOSOFIA DE MINISTÉRIO</a>
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

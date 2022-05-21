import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #000000;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li>
            <a>Filosofia de ministério</a>
       </li>
        <li>
            <a>O que cremos</a>
        </li>
        <li>      
            <a>Pastores</a>  
            </li>   
            <li><a>Nossa História</a> </li>
        
        <li> 
            <a>Ministérios</a>
        </li>
        <li>
            <a>Nosso Sonho</a>
        </li>
        <li>
            <a>Localização</a>
        </li>
    </Ul>
  )
}

export default RightNav

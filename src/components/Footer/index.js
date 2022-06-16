import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0px;
  margin: auto;
  width: 100%;
  padding: 16px;
  font-size: 8px;
  text-align: center;

  p {
    padding-top: 0.6em;
  }

  #socialInstagram {
    color: black;
  }
`;

function Footer(props) {
  return (
    <StyledFooter>
      <div>
        <div className="container" id="social">
          <div id="socialInstagram">
            <a
              href="https://www.instagram.com/evangelho.simples/"
              target="blank"
            >
              <Image
                src="/images/icon-instagram.png"
                width="100"
                height="100"
                alt=""
                title=""
              />
            </a>
          </div>
          <a
            href="https://www.facebook.com/evangelhosimples.com.br"
            target="blank"
          >
            <Image
              src="/images/icon-facebook.png"
              width="100"
              height="100"
              alt=""
              title=""
            />
          </a>
          <a
            href="https://www.youtube.com/c/EvangelhoSimplesOficial/videos"
            target="blank"
          >
            <Image
              src="/images/icon-youtube.png"
              width="100"
              height="100"
              alt=""
              title=""
            />
          </a>
          <a href="#">
            <Image
              src="/images/icon-whatsapp.png"
              width="100"
              height="100"
              alt=""
              title=""
            />
          </a>
        </div>
        <p>Evangelho Simples todos os direitos reservados - 2022</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;

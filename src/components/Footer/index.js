import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0px;
  margin: auto;
  width: 100%;
  padding: 16px;
  font-size: 8px;
  text-align: center;

  p {
    padding-top: 0.6em;
  }

  .socialLogo {
    padding-left: 5px;
    padding-right: 5px;
  }

  .socialLogo:hover {
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 380px) {
    .socialLogo:hover {
      width: 100px;
      height: 100px;
    }

    div {
      display: flex;
    }
  }
`;

function Footer(props) {
  return (
    <StyledFooter>
      <div>
        <div className="container" id="social">
          <div className="socialLogo">
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
                id="instaLogo"
              />
            </a>
          </div>
          <div className="socialLogo">
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
          </div>
          <div className="socialLogo">
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
          </div>
          <div className="socialLogo">
            <a
              href="https://api.whatsapp.com/send?phone=5512992366230&text=Ol%C3%A1.%20Vim%20pelo%20site%20do%20Evangelho%20Simples."
              target="blank"
            >
              <Image
                src="/images/icon-whatsapp.png"
                width="100"
                height="100"
                alt=""
                title=""
              />
            </a>
          </div>
        </div>
        <p>Evangelho Simples todos os direitos reservados - 2022</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;

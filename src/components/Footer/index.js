import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding-bottom: clamp(4px, 0.2px + 0.5vh, 16px);
  font-size: 8px;
  text-align: center;

  /* #social {
    padding-bottom: 3%;
  } */

  .socialLogo {
    padding: 0 5px;
    width: clamp(40px, 13vh, 500px);
    height: clamp(40px, 13vh, 500px);
  }

  .socialLogo:hover {
    width: clamp(40px, 17vh, 200px);
    height: clamp(40px, 17vh, 200px);
  }
  @media screen and (max-width: 425px) {
    .socialLogo {
      width: clamp(40px, 9.5vh, 80px);
      height: clamp(40px, 9.5vh, 80px);
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
                width="300"
                height="300"
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
                width="300"
                height="300"
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
                width="300"
                height="300"
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
                width="300"
                height="300"
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

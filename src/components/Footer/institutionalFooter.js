import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledFooter = styled.div`
  #allFooter {
    position: initial;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    padding-bottom: clamp(4px, 0.2px + 0.5vh, 16px);
    font-size: 8px;
    text-align: center;
  }

  p {
    font-size: 8px;
    text-align: center;
  }

  .socialLogo {
    padding: 0 5px;
    width: clamp(40px, 13vh, 110px);
    height: clamp(40px, 13vh, 110px);
  }
  //animation for social in footer
  .socialLogo:hover {
    width: clamp(40px, 17vh, 130px);
    height: clamp(40px, 17vh, 130px);
  }

  //media screen to set footer adjustment for mobile
  @media screen and (max-width: 425px) {
    .socialLogo {
      width: clamp(40px, 9.5vh, 80px);
      height: clamp(40px, 9.5vh, 80px);
    }
    .socialLogo:hover {
      width: clamp(40px, 12vh, 100px);
      height: clamp(40px, 12vh, 100px);
    }
  }
  //media screen to set footer  position to initial, preventing break in landscape use
  @media screen and (max-height: 600px) {
    #allFooter {
      position: initial;
      margin-top: 2.5em;
    }
  }
`;

function InstitutionalFooter(props) {
  return (
    <StyledFooter>
      <div id="allFooter">
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
                layout="responsive"
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
                layout="responsive"
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
                layout="responsive"
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
                layout="responsive"
              />
            </a>
          </div>
        </div>
        <p>Evangelho Simples todos os direitos reservados - 2022</p>
      </div>
    </StyledFooter>
  );
}

export default InstitutionalFooter;

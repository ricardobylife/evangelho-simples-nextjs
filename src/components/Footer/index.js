import React from 'react';
import Image from 'next/image';

function Footer(props) {
  return (
    <footer>
      <div>
        <div className="container" id="social">
          <a href="https://www.instagram.com/evangelho.simples/" target="blank">
            <Image
              src="/images/icon-instagram.png"
              width="100"
              height="100"
              alt=""
              title=""
            />
          </a>
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
    </footer>
  );
}

export default Footer;

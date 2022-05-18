import React from 'react';
import Image from 'next/image';

function Footer(props) {
  return (
    <footer>
      <div>
        <a href="#"><Image src="/images/icon-instagram.png" width="100" height="100" alt="" title="" /></a>
        <a href="#"><Image src="/images/icon-facebook.png" width="100" height="100" alt="" title="" /></a>
        <a href="#"><Image src="/images/icon-youtube.png" width="100" height="100" alt="" title="" /></a>
        <a href="#"><Image src="/images/icon-whatsapp.png" width="100" height="100" alt="" title="" /></a>
      </div>
      <p>Evangelho Simples todos os direitos reservados - 2022</p>
    </footer>
  );
}

export default Footer;
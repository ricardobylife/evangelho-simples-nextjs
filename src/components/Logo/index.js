import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  alt: PropTypes.string
};

function Logo({
  width = 265,
  height = 265,
  title = 'Evangelho Simples',
  alt = 'Evangelho Simples'
}) {
  return (
    <div>
      <Image
        src="/images/logo-evsimples-white.png"
        alt={alt}
        title={title}
        width={width}
        height={height}
      />
    </div>
  );
}

export default Logo;

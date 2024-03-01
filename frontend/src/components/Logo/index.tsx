import Image from 'next/image';
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Image
      src={'/Logo.png'}
      width={120}
      height={45}
      alt='Logo'
      className={className}
    />
  );
};

export default Logo;

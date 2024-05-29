import React from 'react';

const MyIcon = ({ size = 24, color = 'black' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L2 22h20L12 2z" fill={color} />
  </svg>
);

export default MyIcon;

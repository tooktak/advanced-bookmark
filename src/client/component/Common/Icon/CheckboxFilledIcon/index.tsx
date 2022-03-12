import React from "react";

const CheckboxFilledIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="14" height="14" rx="2" stroke={color} strokeWidth="2"/>
      <path d="M7.5 12.2353L10.7727 16L13.6364 12L16.5 8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default CheckboxFilledIcon;

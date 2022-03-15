import React from "react";

const CheckboxEmptyIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="14" height="14" rx="2" stroke={color} stroke-width="2"/>
    </svg>
  );
};

export default CheckboxEmptyIcon;

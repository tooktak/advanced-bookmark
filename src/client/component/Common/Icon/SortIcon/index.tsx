import React from "react";

const SortIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="16" height="3" fill={color}/>
      <rect x="4" y="17" width="8" height="3" fill={color}/>
      <rect x="4" y="10.5" width="12" height="3" fill={color}/>
    </svg>

  );
};

export default SortIcon;

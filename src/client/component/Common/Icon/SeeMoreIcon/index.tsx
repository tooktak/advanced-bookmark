import React from "react";

const SeeMoreIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10.5" y="4" width="3" height="3" fill={color}/>
      <rect x="10.5" y="10.5" width="3" height="3" fill={color}/>
      <rect x="10.5" y="17" width="3" height="3" fill={color}/>
    </svg>
  );
};

export default SeeMoreIcon;

import React from "react";

const DragIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="9" width="18" height="2" fill={color}/>
      <rect x="3" y="13" width="18" height="2" fill={color}/>
    </svg>
  );
};

export default DragIcon;

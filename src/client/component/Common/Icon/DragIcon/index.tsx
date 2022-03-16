import React from "react";

const DragIcon: React.FC<IconProps> = ({ size="24" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="9" width="18" height="2" fill="currentColor"/>
      <rect x="3" y="13" width="18" height="2" fill="currentColor"/>
    </svg>
  );
};

export default DragIcon;

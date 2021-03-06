import React from "react";

const FolderIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 18.5H5.5C4.67157 18.5 4 17.8284 4 17V7C4 6.17157 4.67157 5.5 5.5 5.5H8.87868C9.2765 5.5 9.65803 5.65803 9.93934 5.93934L11.0607 7.06066C11.342 7.34196 11.7235 7.5 12.1213 7.5H18.5C19.3284 7.5 20 8.17157 20 9V17C20 17.8284 19.3284 18.5 18.5 18.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};

export default FolderIcon;

import React from "react";

const CloseIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18.0104" y="20.1317" width="20" height="3" transform="rotate(-135 18.0104 20.1317)" fill={color}/>
      <rect x="3.86827" y="18.0104" width="20" height="3" transform="rotate(-45 3.86827 18.0104)" fill={color}/>
    </svg>
  );
};

export default CloseIcon;

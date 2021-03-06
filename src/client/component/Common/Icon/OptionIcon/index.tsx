import React from "react";

const OptionIcon: React.FC<IconProps> = ({ size="24" , color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12Z" fill={color}/>
      <rect x="10" y="2" width="4" height="3" fill={color}/>
      <rect x="2" y="14" width="4" height="3" transform="rotate(-90 2 14)" fill={color}/>
      <rect x="19" y="14" width="4" height="3" transform="rotate(-90 19 14)" fill={color}/>
      <rect x="10" y="19" width="4" height="3" fill={color}/>
      <rect x="17.6567" y="3.51477" width="4" height="3" transform="rotate(45 17.6567 3.51477)" fill={color}/>
      <rect x="3.51465" y="6.34314" width="4" height="3" transform="rotate(-45 3.51465 6.34314)" fill={color}/>
      <rect x="15.5356" y="18.364" width="4" height="3" transform="rotate(-45 15.5356 18.364)" fill={color}/>
      <rect x="5.63623" y="15.5355" width="4" height="3" transform="rotate(45 5.63623 15.5355)" fill={color}/>
    </svg>
  );
};

export default OptionIcon;

import React from "react";

const BackupIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8C14.5 8 19.5 7.6 19.5 6C19.5 5.33333 18 4 12 4C9.5 4 4.5 4.4 4.5 6C4.5 6.66667 6 8 12 8Z" stroke={color}/>
      <path d="M19.5 10C19.5 11.6 14.5 12 12 12C6 12 4.5 10.6667 4.5 10" stroke={color}/>
      <path d="M19.5 14C19.5 15.6 14.5 16 12 16C6 16 4.5 14.6667 4.5 14" stroke={color}/>
      <path d="M19.5 18C19.5 19.6 14.5 20 12 20C6 20 4.5 18.6667 4.5 18" stroke={color}/>
      <line x1="4.5" y1="6" x2="4.5" y2="18" stroke={color}/>
      <line x1="19.5" y1="6" x2="19.5" y2="18" stroke={color}/>
    </svg>
  );
};

export default BackupIcon;

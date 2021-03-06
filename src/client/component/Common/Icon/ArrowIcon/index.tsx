import React from "react";

const ArrowIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2165 11.6727C15.3792 11.8606 15.3792 12.1394 15.2165 12.3273L10.378 17.9144C10.0749 18.2644 9.5 18.05 9.5 17.5871L9.5 6.41291C9.5 5.94997 10.0749 5.73563 10.378 6.08558L15.2165 11.6727Z" fill={color}/>
    </svg>
  );
};

export default ArrowIcon;

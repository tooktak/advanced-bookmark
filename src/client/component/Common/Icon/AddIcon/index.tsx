import React from "react";

const AddIcon: React.FC<IconProps> = ({ size="24" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="10.8" y="20" width="16" height="2.4" transform="rotate(-90 10.8 20)" fill="currentColor"/>
      <rect x="4" y="10.8" width="16" height="2.4" fill="currentColor"/>
    </svg>
  );
};

export default AddIcon;

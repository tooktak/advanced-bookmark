import React from "react";

const SearchIcon: React.FC<IconProps> = ({ size="24" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.5" cy="10.5" r="6.25" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M15 15L20 20" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  );
};

export default SearchIcon;

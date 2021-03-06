import React from "react";

const SelectCheckboxIconIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="4" width="13" height="13" rx="1" stroke={color} stroke-width="2"/>
      <path d="M4 6V19C4 19.5523 4.44772 20 5 20H19" stroke={color} stroke-width="2" stroke-linecap="round"/>
      <path d="M9.5 10.5L11.5874 13.0114C12.0042 13.5129 12.7817 13.4877 13.1652 12.9604L17.5 7" stroke={color} stroke-width="2" stroke-linecap="round"/>
    </svg>
  );
};

export default SelectCheckboxIconIcon;

import React from "react";

const BookmarkIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3.01V20.9748C6 20.9839 6.01106 20.9883 6.01727 20.9817L11.9927 14.6548C11.9967 14.6506 12.0033 14.6506 12.0073 14.6548L17.9827 20.9817C17.9889 20.9883 18 20.9839 18 20.9748V3.01C18 3.00448 17.9955 3 17.99 3H6.01C6.00448 3 6 3.00448 6 3.01Z" stroke={color} stroke-width="2"/>
    </svg>
  );
};

export default BookmarkIcon;

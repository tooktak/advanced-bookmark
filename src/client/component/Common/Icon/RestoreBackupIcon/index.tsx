import React from "react";

const RestoreBackupIcon: React.FC<IconProps> = ({ size="24", color = 'black' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16.5C21 17.5411 20.639 18.55 19.9785 19.3548C19.3181 20.1595 18.399 20.7104 17.3779 20.9135C16.3568 21.1166 15.2969 20.9594 14.3787 20.4686C13.4605 19.9779 12.741 19.1839 12.3425 18.2221C11.9441 17.2602 11.8916 16.19 12.1938 15.1937C12.496 14.1974 13.1343 13.3368 13.9999 12.7584C14.8656 12.18 15.905 11.9196 16.9411 12.0217C17.9772 12.1237 18.9458 12.5819 19.682 13.318L18.5164 14.4836C18.0499 14.0172 17.436 13.7268 16.7795 13.6622C16.123 13.5975 15.4643 13.7625 14.9158 14.129C14.3672 14.4955 13.9627 15.0409 13.7712 15.6722C13.5797 16.3036 13.613 16.9817 13.8655 17.5912C14.118 18.2007 14.574 18.7039 15.1558 19.0148C15.7376 19.3258 16.4093 19.4255 17.0563 19.2968C17.7034 19.1681 18.2858 18.819 18.7043 18.309C19.1228 17.799 19.3516 17.1597 19.3516 16.5H21Z" fill={color}/>
      <path d="M19 12L20.7321 15H17.2679L19 12Z" fill={color}/>
      <path d="M12 8C14.5 8 19.5 7.6 19.5 6C19.5 5.33333 18 4 12 4C9.5 4 4.5 4.4 4.5 6C4.5 6.66667 6 8 12 8Z" stroke={color}/>
      <path d="M4.5 10C4.5 10.6667 6 12 12 12C12.5 12 12.5 12 12.5 12" stroke={color}/>
      <path d="M11 16C5 16 4.5 14.6667 4.5 14" stroke={color}/>
      <path d="M12 20C6 20 4.5 18.6667 4.5 18" stroke={color}/>
      <line x1="4.5" y1="6" x2="4.5" y2="18" stroke={color}/>
      <line x1="19.5" y1="6" x2="19.5" y2="11.5" stroke={color}/>
    </svg>
  );
};

export default RestoreBackupIcon;

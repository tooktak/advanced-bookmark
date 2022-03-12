import React from "react";
import styles from "./Checkbox.module.css";
import { CheckboxEmptyIcon, CheckboxFilledIcon } from "src/client/component/Common/Icon";

export enum CheckboxSize {
  NORMAL = "1rem",
  SMALL = "0.875rem",
  BIG = "1.25rem"
}

type CheckboxProps = {
  checked: boolean,
  handleClick(): void,
  id: string,
  text: string,
  size?: CheckboxSize
}

const Checkbox: React.FC<CheckboxProps> = ({checked = false, handleClick, id = "checkbox", text, size = CheckboxSize.NORMAL}) => {
  const getSize = () => {
    switch(size) {
      case CheckboxSize.SMALL:
        return styles.small;
      case CheckboxSize.BIG:
        return styles.big;
    }
  }

  return (
    <label className={`${styles.checkbox} ${getSize()}`}>
      {checked ? (
        <CheckboxFilledIcon size={size} />
        ) : (
        <CheckboxEmptyIcon size={size}/>
      )}
      <input checked={checked} onChange={handleClick} type="checkbox" id={id} />
      <span className="checkbox_text">{text}</span>\
    </label>
  );
};

export default Checkbox;
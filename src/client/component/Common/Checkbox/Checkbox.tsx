import React from "react";
import styles from "./Checkbox.module.css";
import { CheckboxEmptyIcon, CheckboxFilledIcon } from "src/client/component/Common/Icon";

export enum CheckboxSize {
  SMALL = "16",
  NORMAL = "18",
  BIG = "24"
}

type CheckboxProps = {
  checked: boolean,
  onClick(): void | undefined,
  id: string,
  text: string,
  size?: CheckboxSize
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onClick, id = "checkbox", text, size = CheckboxSize.NORMAL}) => {
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
      <input checked={checked} onChange={onClick} type="checkbox" id={id} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
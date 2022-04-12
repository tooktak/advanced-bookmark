import React from "react";
import styles from "./Checkbox.module.css";
import { CheckboxEmptyIcon, CheckboxFilledIcon } from "src/client/component/Common/Icon";

type CheckboxProps = {
  checked: boolean,
  onClick(): void | undefined,
  id: string,
  text: string,
  size?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onClick, id = "checkbox", text, size = "18"}) => {

  return (
    <label className={styles.checkbox}>
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
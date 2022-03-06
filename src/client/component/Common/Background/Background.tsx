import React from "react";
import styles from "./Background.module.css";

type BackgroundProps = {
  open: boolean,
  handleClose(): void
}

const Background: React.FC<BackgroundProps> = ({ open, handleClose }) => {
  return open ? (
    <div
      className={styles.background}
      onClick={handleClose}
    />
  ) : null;
};

export default Background;
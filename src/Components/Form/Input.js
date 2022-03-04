import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <input className={styles.input} {...rest} />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;

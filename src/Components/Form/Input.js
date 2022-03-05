import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, value, onChange, error, onBlur, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;

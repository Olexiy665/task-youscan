import React from 'react';
import classSet from 'classnames';
import styles from './CheckboxItem.module.css';
import { Props } from './types';

export const CheckboxItem = ({
  label, value, isSelected, onChange,
}: Props) => {
  const clickHandler = () => {
    onChange(value);
  };
  return (
    <label
      htmlFor={label}
      className={classSet(styles.CheckboxItem, {
        [styles.isSelected]: isSelected,
      })}
    >
      <div className={styles.CheckboxBorder}>
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
        >
          <path
            className={styles.checkmarkCheck}
            fill="none"
            d="M4.1 17.2l7.1 8.5 16.7-16.8"
          />
        </svg>
      </div>
      <span className={styles.Label}>{label}</span>
      <input onClick={clickHandler} id={label} name={label} value={value} />
    </label>
  );
};

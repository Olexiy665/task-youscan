import React from 'react';
import styles from './FilterGroup.module.css';
import { Props } from './types';
import CheckboxItem from '../CheckboxItem';

export const FilterGroup = ({
  filters, value, onChange, selectedValue, label,
}: Props) => {
  const groupChangeHandler = (filterValue: string) => {
    onChange(value, filterValue);
  };
  return (
    <div className={styles.FilterGroup}>
      <h3>{label}</h3>
      <div className={styles.Group}>
        {filters.map((filter) => <CheckboxItem isSelected={selectedValue === filter.value} onChange={groupChangeHandler} value={filter.value} label={filter.label} key={`${value}-${filter.value}`} />)}
      </div>
    </div>
  );
};

export const FilterGroupMemo = React.memo(FilterGroup);

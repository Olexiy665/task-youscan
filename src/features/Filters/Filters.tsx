import React from 'react';
import { FILTERS_CATEGORIES } from '../../constants/filters-init';

import styles from './Filters.module.css';
import { FilterGroupMemo } from './components/FilterGroup';

export const Filters = () => {
  const changeHandler = (groupValue: string, filterValue: string) => {
    const params = new URLSearchParams(window.location.search);
    params.delete(groupValue);
    params.append(groupValue, filterValue);
    window.history.replaceState(null, '', `?${params.toString()}`);
  };
  const params = new URLSearchParams(window.location.search);

  return (
    <div className={styles.Filters}>
      {FILTERS_CATEGORIES.map((category) => (
        <FilterGroupMemo
          onChange={changeHandler}
          selectedValue={params.get(category.value) || category.defaultValue}
          filters={category.filters}
          value={category.value}
          label={category.label}
          key={category.value}
        />
      ))}
    </div>
  );
};

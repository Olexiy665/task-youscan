import React, { useState } from 'react';
import { FILTERS_CATEGORIES } from '../../constants/filters-init';

import styles from './Filters.module.css';
import { FilterGroupMemo } from './components/FilterGroup';
import { paramsToRecord } from '../../utils/utils';

const updateStore = (nextParams: string) => {
  window.history.pushState(null, '', `?${nextParams}`);
  const event = new CustomEvent('search-params-change', {
    detail: {
      newParams: nextParams,
    },
  });
  window.dispatchEvent(event);
};

export const Filters = () => {
  const [filters, setFilter] = useState<Record<string, string>>(() => paramsToRecord(
    new URLSearchParams(window.location.search),
  ));
  const changeHandler = (groupValue: string, filterValue: string) => {
    const params = new URLSearchParams(window.location.search);
    params.delete(groupValue);
    params.append(groupValue, filterValue);

    setFilter(paramsToRecord(params));
    const stringifiedParams = params.toString();
    updateStore(stringifiedParams);
  };
  return (
    <div className={styles.Filters}>
      {FILTERS_CATEGORIES.map((category) => (
        <FilterGroupMemo
          onChange={changeHandler}
          selectedValue={filters[category.value] || category.defaultValue}
          filters={category.filters}
          value={category.value}
          label={category.label}
          key={category.value}
        />
      ))}
    </div>
  );
};

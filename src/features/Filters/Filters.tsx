import React, { useState } from 'react';
import CheckboxItem from './components/CheckboxItem';

export const Filters = () => {
  const [value, setValue] = useState(false);
  const changeHandler = () => {
    console.log('here-here');
    setValue(!value);
  };
  return (
    <div>
      <CheckboxItem isSelected={value} onChange={changeHandler} label="Some-label" value="some value" />
    </div>
  );
};

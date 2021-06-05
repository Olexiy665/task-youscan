import React from 'react';

import Filters from '../../features/Filters';
import { useImages } from '../../hooks/useImages';
import styles from './Main.module.css';

export const Main = () => {
  const { images, status } = useImages();
  console.log(images, status);
  return (
    <div className={styles.Main}>
      <Filters />
    </div>
  );
};

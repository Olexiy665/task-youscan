import React from 'react';

import Filters from '../../features/Filters';

import ImagesList from '../../features/ImagesList';
import styles from './Main.module.css';

export const Main = () => (
  <div className={styles.Main}>
    <Filters />
    <ImagesList />
  </div>
);

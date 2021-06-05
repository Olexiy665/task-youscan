import React, { useEffect } from 'react';

import { pixabayImages } from '../../api/pixabay-images';
import styles from './Main.module.css';

export const Main = () => {
  useEffect(() => {
    async function fetchAPI() {
      try {
        const data = await pixabayImages.getImages();
        console.log(data, 'here-here');
      } catch (e) {
        console.log(e);
      }
    }

    fetchAPI();
  }, []);
  return <div className={styles.Main}>Main screen;</div>;
};

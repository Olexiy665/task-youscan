import React from 'react';
import { useImages } from '../../hooks/useImages';
import ImageListItem from './components/ImageListItem';
import styles from './ImageList.module.css';

export const ImagesList = () => {
  const { images, status } = useImages();
  console.log(images, status);
  // @ts-ignore
  return (
    <div className={styles.ImageList}>

      {images.map((item) =>
      /* eslint-disable */
      /* @ts-ignore */
        (<ImageListItem previewHeight={item.previewHeight} user={item.user} type={item.type} imageHeight={item.imageHeight} imageWidth={item.imageWidth} previewWidth={item.previewWidth} key={item.id} previewURL={item.previewURL} />
        ))}
    </div>
  );
};

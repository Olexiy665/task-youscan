import React from 'react';
import { FetchStatus, useImages } from '../../hooks/useImages';
import ImageListItem from './components/ImageListItem';
import LoadingBar from './components/LoadingBar';
import styles from './ImageList.module.css';

export const ImagesList = () => {
  const { images, status } = useImages();

  return (
    <div className={styles.ImageList}>
      <LoadingBar isActive={status === FetchStatus.LOADING || !images.length} />
      {images.map((item) => (
        <ImageListItem
          id={item.id}
          previewHeight={item.previewHeight}
          user={item.user}
          type={item.type}
          imageHeight={item.imageHeight}
          imageWidth={item.imageWidth}
          previewWidth={item.previewWidth}
          key={item.id}
          previewURL={item.previewURL}
        />
      ))}
    </div>
  );
};

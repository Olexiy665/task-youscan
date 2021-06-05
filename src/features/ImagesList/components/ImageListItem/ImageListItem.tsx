import React, { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import styles from './ImageListItem.module.css';
import { Props } from './types';

export const ImageListItem = ({
  previewURL,
  previewHeight,
  previewWidth,
}: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const [isLoaded, setIsLoad] = useState(false);
  const [ratio, setRatio] = useState(0);
  useEffect(() => {
    if (entry?.intersectionRect?.width && entry?.intersectionRect?.width > 0) {
      setRatio(previewWidth / entry?.intersectionRect.width);
    }
  }, [entry?.intersectionRect.width]);

  const onLoadHandle = () => {
    setIsLoad(true);
  };
  return (
    <div
      style={{ height: `${previewHeight / ratio}px` }}
      className={styles.ImageListItem}
      ref={ref}
    >
      <div className={styles.ImgWrapper}>
        {(isLoaded || inView) && (
          <img onLoad={onLoadHandle} alt="text" src={previewURL} />
        )}
      </div>
    </div>
  );
};

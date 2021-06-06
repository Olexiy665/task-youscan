import React, { useState, useEffect } from 'react';
import { AiOutlineUser, AiFillFileImage } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import styles from './ImageListItem.module.css';
import { Props } from './types';

export const ImageListItem = ({
  previewURL,
  previewHeight,
  previewWidth,
  user,
  type,
  imageWidth,
  imageHeight,
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
      <div className={styles.ItemInfo}>
        <div className={styles.LeftInfo}>
          <span>
            <AiOutlineUser />
            {' '}
            {user}
          </span>
          <span>
            <AiFillFileImage />
            {' '}
            {type}
          </span>
        </div>
        <div className={styles.Sizes}>
          <span>
            w:
            {' '}
            {imageWidth}
          </span>
          <span>
            h:
            {' '}
            {imageHeight}
          </span>
        </div>
      </div>
      <div className={styles.ImgWrapper}>
        {(isLoaded || inView) && (
          <img onLoad={onLoadHandle} alt="text" src={previewURL} />
        )}
      </div>
    </div>
  );
};

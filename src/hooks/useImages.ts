import { useEffect, useState } from 'react';
import { pixabayImages } from '../api/pixabay-images';
import { PixabayImage } from '../api/pixabay-images/types';

export enum FetchStatus{
  INIT = 'INIT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export function useImages() {
  const [images, setImages] = useState<PixabayImage[]>([]);
  const [status, setStatus] = useState(FetchStatus.INIT);

  const getImages = async (queryParams: string) => {
    try {
      setStatus(FetchStatus.LOADING);
      const data = await pixabayImages.getImages(queryParams);
      setImages(data?.hits || []);
      setStatus(FetchStatus.SUCCESS);
    } catch (e) {
      setStatus(FetchStatus.ERROR);
    }
  };
  const storeChangeHandler = (e: Event) => {
    /* @ts-ignore */
    getImages(e.detail.newParams);
  };

  useEffect(() => {
    window.addEventListener('search-params-change', storeChangeHandler);
    getImages(window.location.search.replace('?', ''));
    return () => {
      window.removeEventListener('search-params-change', storeChangeHandler);
    };
  }, []);

  return { images, status };
}

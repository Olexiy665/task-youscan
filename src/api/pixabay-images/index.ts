import { PIXABAY_API } from '../../constants/api-routes';
import { PIXABAY_API_KEY } from '../../constants/env-var';
import { HttpGet } from '../fetch';
import { PixabayResponse } from './types';

export const pixabayImages = {
  async getImages(params?: string) {
    console.log(params, 'here');
    const searchParams = new URLSearchParams();
    searchParams.append('key', PIXABAY_API_KEY);

    const queryString = searchParams.toString();
    const url = `${PIXABAY_API}/?${queryString}&${params}`;
    const { parsedBody } = await HttpGet<PixabayResponse>(url);
    return parsedBody;
  },
};

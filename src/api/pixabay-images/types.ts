export interface PixabayImage {
  user: string;
  type: string;
  imageHeight: number;
  imageWidth: number;
  id: number;
}
export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: PixabayImage[];
}

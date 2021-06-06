export interface PixabayImage {
  user: string;
  type: string;
  imageHeight: number;
  imageWidth: number;
  previewHeight: number;
  previewWidth: number;
  id: number;
  previewURL: string;
}
export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: PixabayImage[];
}

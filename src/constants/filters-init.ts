export const IMAGE_TYPE_FILTERS = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'photo',
    label: 'Photo',
  },
  {
    value: 'illustration',
    label: 'Illustration',
  },
  {
    value: 'vector',
    label: 'Vector',
  },
];

export const FILTERS_CATEGORIES = [
  {
    value: 'image_type',
    label: 'Image type',
    defaultValue: 'all',
    filters: IMAGE_TYPE_FILTERS,
  },
];

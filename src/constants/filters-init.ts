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

export const IMAGE_CATEGORY_FILTERS = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'fashion',
    label: 'Fashion',
  },
  {
    value: 'education',
    label: 'Education',
  },
  {
    value: 'animals',
    label: 'Animals',
  },
  {
    value: 'computer',
    label: 'Computer',
  },
];

export const FILTERS_CATEGORIES = [
  {
    value: 'image_type',
    label: 'Image type',
    defaultValue: 'all',
    filters: IMAGE_TYPE_FILTERS,
  },
  {
    value: 'category',
    label: 'Category',
    defaultValue: 'all',
    filters: IMAGE_CATEGORY_FILTERS,
  },
];

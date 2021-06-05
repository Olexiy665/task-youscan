export const paramsToRecord = (params: URLSearchParams) => {
  const nextFilters: Record<string, string> = {};

  params.forEach((value, key) => {
    nextFilters[key] = value;
  });
  return nextFilters;
};

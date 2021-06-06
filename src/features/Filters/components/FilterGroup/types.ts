export type FilterItem = {
  value: string;
  label: string;
};

export type Props = {
  value: string;
  label: string;
  filters: FilterItem[];
  onChange: (value: string, filterValue: string) => void;
  selectedValue: string;

};

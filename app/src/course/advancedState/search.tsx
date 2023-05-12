import { InputWithLabel } from '../advancedState/inputWithLabel';

export interface SearchInterface {
  onSearch: (val: string) => void;
  searchText: string;
}
export const Search = ({ searchText, onSearch }: SearchInterface) => {
  return (
    <InputWithLabel
      focusOnInit
      id="search"
      onInputChange={onSearch}
      type="text"
      value={searchText}
    >
      <strong>Search:</strong>
    </InputWithLabel>
  );
};

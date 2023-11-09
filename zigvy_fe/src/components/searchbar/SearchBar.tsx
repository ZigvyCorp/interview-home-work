import { IInput, Input } from "@/components/common";

export interface ISearchBar extends IInput {}

const SearchBar = (props: ISearchBar) => {
  return <Input.Search {...props} />;
};

export default SearchBar;

import { useSearchBox } from "react-instantsearch-hooks-web";
import { SearchBox } from "@fluentui/react";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const SearchBar = ({ children }: IProps) => {
  const { clear, refine, query } = useSearchBox();

  const setSearchAndSave = (text?: string) => {
    const searchTerm = (text && text.trim()) || "";
    refine(searchTerm);
  };

  const onClear = () => {
    setSearchAndSave("");
    clear();
  };

  const onSearch = (value: string) => {
    setSearchAndSave(value);
  };

  const onChange = (value?: string) => {
    setSearchAndSave(value);
  };

  return (
    <SearchBox
      placeholder="search here"
      value={query}
      onClear={onClear}
      onSearch={onSearch}
      onChange={(_e, value) => onChange(value)}
    />
  );
};

export default SearchBar;

import { useSearchBox } from "react-instantsearch-hooks-web";
import { SearchBox, Spinner, SpinnerSize } from "@fluentui/react";

const SearchBar = () => {
  const { clear, refine, query, isSearchStalled } = useSearchBox();

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
    <>
      <SearchBox
        placeholder="search here"
        value={query}
        onClear={onClear}
        onSearch={onSearch}
        onChange={(_e, value) => onChange(value)}
      />
      {isSearchStalled && (
        <Spinner
          label="Loading"
          labelPosition="right"
          size={SpinnerSize.xSmall}
          styles={{ root: { justifyContent: "left", marginTop: "4px" } }}
        />
      )}
    </>
  );
};

export default SearchBar;

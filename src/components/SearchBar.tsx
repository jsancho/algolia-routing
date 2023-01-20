import { useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";
import {
  ISearchBoxStyles,
  SearchBox,
  Spinner,
  SpinnerSize,
} from "@fluentui/react";

const searchBoxStyles: Partial<ISearchBoxStyles> = {
  root: { width: "auto" },
};

const SearchBar = () => {
  const { clear, refine, isSearchStalled } = useSearchBox();

  const [currentSearch, setCurrentQuery] = useState("");

  const setSearchAndSave = (text?: string) => {
    const searchTerm = (text && text.trim()) || "";

    setCurrentQuery(searchTerm);
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
        value={currentSearch}
        onClear={onClear}
        onSearch={onSearch}
        onChange={(_e, value) => onChange(value)}
        // styles={searchBoxStyles}
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

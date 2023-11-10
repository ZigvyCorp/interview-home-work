interface SearchBarProps {
  searchValue: string;
  setSearchValue: (searchParams: string) => void;
}

export const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  return (
    <div>
      <div className="input-group my-1">
        <div className="form-outline">
          <input
            placeholder="Input searching title..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value || "");
            }}
            type="search"
            id="form1"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

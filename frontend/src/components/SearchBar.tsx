import { Input } from "antd";
import { ChangeEvent } from "react";

const { Search } = Input;

interface SearchBarProps {
    onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <Search
            placeholder="Search posts by title"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            onChange={handleChange}
            style={{ marginBottom: '16px', width: '55%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
        />
    );
};

export default SearchBar;
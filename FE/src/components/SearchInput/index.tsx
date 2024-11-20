import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";

type OptionType = {
  value: string | number;
  label: string | React.ReactNode | number;
  title?: string;
};

type SearchInputProps<T> = {
  options: T[];
  placeholder: string;
  style?: React.CSSProperties;
  searchValue: string | number | undefined;
  setSearchValue: React.Dispatch<React.SetStateAction<string | number | undefined>>;
};

const SearchInput = <T extends OptionType>({
  options,
  placeholder,
  style,
  searchValue,
  setSearchValue,
  ...props
}: SearchInputProps<T>) => (
  <Select
    showSearch
    style={style}
    placeholder={placeholder}
    optionFilterProp='children'
    filterOption={(input, option) => (option?.title ?? "").includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.title ?? "").toLowerCase().localeCompare((optionB?.title ?? "").toLowerCase())
    }
    suffixIcon={<SearchOutlined />}
    onChange={(value) => setSearchValue(value)}
    value={searchValue}
    options={options}
    onBlur={() => setSearchValue(undefined)}
    allowClear
    {...props}
  ></Select>
);

export default SearchInput;

import { Flex, Input } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

export const SearchInput = () => {
  return (
    <Flex justify="center">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 500,
          padding: 10,
        }}
        enterButton
      />
    </Flex>
  );
};

import React from 'react';
import { AutoComplete, Input } from 'antd';

export function Search() {
  return (
    <AutoComplete popupClassName="certain-category-search-dropdown" style={{ width: '40rem' }}>
      <Input.Search size="large" placeholder="Search" />
    </AutoComplete>
  );
}

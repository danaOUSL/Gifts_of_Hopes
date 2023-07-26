import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value) => console.log(value);
const SearchC = () => (
  <Space direction="vertical">

    <Search style={{width:500}} placeholder="Search here" onSearch={onSearch} enterButton />
 

  </Space>
);
export default SearchC;
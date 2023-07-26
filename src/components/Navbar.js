import React, { useState } from 'react';
import { AppstoreOutlined, CreditCardOutlined, HomeFilled, MailOutlined, QuestionCircleFilled, QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Button,Input } from 'antd';
import './Navbar.css';


const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeFilled />,
  },
  {
    label: 'Payment',
    key: 'payment',
    icon: <CreditCardOutlined/>,
    disabled: false,
  },
  {
    label: 'Help',
    key: 'SubMenu',
    icon: <QuestionCircleOutlined/>,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
      
    ],
  }
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
  <div className='head_nav'>
  <Menu className='menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  
  <Button type="primary">Log out </Button>

  </div>
  

  
  );
};
export default Navbar;
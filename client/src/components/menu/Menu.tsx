import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, MenuProps, Row, Space } from 'antd';
import { Menu } from 'antd';

const loginItems: MenuProps['items'] = [
  {
    key: 'login',
    label: <a href='/signin' rel="noopener noreferrer">
      Войти
    </a>
  },
  {
    key: 'register',
    label: <a href='/signup' rel="noopener noreferrer">
      Создать аккаунт
    </a>
  }
]

const items: MenuProps['items'] = [
  {
    label:
      <a href="/" rel="noopener noreferrer">
        Главная
      </a>,
    key: 'main',
    // icon: <MailOutlined />,
  },
  {
    label: 'Портфолио',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Отчеты',
    key: 'SubMenu',
    icon: <SettingOutlined />,
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
  },
  
];

const MenuPanel: React.FC = () => {
  const [current, setCurrent] = useState('main');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Row>
      <Col span={12}>
        <Menu onClick={onClick} selectedKeys={[current]} style={{ background: '#d9dfeb' }} mode="horizontal" items={items} />
      </Col>
      <Col flex={"auto"} offset={6} span={6}>
        <Menu onClick={onClick} selectedKeys={[current]} style={{ background: '#d9dfeb' }} mode="horizontal" items={loginItems} />
      </Col>
    </Row>
  )
};

export { MenuPanel };
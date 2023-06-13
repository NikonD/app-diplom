import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, MenuProps, Row, Space } from 'antd';
import { Menu } from 'antd';
import { useUser } from '../../helpers/useUser';
import { useQuery } from '@apollo/client';
import { USER } from '../gqls/users';
import { UUID } from 'crypto';

interface UserSession {
  id: UUID,
  fullname: string,
  role: number
}

const MenuPanel: React.FC = () => {
  const [current, setCurrent] = useState('main');

  const [userTitle, setUserTitle] = useState()

  const { data, error, loading } = useQuery(USER.session)

  useEffect(() => {
    if (data?.session && !loading) {
      setUserTitle(data?.session)
    }
  }, [data])


  const loginItems: MenuProps['items'] = [
    {
      key: 'login',
      label: <a href='/signin' rel="noopener noreferrer">
        {!userTitle ? 'Войти' : data.session.name}
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
      label: <a href='/students/1'>
        Портфолио
      </a>,
      key: 'profile',
      icon: <AppstoreOutlined />
    },
    {
      label: <a href="/tasks">Задания</a>,
      key: 'task',
      icon: <AppstoreOutlined />
    },
    {
      label: <a href="/students">Исполнители</a>,
      key: 'student',
      icon: <AppstoreOutlined />
    },

  ];



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
import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useUser } from '../../../helpers/useUser';

const Signin: React.FC = () => {
  const [userState, setUserState] = useState()

  const user = useUser()



  console.log(user)
  useEffect(() => {
    if (userState) {
      if (userState['role'] == 1) {
        window.location.href = '/students'
      }
      else {
        window.location.href = '/tasks'
      }
    }

  }, [userState])

  const onFinish = async (values: any) => {
    let response = await axios({
      url: '/api/signin',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: values
    })
    setUserState(response.data)
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
      // rules={[{ required: true, type: "email", message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        name="password"
      // rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Забыл пароль
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Логин
        </Button>
        <a href="">Регистрация</a>
      </Form.Item>
    </Form>
  );
};

export { Signin };
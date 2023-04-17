import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Row, Col } from 'antd';
import { Signup } from './components/pages/login/login'
import { MenuPanel } from './components/menu/Menu';
import { Tasks } from './components/pages/tasks';
import { Students } from './components/pages/students/students';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <MenuPanel />

      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col span={12} offset={6}>
            <Routes>
              <Route path='/' element={<Tasks />} />
              <Route path='/students' element={<Students/>} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<div></div>} />
            </Routes>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center', position: 'sticky', bottom: 0 }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;
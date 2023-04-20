import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Space, Divider } from 'antd';
import { Signup } from './components/pages/login/signup'
import { MenuPanel } from './components/menu/Menu';
import { Tasks } from './components/pages/tasks';
import { Students } from './components/pages/students/students';
import { TaskPage } from './components/pages/tasks/taskPage';
import { StudentPage } from './components/pages/students/studentPage';
import Link from 'antd/es/typography/Link';
import './App.css'
import { Signin } from './components/pages/login/signin';

const { Header, Content, Footer } = Layout;

let Home = () => {
  return (
    <>
      <Link href='/tasks'>Tasks</Link>
      <Link href='/students'>Students</Link>
    </>

  )
}

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: '#d9dfeb' }}>
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
      <Content className="site-layout" style={{ padding: '0 50px', }}>

        <Row>
          <Col className='content-background' span={12} offset={6}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Divider type="horizontal"/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/tasks/:id' element={<TaskPage />} />
              <Route path='/students' element={<Students />} />
              <Route path='/students/:id' element={<StudentPage />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<Signin />} />
            </Routes>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center', position: 'sticky', bottom: 0 }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;
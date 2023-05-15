import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';
import './style.css'

const { Meta } = Card;

const Task: React.FC = () => (

  <Card
    className='task_card'
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Link to={'/tasks/2'}>
      <Meta
        className='task_meta'
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title="Card title"
        description="This is the description"
      />
    </Link>

  </Card>

);

export { Task };
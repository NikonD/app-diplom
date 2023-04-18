import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Space, Tag } from 'antd';
import './style.css'
import { Link } from 'react-router-dom';
const { Meta } = Card;

const Student: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Link to={'/students/1'}>
      <Meta
        className='student_meta'
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title="Card title"
        description="This is the description"
      />
    </Link>


    <Space align='center' size={[0, 'small']}>
      <Tag>C++</Tag>
      <Tag>C#</Tag>
      <Tag>Java</Tag>
    </Space>
  </Card>
);

export { Student };
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Divider, Space, Tag } from 'antd';
import './style.css'
import { Link } from 'react-router-dom';
import { UUID } from 'crypto';
const { Meta } = Card;

type StudentsComponentProps = {
  id?: UUID
  fullname?: string
}

const Student: React.FC<StudentsComponentProps> = ({id, fullname}) => {
  return (
    <Card style={{ width: '100%' }}>
      <Link to={`/students/${id}`}>
        <Meta
          className='student_meta'
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title={fullname}
        />
      </Link>

      <Divider />
      <Space align='center' size={[0, 'small']}>
        <Tag>C++</Tag>
        <Tag>C#</Tag>
        <Tag>Java</Tag>
      </Space>
    </Card>
  )
}


export { Student };
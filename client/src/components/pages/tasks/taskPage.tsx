
import React, { useState } from 'react';
import { Avatar, Button, Divider, Row, Space, Switch, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FileOutlined } from '@ant-design/icons'
const { Paragraph, Text, Title } = Typography;

const TaskPage: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <>

      <Title level={3}>Задание какое-то</Title>

      {/* <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph> */}
      <Paragraph >
        Ant Design, a design language for background TaskPagelications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph>

      <Paragraph >
        Ant Design, a design language for background TaskPagelications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph>

      <Divider type="horizontal">Файлы</Divider>
      <Space direction="vertical">
        <Link target={"_blank"} to={'/api/file/111111'}><FileOutlined /> file1</Link>
        <Link target={"_blank"} to={'/api/file/111111'}><FileOutlined /> file2</Link>
        <Link target={"_blank"} to={'/api/file/111111'}><FileOutlined /> file3</Link>
        <Link target={"_blank"} to={'/api/file/111111'}><FileOutlined /> file4</Link>
        <Link target={"_blank"} to={'/api/file/111111'}><FileOutlined /> file5</Link>
        <Link target={"_blank"} to={'/api/file/111111'}><FileOutlined /> file6</Link>
      </Space>


      <Row>
        <Divider type="horizontal">Компитенции</Divider>
        <Space direction="horizontal">
          <Tag>C++</Tag>
          <Tag>C##</Tag>
          <Tag>что то еще</Tag>
        </Space>
      </Row>

      <Row>
        <Divider>Заказчик</Divider>
        <Avatar
          size={{sm: 20 }}
          src="https://xsgames.co/randomusers/avatar.php?g=pixel"
        />
        <Space direction="vertical">
          <Link to={"/employers/11111"}>Зубенко Михаил петрович</Link>
          <span>Мафиозник</span>
        </Space>
      </Row>


      <Row>
        <Divider />
        <Space direction="horizontal">
          <Button type="primary">Откликнуться</Button>
        </Space>
      </Row>

    </>
  );
};

export { TaskPage };
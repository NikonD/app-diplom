
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Row, Space, Switch, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FileOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import { useUser } from '../../../helpers/useUser';
const { Paragraph, Text, Title } = Typography;

const TaskPage: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);
  const [userState, setUserState] = useState({});

  let user = useUser()

  console.log("USER in taskPage", user)
  return (
    <>
      <Title level={3}>Wordprress-специалист</Title>

      <Paragraph >
        В поисках специалиста (студии), которая возьмет на себя пул задач по разработке сайтов на Wordpress. Полное ведение клиента:- Оценка брифа- Финализация ТЗ- Дизайн, верстка, разработка Обязательные условия:- Наличие специализированных модулей- Работа через Безопасную СделкуСвой ответ начните с указания текущей даты.
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
          <Tag>HTML</Tag>
          <Tag>PHP</Tag>
          <Tag>Wordpress</Tag>
        </Space>
      </Row>

      <Row>
        <Divider>Заказчик</Divider>
        <Avatar
          size={{ sm: 20 }}
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
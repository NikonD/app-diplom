import React, { useState } from 'react';
import { Avatar, Button, Divider, Row, Space, Switch, Tag, Typography } from 'antd';
// import { Link } from 'react-router-dom';
import { FileOutlined, StarFilled, StarOutlined} from '@ant-design/icons'
import { useUser } from '../../../helpers/useUser';
const { Paragraph, Text, Title, Link} = Typography;

const Employer: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <>
      <Title level={3}>ИП PROFit</Title>
      <Row>
        <StarFilled style={{color: "#FFA200"}}/>
        <StarFilled style={{color: "#FFA200"}}/>
        <StarFilled style={{color: "#FFA200"}}/>
        <StarFilled style={{color: "#FFA200"}}/>
        <StarOutlined/>
      </Row>
      <Title level={5}>Здравствуй, уважаемый соискатель</Title>

      <Paragraph >
        Наша компания занимаемся разработкой и сопровождением информационных систем. Команда наших специалистов делает отличные информационные системы для медицины (и не только), делает мобильные приложения, сайты и многое другое.
        Мы постоянно находимся в поисках людей, которые хотят развивать или совершенствовать свои навыки в сфере IT. Наш офис находится в центре г. Петропавловск около драмтеатра по адресу Сутюшева 16а.

        У нас:

        отличные условия для работы сотрудников;
        интересные проекты;
        достойная оплата.
        Смотри наши вакансии, и присоединяйся к нашей команде!

        С уважением, ИП "PROFIT", ТОО "Антис-Мед". г. Петропавловск Казахстан
      </Paragraph>

      <Link href='/tasks'>Перейти к опубликованным заданиями</Link>

      

    </>
  );
};

export { Employer };
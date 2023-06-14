import { Card, Col, Divider, Image, Row, Badge, Space, Tag, Typography } from "antd"
import Link from "antd/es/typography/Link"
import { Task } from '../tasks/task'
import './style.css'
const { Paragraph, Title, Text } = Typography

const StudentPage = () => {
  return (
    <>
      <Row>
        <Col span={12}>

          <Paragraph>
            Мужчина, 24 года
          </Paragraph>
          <Paragraph>
            8(777)777-77-77<br />
            nikon9nikon@gmail.com<br />
            <Link href="https://t.me/nekonb">telegram</Link>
          </Paragraph>
          <Paragraph>
            СКО, г. Петропавловск
          </Paragraph>

        </Col>

        <Col span={6}>

          <Title className="student-name" level={1}>Олег Олегов</Title>

          <Text>
            <Paragraph>
              It-специалист
            </Paragraph>
            <Paragraph>
              Разработка веб-приложений
            </Paragraph>
          </Text>
        </Col>

        <Col span={6} >
          <Image width={128} src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        </Col>

      </Row>
      <Row>
        <Col span={12}>
          <Divider>Ключевые навыки</Divider>
          <Space size={[0, 8]} wrap>
            <Tag><Text type="warning">4</Text> C++</Tag>
            <Tag><Text type='success'>5</Text> C# </Tag>
          </Space>

          <Divider>Образование</Divider>
          <Paragraph>НАО СКУ им М. Козыбаева</Paragraph>

          <Divider>Знание языков</Divider>
          <Space direction="vertical" size={[0, 8]} wrap>
            <Text>Русский - носитель</Text>
            <Text>Казахский - А1</Text>
          </Space>
        </Col>
        <Col offset={6} span={6}>
          <Divider>Статистика</Divider>
          <Space direction="vertical" size={16}>
            <Card style={{padding: '5px', width:'200px'}}>

              <p> <Space direction="horizontal" style={{ width: '100%', justifyContent: 'space-between' }} > <Text type="warning">4</Text> Рейтинг </Space></p>
              <p> <Space direction="horizontal" style={{ width: '100%', justifyContent: 'space-between' }}> <Text type="success">192</Text> Выполненно </Space></p>
            </Card>
          </Space>
        </Col>
      </Row>
      <Divider>Портфолио</Divider>
      <Row gutter={[60, 40]}>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Badge.Ribbon text="Выполненно">
            <Card title={`от ИП PROFit`} size="small" color="green">
              Разработка веб приложения.
            </Card>
          </Badge.Ribbon>
          <Badge.Ribbon text="Выполненно" color="green">
            <Card title={`от ИП PROFit`} size="small">
              Разработка веб приложения.
            </Card>
          </Badge.Ribbon>
          <Badge.Ribbon text="Выполненно" color="green">
            <Card title={`от ИП PROFit`} size="small">
              Разработка веб приложения.
            </Card>
          </Badge.Ribbon>
        </Space>
      </Row>
    </>
  )
}

export { StudentPage }
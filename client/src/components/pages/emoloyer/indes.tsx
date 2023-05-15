import React from "react"
import { Card, Col, Divider, Image, Row, Badge, Space, Tag, Typography } from "antd"
import Link from "antd/es/typography/Link"
// import './style.css'
const { Paragraph, Title, Text } = Typography


let Employer: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={12}>
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

          <Title className="student-name" level={1}>Имя</Title>

          <Text>
            <Paragraph>
              ТОО "что то там"
            </Paragraph>
            <Paragraph>
              Разработка и сопровождение ПО....
            </Paragraph>
          </Text>
        </Col>

        <Col span={6} >
          <Image width={128} src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        </Col>

      </Row>
      <Row>
        {/* <Col span={12}>
          <Divider>Ключевые навыки</Divider>
          <Space size={[0, 8]} wrap>
            <Tag><Text type="warning">4</Text> C++</Tag>
            <Tag><Text type='success'>5</Text> C# </Tag>
          </Space>

          <Divider>Образование</Divider>
          <Paragraph>НАО СКУ им М. Козыбаева</Paragraph>

          <Divider>Знание языков</Divider>
          <Space direction="vertical" size={[0, 8]} wrap>
            <Text>Русский</Text>
            <Text>Казахский - А1</Text>
          </Space>
        </Col> */}
        <Col offset={6} span={6}>
          <Divider>Статистика</Divider>
          <Space direction="vertical" size={16}>
            <Card>
              <p> <Space direction="horizontal" style={{ width: '100%', justifyContent: 'space-between' }} > <Text type="warning">4</Text> Исполнитель </Space></p>
              <p> <Space direction="horizontal" style={{ width: '100%', justifyContent: 'space-between' }}> <Text type="success">192</Text> Card content </Space></p>
              <p> <Space direction="horizontal" style={{ width: '100%', justifyContent: 'space-between' }}> <Text type="success">90</Text> Card content </Space></p>
            </Card>
          </Space>
        </Col>
      </Row>
      <Divider>Открытые задания</Divider>
    </>
  )
}

export { Employer }
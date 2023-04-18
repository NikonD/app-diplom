import { Card, Col, Image, Row, Space, Typography } from "antd"
import Link from "antd/es/typography/Link"
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

          <Title className="student-name" level={1}>Имя</Title>

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
        </Col>
        <Col span={12}>
          <Space direction="vertical" size={16}>
            <Card style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export { StudentPage }
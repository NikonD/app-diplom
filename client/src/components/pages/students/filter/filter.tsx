import { Col, Divider, Input, Row, Space } from "antd"
import Link from "antd/es/typography/Link"
import Tags from "./tags"

const Filter: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={18}>
          <Input />
        </Col>
        <Col span={6}>
          <Link style={{marginLeft:'30px'}}>Cортировать по</Link>
        </Col>
      </Row>
      <Row>
        <Space direction="vertical">
          <Tags />
          <Divider/>
        </Space>
      </Row>
    </>
  )
}

export { Filter }
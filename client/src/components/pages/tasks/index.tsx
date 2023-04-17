import { Row, Col } from 'antd'
import { Task } from './task'


const Tasks: React.FC = () => {
  return (
    <Row gutter={[60, 24]}>
      <Col span={8} ><Task /></Col>
      <Col span={8} ><Task /></Col>
      <Col span={8} ><Task /></Col>

      <Col span={8} ><Task /></Col>
      <Col span={8} ><Task /></Col>
      <Col span={8} ><Task /></Col>
    </Row>
  )
}

export { Tasks }
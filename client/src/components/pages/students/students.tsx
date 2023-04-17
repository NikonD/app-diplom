import { Row, Col } from 'antd'
import { Student } from './student'
// import { Task } from './task'


const Students: React.FC = () => {
  return (
    <Row gutter={[60, 24]}>
      <Col span={8} ><Student/></Col>
      <Col span={8} ><Student/></Col>
      <Col span={8} ><Student/></Col>

      <Col span={8} ><Student/></Col>
      <Col span={8} ><Student/></Col>
      <Col span={8} ><Student/></Col>
    </Row>
  )
}

export { Students }
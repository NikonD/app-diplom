import { Row, Col, Pagination } from 'antd'
import { Student } from './student'
import { Filter } from './filter/filter'
import { useQuery } from '@apollo/client'
import { STUDENTS } from '../../gqls/students'
// import { Task } from './task'


const Students: React.FC = () => {

  const { data, loading, error } = useQuery(STUDENTS.all)

  return (
    <>
      <Filter />
      <Row gutter={[100, 10]}>
        {data?.students ? data?.students.map((item: any) => {
          return (
            <Col span={24} >
              <Student id={item.id} fullname={item.fullname} />
            </Col>
          )
        }) : null}
      </Row>
      <Pagination defaultCurrent={1} total={50} />
    </>

  )
}

export { Students }
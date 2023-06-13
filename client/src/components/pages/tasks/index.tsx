import { Row, Col, Input, Pagination } from 'antd'
import { Task } from './task'
import { Filter } from './filter/filter'
import { useQuery } from '@apollo/client'
import { TASKS } from '../../gqls/tasks'


const Tasks: React.FC = () => {

  const { data, loading, error } = useQuery(TASKS.all)


  return (
    <>
      <Filter />
      <Row gutter={[100, 50]} >
        {data?.tasks ? data?.tasks.map((item: any) => {
          return (
            <Col span={8} >
              <Task
                title={item.title}
                description={item.description} />
            </Col>
          )
        }) : null}
        {data?.tasks ? data?.tasks.map((item: any) => {
          return (
            <Col span={8} >
              <Task
                title={item.title}
                description={item.description} />
            </Col>
          )
        }) : null}
      </Row>
      <Pagination style={{alignSelf: "end"}} defaultCurrent={1} total={30} />
    </>

  )
}

export { Tasks }
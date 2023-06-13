import { Button, Divider, Form, Input, Row, Space, Tag, Typography } from "antd"
import FormItem from "antd/es/form/FormItem"
import React from "react"
import CriteriaTags from "./CriteriaTags"

let CreateTask: React.FC = () => {

  let files = []

  return (
    <>
      <Typography.Title level={5}>
        Создание задания
      </Typography.Title>

      <Form>
        
        <FormItem>
          <Input placeholder="Краткое описание"/>
        </FormItem>

        <FormItem>
          <Input.TextArea placeholder="Описание"/>
        </FormItem>
      </Form>
      <Row>
        <Divider type="horizontal">Компитенции</Divider>
        <Space direction="horizontal">
          <CriteriaTags/>
        </Space>
      </Row>

      <Row>
        <Divider type="horizontal">Файлы</Divider>
        <Space direction="vertical">
          <a>добавить файл</a>
        </Space>  
      </Row>
      <Divider type="horizontal">

      </Divider>
      <Button type="primary">Сохранить</Button>
    </>
  )
}

export {CreateTask}
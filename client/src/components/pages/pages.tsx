
import React, { useState } from 'react';
import { Button, Col, Form, Input, Modal, Row, Tag, Typography } from 'antd';
import { FileOutlined, StarFilled, StarOutlined} from '@ant-design/icons'


const Pages: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Оценка исполнителя
      </Button>

      <Button type="primary" onClick={showModal2}>
        Оценка заказчик
      </Button>



      <Modal width={"1000px"} open={isModalOpen} onCancel={handleCancel}>

        <Typography.Title style={{ textAlign: 'center' }} level={4}>Оценка исполнителя</Typography.Title>

        <Row justify={"center"} align={"middle"}>
          <Col span={6}>Скорость выполнения</Col>
          <Col span={6}>
            <Row>
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarOutlined />
            </Row>
          </Col>
        </Row>
        <Row justify={"center"} align={"middle"}>
          <Col span={6}>Качество работы</Col>
          <Col span={6}>
            <Row>
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarOutlined />
            </Row>
          </Col>
        </Row>

        <Typography.Title style={{ textAlign: 'center' }} level={4}>Оценка компитенций</Typography.Title>

        <Row justify={"center"} align={"middle"}>
          <Col span={6}><Tag>HTML</Tag></Col>
          <Col span={6}>
            <Row>
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarOutlined />
            </Row>
          </Col>
        </Row>
        <Row justify={"center"} align={"middle"}>
          <Col span={6}><Tag>PHP</Tag></Col>
          <Col span={6}>
            <Row>
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarOutlined />
            </Row>
          </Col>
        </Row>
        <Row justify={"center"} align={"middle"}>
          <Col span={6}><Tag>Wordpress</Tag></Col>
          <Col span={6}>
            <Row>
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarOutlined />
            </Row>
          </Col>
        </Row>


        <Row style={{marginTop: '20px'}} justify="center" align="middle">
          <Col span={12}>
            <Form style={{ display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
              <Form.Item>
                <Input.TextArea placeholder='Отзыв' rows={5}>
                </Input.TextArea>
              </Form.Item>
              <Form.Item style={{ alignContent: 'center' }}>
                <Button type="primary">
                  Отправить
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>


      </Modal>


      <Modal width={"1000px"} open={isModalOpen2} onCancel={handleCancel2}>

        <Typography.Title style={{ textAlign: 'center' }} level={4}>Оценка заказчика</Typography.Title>

        <Row justify={"center"} align={"middle"}>
          <Col span={6}>Формулировка ТЗ</Col>
          <Col span={6}>
            <Row>
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarOutlined />
            </Row>
          </Col>
        </Row>
        <Row justify={"center"} align={"middle"}>
          <Col span={6}>Коммуникабельность</Col>
          <Col span={6}>
            <Row>
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarOutlined />
            </Row>
          </Col>
        </Row>
        <Row justify={"center"} align={"middle"}>
          <Col span={6}>Четкость требований</Col>
          <Col span={6}>
            <Row>
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarFilled style={{ color: "#FFA200" }} />
              <StarOutlined />
            </Row>
          </Col>
        </Row>

        <Row style={{marginTop: '20px'}} justify="center" align="middle">
          <Col span={12}>
            <Form style={{ display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
              <Form.Item>
                <Input.TextArea placeholder='Отзыв' rows={5}>
                </Input.TextArea>
              </Form.Item>
              <Form.Item style={{ alignContent: 'center' }}>
                <Button type="primary">
                  Отправить
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>


      </Modal>
    </>
  );
};

export { Pages };
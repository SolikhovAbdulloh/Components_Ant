import React, { useState } from "react";
import {
  notification,
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  List,
  Modal,
  Radio,
  Select,
  Table,
} from "antd";
import { Div } from "./style";

function App() {
  const users = [
    {
      id: 1,
      name: "Abdulloh",
      age: 22,
    },
    {
      id: 2,
      name: "Xayrulloh",
      age: 25,
    },
    {
      id: 3,
      name: "Doniyor",
      age: 20,
    },
  ];

  const [open, setopen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  function Showmodal() {
    setopen(true);
  }

  function OK() {
    setLoading(true);
    setInterval(() => {
      setopen(false);
      setLoading(false);
    }, 2000);
  }
  function Cancel() {
    setopen(false);
  }
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  const notify = () => {
    notification.open({
      message: "Bildirishnoma Sarlavhasi",
      description: "Bu mavzusi",
      type:'error'
    });
  };
  const notify1 = () =>{
    notification.open({
      type:'success',
      message:'Bu success xabar',
      description:'Bu mavzusi'
    })
  }
      
  return (
    <div className="card">
      <Button type="primary">primary</Button>
      <Button color="danger" variant="solid">
        danger
      </Button>
      <Button type="default">default</Button>
      <Button type="link">default</Button>
      <Button type="text">default</Button>
      <Input variant="filled" placeholder="filled input" />
      <Input variant="borderless" placeholder="borderclass input" />
      <Input variant="outlined" placeholder="outlined input" />
      <div className="list">
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={(value) => <List.Item>{value}</List.Item>}
        />
      </div>
      <div className="modal">
        <Button onClick={Showmodal}>Modal</Button>
        <Modal
          title="Tittle"
          open={open}
          onOk={OK}
          confirmLoading={Loading}
          onCancel={Cancel}
        >
          <p>{modalText}</p>
        </Modal>
      </div>
      <Form layout="vertical">
        <Form.Item label="ismingiz" name="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form>
      <Checkbox>Roziman</Checkbox>
      <Checkbox.Group
        options={["option1", "option2", "option3"]}
        defaultValue={["option2"]}
      />
      <Radio.Group>
        <Radio value="1">Variant 1</Radio>
        <Radio value="2">Variant 2</Radio>
        <Radio value="3">Variant 3</Radio>
      </Radio.Group>
      <Select placeholder="Tanlang" style={{ width: 300 }}>
        <Select.Option value="1">Variant-1</Select.Option>
        <Select.Option value="2">Variant-2</Select.Option>
        <Select.Option value="3">Variant-3</Select.Option>
      </Select>
      <DatePicker.YearPicker />
      <Table
        dataSource={users}
        columns={[
          { title: "Name", dataIndex: "name" },
          { title: "Age", dataIndex: "age" },
        ]}
      />
      <Div>Salomat</Div>

      <Button variant="solid" color="danger" onClick={notify}>
        Notification ochish
      </Button>
      <Button className="b" color='primary' variant='outlined' onClick={notify1}>
        succes Notification ochish
      </Button>
    </div>
  );
}

export default App;

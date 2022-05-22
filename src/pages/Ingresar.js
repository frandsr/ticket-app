import React, { useEffect, useState } from "react";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useHideMenu } from "../hooks/useHideMenu";
import {
  getUsuarioStorage,
  setUsuarioStorage
} from "../helpers/getUsuarioStorage";

const Ingresar = () => {
  const [usuario] = useState(getUsuarioStorage());
  const { agente, escritorio } = usuario;

  useHideMenu({ ocultar: false });
  let navigate = useNavigate();

  const onFinish = ({ agente, escritorio }) => {
    setUsuarioStorage({ agente, escritorio });
    navigate("/escritorio");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Title, Text } = Typography;

  useEffect(() => {
    if (agente && escritorio) navigate("/escritorio");
  }, [agente, escritorio, navigate]);

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre de Agente"
          name="agente"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el nombre del agente"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nro. Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Ingrese el número de escritorio",
              type: "number",
              min: 0,
              max: 99
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Ingresar;

import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useHideMenu } from "../hooks/useHideMenu";
import { useNavigate } from "react-router-dom";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";

const { Title, Text } = Typography;

const Escritorio = () => {
  const [usuario] = useState(getUsuarioStorage());
  const { agente, escritorio } = usuario;
  let navigate = useNavigate();

  const salir = () => {
    localStorage.clear();
    navigate("/ingresar");
  };

  const siguienteTicket = () => {
    console.log("siguiente ticket");
  };

  useHideMenu({ ocultar: false });

  useEffect(() => {
    if (!agente || !escritorio) navigate("/ingresar");
  }, [agente, escritorio, navigate]);

  return (
    <>
      <Row justify="space-between">
        <Col span={20}>
          <Title level={2}> {agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{escritorio}</Text>
        </Col>
        <Col span={4}>
          <Button
            shape="round"
            type="danger"
            onClick={salir}
            icon={<CloseCircleOutlined />}
          >
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Está atendiendo el ticket Nro: </Text>
          <Text style={{ fontSize: "2rem" }} type="danger">
            5
          </Text>
        </Col>
      </Row>
      <Row justify="end">
        <Col span={4}>
          <Button
            onClick={siguienteTicket}
            shape="round"
            type="primary"
            icon={<RightOutlined />}
          >
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Escritorio;

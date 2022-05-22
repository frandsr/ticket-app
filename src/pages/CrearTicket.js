import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import React from "react";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

const CrearTicket = () => {
  useHideMenu({ ocultar: true });

  const crearTicket = () => {
    console.log("CrearTicket");
  };
  return (
    <>
      <Row>
        <Col
          span={24}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Title level={3} style={{ flex: "1 1 100%", textAlign: "center" }}>
            Presione el botón para un nuevo ticket
          </Title>

          <Button
            size="large"
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: "5em" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Text style={{ flex: "1 1 100%", textAlign: "center" }}>
            Su número
          </Text>
          <Text
            style={{
              flex: "1 1 100%",
              textAlign: "center",
              fontSize: "55px",
              lineHeight: "1"
            }}
            type="success"
            level
          >
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default CrearTicket;

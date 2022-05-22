import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import { MainRoutes } from "../components/routing/MainRoutes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UIContext } from "../contexts/UIContext";

const { Sider, Content } = Layout;

const RouterPage = () => {
  const { ocultarMenu } = useContext(UIContext);

  return (
    <>
      <Router>
        <Layout>
          <Sider
            style={{ height: "100vh" }}
            collapsedWidth="0"
            breakpoint="md"
            hidden={ocultarMenu}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: <Link to="/ingresar">Ingresar</Link>
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: <Link to="/cola">Cola</Link>
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: <Link to="/crear">Crear Ticket</Link>
                }
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280
              }}
            >
              <MainRoutes />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};

export default RouterPage;

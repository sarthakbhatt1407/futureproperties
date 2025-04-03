import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Dropdown, Space } from "antd";
import { Layout, Menu, Button, theme, Avatar } from "antd";
import {
  AccountCircleOutlined,
  CollectionsBookmark,
  Copyright,
  HistoryOutlined,
  LibraryMusicOutlined,
  Newspaper,
  PeopleOutlineOutlined,
  QuestionAnswerOutlined,
  RestoreFromTrashOutlined,
  TimerRounded,
  WorkHistoryOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import styled from "@emotion/styled";
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
const { Header, Sider, Content } = Layout;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  img {
    width: 3rem;
  }
`;

const AdminDrawerPanel = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = props.page;

  const items = [
    {
      label: <Link to={"/admin-panel/all-users"}>All Users</Link>,
      key: "0",
    },
    {
      type: "divider",
    },

    {
      label: (
        <span
          onClick={() => {
            dispatch({ type: "logout" });
            navigate("/login");
          }}
        >
          Log out
        </span>
      ),
      key: "1",
    },
  ];
  const defaultSelector = (page) => {
    if (page === "upload") {
      return ["1"];
    }
    if (page === "properties") {
      return ["2"];
    }
    if (page === "all-users") {
      return ["3"];
    }
    if (page === "upload-blog") {
      return ["4"];
    }
  };

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <LogoDiv>
          <img src={logo} alt="" />
        </LogoDiv>
        <Menu
          theme="dark"
          mode="inline"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".6rem",
            fontSize: "1rem",
          }}
          defaultSelectedKeys={defaultSelector(page)}
          items={[
            {
              key: "2",
              icon: (
                <Link
                  to={"/admin-panel/properties"}
                  onClick={() => setCollapsed(true)}
                >
                  <HomeOutlined />
                </Link>
              ),
              label: "Properties",
            },
            {
              key: "1",
              icon: (
                <Link
                  to={"/admin-panel/upload"}
                  onClick={() => setCollapsed(true)}
                >
                  <UploadOutlined />
                </Link>
              ),
              label: "Add New",
            },
            {
              key: "4",
              icon: (
                <Link
                  to={"/admin-panel/upload-blog"}
                  onClick={() => setCollapsed(true)}
                >
                  <Newspaper />
                </Link>
              ),
              label: "Add New Blog",
            },
            {
              key: "5",
              icon: (
                <Link
                  to={"/admin-panel/all-blogs"}
                  onClick={() => setCollapsed(true)}
                >
                  <CollectionsBookmark />
                </Link>
              ),
              label: "All Blogs",
            },

            {
              key: "3",
              icon: (
                <Link
                  to={"/admin-panel/all-users"}
                  onClick={() => setCollapsed(true)}
                >
                  <UserOutlined />
                </Link>
              ),
              label: "Users",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 2% 0 0",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: "fit-content",
              height: 64,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "1.35rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              Future Properties
            </span>
          </Button>

          <Dropdown menu={{ items }} trigger={["click"]}>
            <Space
              style={{
                cursor: "pointer",
                padding: "0 1rem",
              }}
            >
              <Avatar
                style={{ transform: "scale(1.3)" }}
                icon={<UserOutlined />}
              />
            </Space>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "0 ",
            padding: "15px 15px 5px 15px",
            minHeight: 280,
            background: "#F5F5F5",
            borderRadius: borderRadiusLG,
            position: "relative",
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminDrawerPanel;

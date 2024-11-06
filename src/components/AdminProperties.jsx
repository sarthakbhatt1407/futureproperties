import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Modal, Popconfirm, Select } from "antd";
import { notification } from "antd";
import { message } from "antd";
import {
  EyeOutlined,
  ClockCircleOutlined,
  CheckCircleTwoTone,
  EditOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import { Breadcrumb } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Empty } from "antd";
import { useSelector } from "react-redux";
import { Done, PersonOutline } from "@mui/icons-material";
import Loader from "./Loader";
import { MdDeleteOutline } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  a {
    color: black;
    text-decoration: none;
  }
`;

const TableBox = styled.div`
  height: 71svh;
  overflow-y: scroll;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    display: none;
  }
`;

const Table = styled.table`
  width: 100%;
`;

const TableHead = styled.thead`
  tr {
    background-color: #f4f4fb;

    td {
      text-align: center;
      padding: 0.4rem 0rem;
      color: #acaec1;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-weight: bold;
    }
  }
`;
const TableBody = styled.tbody`
  tr {
    td {
      color: #000000de;
      text-transform: capitalize;
      text-align: center;
      padding: 1rem 0;
      font-weight: 500;
      font-size: 1rem;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.3rem 0.8rem;
        border-radius: 1rem;
        gap: 0.4rem;
        width: fit-content;
        margin: 0 auto;
        /* text-transform: uppercase; */
        font-size: 0.8rem;
        font-weight: bold;
      }
      span {
        display: flex;
        align-items: center;
        margin: 0 auto;
        justify-content: center;
        gap: 0.7rem;
        img {
          width: 4rem;
        }
      }
    }
  }
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  align-items: center;
  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    flex-direction: column;
    justify-content: start;
    padding: 0;
    align-items: start;
    margin-bottom: 1rem;
    input {
      width: 100%;
    }
  }
`;
const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  outline: none;
  border: 1px solid #d7d7d7;
  width: 30%;
  &::placeholder {
    color: #d4cdcd;
    letter-spacing: 0.09rem;
    text-transform: capitalize;
  }
  &:focus {
    border: 1px solid #c0c0c0;
    box-shadow: 0.1rem 0.1rem 0.5rem #c0c0c0;
  }
`;

// name: { type: String, required: true },
// email: { type: String, required: true },
// phone: { type: Number, required: true },
// finacialReport: { type: Array, required: true },
// analytics: { type: Array, required: true },
// city: { type: String, required: true },
// state: { type: String, required: true },
// country: { type: String, required: true },
// password: { type: String, required: true },
// userSince: { type: String, required: true },
// isAdmin: { type: Boolean, required: true },
// bankDetails: { type: Array, required: true },

const MobileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 70svh;
  overflow-y: scroll;
  padding-bottom: 2rem;
  @media only screen and (min-width: 1001px) and (max-width: 5000px) {
    display: none;
  }
`;

const MobileOrderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0.2rem 0.2rem 0.6rem #e7e7ee;
  border-radius: 0.5rem;
  padding: 1rem 0;
  img {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.8rem;
  text-align: justify;
  &:nth-child(2n) {
    background-color: #fafafc;
  }
  width: 100%;
  text-transform: capitalize;
  span {
    &:first-child {
      color: black;
      font-weight: 500;
    }
  }
`;
const AdminProperties = () => {
  const [api, contextHolderNot] = notification.useNotification({
    duration: 1.5,
  });
  const openNotificationWithIcon = (type, msg) => {
    api[type]({
      message: msg,
    });
  };
  const [messageApi, contextHolder] = message.useMessage();
  const success = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };
  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };
  const userId = useSelector((state) => state.userId);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [refresher, setRefresher] = useState(0);
  const [orders, setOrders] = useState(null);
  const [properties, setProperties] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState(null);
  const [categories, setCategories] = useState([
    "Trending",
    "Most Viewed",
    "Handpicked",
  ]);
  const [isLoading, setIsloading] = useState(true);
  let sNo = 0;
  const fetcher = async () => {
    setIsloading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/property/all-properties-admin`
    );
    const data = await res.json();
    console.log(data.properties);

    if (data.status) {
      setProperties(data.properties);
    }

    setIsloading(false);
  };
  const openCategoryModal = (id) => {
    setSelectedProperty(id); // Store the property ID
    setIsModalOpen(true); // Show the modal
  };

  const handleModalOk = async () => {
    setIsModalOpen(false); // Close the modal
    setIsloading(true); // Start loading

    // Call API to update category
    console.log({
      action: "subC",
      id: selectedProperty,
      category: selectedCategory,
    });

    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/property/update-property`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "subC",
          id: selectedProperty,
          subC: selectedCategory,
        }),
      }
    );
    const data = await res.json();
    if (data.success) {
      messageApi.success(data.message);
      setRefresher((prev) => prev + 1);
      setSelectedCategory(null);
      setSelectedProperty(null); // Refresh the list
    } else {
      messageApi.error(data.message);
    }
    setIsloading(false); // Stop loading
  };

  const handleModalCancel = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedCategory(null);
    setSelectedProperty(null);
  };

  const onCategoryChange = (value) => {
    setSelectedCategory(value); // Set the selected category
  };

  const confirm = async (id) => {
    setIsloading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/order/update-order/?id=${id}&action=completed&userId=${userId}`,
      {
        method: "PATCH",
      }
    );
    const data = await res.json();
    if (res.ok) {
      openNotificationWithIcon("success", data.message);
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
          navigate("/admin-panel/history");
        }, 500);
      });
    } else {
      openNotificationWithIcon("error", data.message);
    }
    setIsloading(false);
  };
  useEffect(() => {
    fetcher();
    return () => {};
  }, [refresher]);

  const onCHangeHandler = (e) => {
    const val = e.target.value;

    const arr = orders.filter((ord) => {
      if (ord.title && ord.labelName && ord.isrc) {
        return (
          ord.title.toString().includes(val) ||
          ord.labelName.toString().includes(val) ||
          ord.isrc.toString().includes(val)
        );
      }
    });
    setFilteredOrders(arr);
  };

  return (
    <MainBox>
      {" "}
      {contextHolderNot}
      {contextHolder}
      <Breadcrumb
        items={[
          {
            title: "Admin Panel",
          },
          {
            title: "Properties",
          },
        ]}
      />
      <HeaderBox>
        <h1>Properties</h1>
        <Input
          type="text"
          placeholder="search album"
          onChange={onCHangeHandler}
        />
      </HeaderBox>
      {isLoading && <Loader />}
      <TableBox>
        {properties && (
          <Table cellSpacing={0}>
            <TableHead>
              <tr>
                <td></td>
                <td>Thumbnail</td>
                <td>Title</td>
                <td>Price</td>
                <td>Locality</td>
                <td>City</td>
                <td>Status</td>
                <td>User</td>
                <td>View</td>
                <td>Action</td>
              </tr>
            </TableHead>{" "}
            <TableBody>
              {properties.map((ord) => {
                if (ord.deleted === true) {
                  return;
                }

                const {
                  title,
                  status,
                  id,
                  price,
                  locality,
                  city,
                  images,
                  userId,
                } = ord;
                const th =
                  `${process.env.REACT_APP_BASE_URL}` +
                  "/" +
                  images.split("+")[0];

                sNo++;
                return (
                  <tr
                    key={ord.id}
                    style={{
                      backgroundColor: sNo % 2 === 0 ? "#FAFAFC" : "white",
                    }}
                  >
                    <td>{sNo}</td>
                    <td
                      style={{
                        width: "10%",
                      }}
                    >
                      <span>
                        <img
                          src={th}
                          alt=""
                          style={{
                            width: "8rem",
                          }}
                        />
                      </span>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                      }}
                    >
                      <span>{title}</span>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                      }}
                    >
                      <span>{price}</span>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                      }}
                    >
                      <span>{locality}</span>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                      }}
                    >
                      <span>{city}</span>
                    </td>
                    <td
                      style={{
                        color: `${status === "pending" ? "orange" : "green"}`,
                      }}
                    >
                      {status}
                    </td>
                    <td>
                      <Link to={`/admin-panel/user-profile/${userId}`}>
                        <PersonOutline />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/property/${title}/${id}`}>
                        <EyeOutlined />
                      </Link>
                    </td>
                    <td
                      style={{
                        width: `${status == "approved" ? "10%" : "5%"}`,
                      }}
                    >
                      <Popconfirm
                        title="Confirm"
                        description="Delete Property?"
                        onConfirm={async () => {
                          setIsloading(true);
                          console.log(id);

                          const res = await fetch(
                            `${process.env.REACT_APP_BASE_URL}/property/update-property`,
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                id: id,
                                action: "delete",
                              }),
                            }
                          );
                          const data = await res.json();
                          console.log(data);

                          if (data.success) {
                            success(data.message);
                            setTimeout(() => {
                              setRefresher((prev) => {
                                return prev + 1;
                              });
                            }, 600);
                          } else {
                            error(data.message);
                          }
                          setIsloading(false);
                        }}
                      >
                        <Link
                          style={{
                            marginRight: `1.3rem`,
                          }}
                        >
                          <MdDeleteOutline
                            style={{
                              transform: "scale(1.4)",
                            }}
                          />
                        </Link>
                      </Popconfirm>
                      {status === "pending" && (
                        <Popconfirm
                          title="Confirm"
                          description="Approve Property?"
                          onConfirm={async () => {
                            setIsloading(true);
                            console.log(id);

                            const res = await fetch(
                              `${process.env.REACT_APP_BASE_URL}/property/update-property`,
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                  id: id,
                                  action: "status",
                                }),
                              }
                            );
                            const data = await res.json();
                            console.log(data);

                            if (data.success) {
                              success(data.message);
                              setTimeout(() => {
                                setRefresher((prev) => {
                                  return prev + 1;
                                });
                              }, 600);
                            } else {
                              error(data.message);
                            }
                            setIsloading(false);
                          }}
                        >
                          <Link>
                            <GiConfirmed
                              style={{
                                transform: "scale(1.4)",
                              }}
                            />
                          </Link>
                        </Popconfirm>
                      )}
                      {status === "approved" && (
                        <Button onClick={() => openCategoryModal(id)}>
                          Category
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </TableBody>
          </Table>
        )}
        <Modal
          title="Select Category"
          visible={isModalOpen}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        >
          <Select
            placeholder="Select a category"
            onChange={onCategoryChange}
            style={{ width: "100%" }}
          >
            <Select.Option value={"trending"}>Trending</Select.Option>
            <Select.Option value={"mostviewed"}>Most Viewed</Select.Option>
            <Select.Option value={"handpicked"}>Hand Picked</Select.Option>
          </Select>
        </Modal>
        {properties && properties.length === 0 && !isLoading && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </TableBox>
    </MainBox>
  );
};

export default AdminProperties;

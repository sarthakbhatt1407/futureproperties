import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveRedEyeOutlined } from "@mui/icons-material";

import { Breadcrumb, message, Popconfirm } from "antd";
import { MdDeleteOutline } from "react-icons/md";
import Loader from "./Loader";

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

const AdminAllUsers = () => {
  let [users, setUsers] = useState(null);
  let [filteredUsers, setFilteredUsers] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const userId = useSelector((state) => state.userId);
  let c = 0;
  const [refresher, setRefresher] = useState(0);
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
  const fetcher = async () => {
    setIsloading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/get-all-users`
    );
    const data = await res.json();

    if (res.ok) {
      const arr = data.users;
      arr.reverse();
      setUsers(arr);
      setFilteredUsers(arr);
    } else {
    }
    setIsloading(false);
  };

  useEffect(() => {
    fetcher();
    return () => {};
  }, [refresher]);

  return (
    <MainBox>
      {contextHolder}
      <Breadcrumb
        items={[
          {
            title: "Admin Panel",
          },
          {
            title: "Users",
          },
        ]}
      />

      <HeaderBox>
        <h1>Users</h1>
        <Input
          type="text"
          placeholder="search user"
          onChange={(e) => {
            const val = e.target.value.trim().toLowerCase();
            const arr = users.filter((usr) => {
              return (
                usr.name.toLowerCase().includes(val) ||
                usr.phone.toString().includes(val)
              );
            });
            setFilteredUsers(arr);
          }}
        />
      </HeaderBox>
      <TableBox>
        <Table cellSpacing={0}>
          <TableHead>
            <tr>
              <td></td>
              <td>Name</td>

              <td>Phone</td>

              <td>Since</td>

              {/* <td>View Profile</td> */}
              <td>Action</td>
            </tr>
          </TableHead>
          {isLoading && <Loader />}
          {!isLoading && (
            <TableBody>
              {filteredUsers &&
                filteredUsers.map((user) => {
                  if (userId === user.id) {
                    return;
                  }
                  const {
                    id,
                    name,
                    email,
                    contactNum,
                    city,
                    state,
                    password,
                    userSince,
                  } = user;
                  c++;
                  return (
                    <tr key={id}>
                      <td>{c}</td>
                      <td>{name}</td>

                      <td>{contactNum}</td>

                      <td>{userSince}</td>

                      {/* <td>
                        <Link to={`/admin-panel/user-profile/${id}`}>
                          <RemoveRedEyeOutlined />
                        </Link>
                      </td> */}
                      <td>
                        <Popconfirm
                          title="Confirm"
                          description="Delete User?"
                          onConfirm={async () => {
                            setIsloading(true);
                            console.log(id);

                            const res = await fetch(
                              `${process.env.REACT_APP_BASE_URL}/user/delete-user`,
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                  id: id,
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
                              console.log("hi");
                              error(data.message);
                            }
                            setIsloading(false);
                          }}
                        >
                          <Link>
                            <MdDeleteOutline
                              style={{
                                transform: "scale(1.4)",
                              }}
                            />
                          </Link>
                        </Popconfirm>
                      </td>
                    </tr>
                  );
                })}
            </TableBody>
          )}
        </Table>

        {/* {filteredOrders && filteredOrders.length === 0 && !isLoading && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )} */}
      </TableBox>
    </MainBox>
  );
};

export default AdminAllUsers;

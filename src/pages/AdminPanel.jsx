import React, { useEffect } from "react";
import { useParams } from "react-router";
import AdminDrawerPanel from "../components/AdminDrawerPanel";
import Form from "../components/Form";
import AdminProperties from "../components/AdminProperties";
import AdminUserProfile from "../components/AdminUserProfile";
import AdminAllUsers from "../components/AdminAlluser";

const AdminPanel = () => {
  const page = useParams().page;
  const id = useParams().id;
  const action = useParams().action;
  useEffect(() => {}, [page]);
  return (
    <div>
      <AdminDrawerPanel page={page}>
        {page === "upload" && <Form />}
        {page === "properties" && <AdminProperties />}
        {page === "user-profile" && <AdminUserProfile />}
        {page === "all-users" && <AdminAllUsers />}
        {/* {page === "orders" && <Orders />}
        {page === "pending-work" && <PendingWork />}
        {page === "history" && <History />}
        {page === "copyright" && <CopyrightAdmin />}
        {page === "all-users" && <AllUsers />}
        {page === "notification" && <Notification />}
        {page === "user-profile" && <UserProfile />}
        {page === "user-queries" && <UserQueries />}
        {page === "pending-profile" && <PendingProfiles />}
        {id && !action && !page && <OrderDetailsPage />}
        {action === "edit" && <EditOrder />} */}
      </AdminDrawerPanel>
    </div>
  );
};

export default AdminPanel;

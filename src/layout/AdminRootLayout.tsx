import { Outlet } from "react-router-dom";
import AdminHeader from "../components/adminCommon/AdminHeader";
import AdminNav from "../components/adminCommon/AdminNav";
import Admin from "../components/admin";

function AdminRootLayout() {
  return (
    <Admin>
      <AdminHeader />
      <div className="py-4 px-5">
        <Outlet />
      </div>
      <AdminNav />
    </Admin>
  );
}

export default AdminRootLayout;

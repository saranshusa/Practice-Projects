import React, { useEffect, useState } from "react";
import classes from "./AdminHome.module.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import New from "../Tabs/New/New";
import All from "../Tabs/All/All";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const [activeTab, setActiveTab] = useState(1);
  let navigate = useNavigate();

  useEffect(() => {
    let Admin = sessionStorage.getItem("adminId");
    if (!Admin || Admin.length !== 24) {
      navigate("/admin-login");
    }
  }, []);

  if (sessionStorage.getItem("adminId"))
    return (
      <div>
        <div className={classes.menu}>
          <AdminPanelSettingsIcon />
          <p className={classes.nav}>
            Application
            <button onClick={() => setActiveTab(1)}>All</button>
            <button onClick={() => setActiveTab(2)}>New</button>
          </p>
          <LogoutIcon
            onClick={() => {
              sessionStorage.clear();
              navigate("/admin-login");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div>
          {activeTab === 1 && <All />}
          {activeTab === 2 && <New />}
        </div>
      </div>
    );
  else return null;
}

export default AdminHome;

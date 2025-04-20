import React, { useState } from "react";

import MainNavbar from "../template/MainNavbar";
import Sidebar from "./sub pages/dashboard/Sidebar";

import "../css/main css/dashboard/dashboard.css";

function Dashboard(){
    return(
        <>
            <div className="DashNav">
                    <MainNavbar />
            </div>

            <div className="DashBody">
                <div className="DashBody1">
                    <Sidebar />
                </div>
                <div className="DashBody2">

                </div>
            </div>
        </>
    )
}

export default Dashboard;
import React, { useState } from "react";

import MainNavbar from "../template/MainNavbar";
import Sidebar from "./subpages/dashboard/Sidebar";

import Parent from '../mainpages/subpages/dashboard/menu/Parent.jsx';
import Teacher from '../mainpages/subpages/dashboard/menu/Teacher.jsx';
import Student from '../mainpages/subpages/dashboard/menu/Student.jsx';

import "../css/maincss/dashboard/dashboard.css";

function Dashboard() {
    const [selectedPage, setSelectedPage] = useState("Teacher");

    // ✅ You can safely log here
    console.log("Selected Page is:", selectedPage);

    const renderPage = () => {
        switch (selectedPage) {
            case "Teacher":
                return <Teacher />;
            case "Student":
                return <Student />;
            case "Parent":
                return <Parent />;
            default:
                return <div>Select a page</div>;
        }
    };

    return (
        <>
            <div className="DashNav">
                <MainNavbar />
            </div>

            <div className="DashBody">
                <div className="DashBody1">
                    <Sidebar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
                </div>
                <div className="DashBody2">
                    {renderPage()}
                </div>
            </div>
        </>
    );
}

export default Dashboard;

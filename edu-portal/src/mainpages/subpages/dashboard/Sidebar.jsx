import React from "react";

import { PiChalkboardTeacherBold } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";

import '../../../css/maincss/dashboard/subpages/sidebar.css';

function Sidebar({ setSelectedPage, selectedPage }) {
    return (
        <div className="sidebar">
            <ul>
                <li>Navigation</li>
                <li 
                    onClick={() => setSelectedPage("Teacher")}
                    className={selectedPage === "Teacher" ? "active" : ""}
                >
                    <span className="me-2"><PiChalkboardTeacherBold /></span> Teachers
                </li>
                <li 
                    onClick={() => setSelectedPage("Student")}
                    className={selectedPage === "Student" ? "active" : ""}
                >
                    <span className="me-2"><PiStudent /></span> Students
                </li>
                <li 
                    onClick={() => setSelectedPage("Parent")}
                    className={selectedPage === "Parent" ? "active" : ""}
                >
                    <span className="me-2"><RiParentLine /></span> Parents
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

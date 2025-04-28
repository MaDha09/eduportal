import React from "react";

import { PiChalkboardTeacherBold } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { MdSubject } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

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
                <li 
                    onClick={() => setSelectedPage("Subject")}
                    className={selectedPage === "Subject" ? "active" : ""}
                >
                    <span className="me-2"><MdSubject /></span> Subjects
                </li>
                <li 
                    onClick={() => setSelectedPage("SchoolForm")}
                    className={selectedPage === "SchoolForm" ? "active" : ""}
                >
                    <span className="me-2"><SiGoogleforms /></span> School Forms
                </li>
                <li 
                    onClick={() => setSelectedPage("Profile")}
                    className={selectedPage === "Profile" ? "active" : ""}
                >
                    <span className="me-2"><CgProfile /></span> Profile
                </li>
                <li 
                    onClick={() => setSelectedPage("Logout")}
                    className={selectedPage === "Logout" ? "active" : ""}
                >
                    <span className="me-2"><FiLogOut /></span> Logout
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

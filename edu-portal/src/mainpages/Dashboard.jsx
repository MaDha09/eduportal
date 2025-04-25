// src/components/dashboard/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../js/supabaseClient.js";  
import MainNavbar from "../template/MainNavbar";
import Sidebar from "./subpages/dashboard/Sidebar";

import Parent from "../mainpages/subpages/dashboard/menu/Parent";
import Teacher from "../mainpages/subpages/dashboard/menu/Teacher";
import Student from "../mainpages/subpages/dashboard/menu/Student";
import TeacherDisplay from "./subpages/dashboard/menu/teacher/TeacherDisplay.jsx";
import StudentDisplay from "./subpages/dashboard/menu/student/StudentDisplay.jsx";
import ParentDisplay from "./subpages/dashboard/menu/parent/ParentDisplay.jsx";

import "../css/maincss/dashboard/dashboard.css";

function Dashboard() {
  const [selectedPage, setSelectedPage] = useState("Teacher");
  const [clickedLastname, setClickedLastname] = useState(null);
  const [teacherDetails, setTeacherDetails] = useState(null);

  // Whenever a lastname is clicked, fetch that full record
  useEffect(() => {
    if (!clickedLastname) {
      setTeacherDetails(null);
      return;
    }

    supabase
      .from("teacherInfo")
      .select("*")
      .eq("lastname", clickedLastname)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("Detail fetch error:", error);
        else setTeacherDetails(data);
      });
  }, [clickedLastname]);

  const renderPage = () => {
    switch (selectedPage) {
      case "Teacher":
        // Pass down the setter so TeacherProfile can call it
        return <Teacher setClickedLastname={setClickedLastname} />;
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
          <Sidebar
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
        <div className="DashBody2">
          <div className="teacherList">{renderPage()}</div>

          <div className="teacherInfo">
            {selectedPage === "Teacher" && (
            <TeacherDisplay
                teacherDetails={teacherDetails}
                clickedLastname={clickedLastname}
            />
            )}

            {selectedPage === "Student" && (
            <StudentDisplay />
            )}

            {selectedPage === "Parent" && (
            <ParentDisplay />
            )}
                    </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

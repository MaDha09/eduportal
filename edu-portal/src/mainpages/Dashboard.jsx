import React, { useState, useEffect } from "react";
import { supabase } from "../js/supabaseClient.js";
import MainNavbar from "../template/MainNavbar";
import Sidebar from "./subpages/dashboard/Sidebar";

// Corrected import paths for the pages
import Parent from "../mainpages/subpages/dashboard/menu/Parent";
import Teacher from "../mainpages/subpages/dashboard/menu/Teacher";
import Student from "../mainpages/subpages/dashboard/menu/Student";
import TeacherDisplay from "./subpages/dashboard/menu/teacher/TeacherDisplay";
import StudentDisplay from "./subpages/dashboard/menu/student/StudentDisplay";
import ParentDisplay from "./subpages/dashboard/menu/parent/ParentDisplay";

// Correct CSS import
import "../css/maincss/dashboard/dashboard.css";

function Dashboard() {
  const [selectedPage, setSelectedPage] = useState("Teacher");
  const [clickedLastname, setClickedLastname] = useState(null);
  const [teacherDetails, setTeacherDetails] = useState(null);

  const [clickedStudent, setClickedStudent] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);

  const [clickedParent, setClickedParent] = useState(null);
  const [parentDetails, setParentDetails] = useState(null);

  // Fetch teacher details when a teacher's lastname is clicked
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

  // Fetch student details when a student's lastname is clicked
  useEffect(() => {
    if (!clickedStudent) {
      setStudentDetails(null);
      return;
    }
  
    supabase
      .from("student")
      .select("*")
      .eq("lastname", clickedStudent)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("Student detail fetch error:", error);
        else setStudentDetails(data);
      });
  }, [clickedStudent]);

  // Fetch parent details when a parent's lastname is clicked
  useEffect(() => {
    if (!clickedParent) {
      setParentDetails(null);
      return;
    }
  
    supabase
      .from("parentInfo")
      .select("*")
      .eq("lastname", clickedParent)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("Parent detail fetch error:", error);
        else setParentDetails(data);
      });
  }, [clickedParent]);

  // Render the appropriate page based on the selected option
  const renderPage = () => {
    switch (selectedPage) {
      case "Teacher":
        return <Teacher setClickedLastname={setClickedLastname} />;
      case "Student":
        return <Student setClickedStudent={setClickedStudent} />;
      case "Parent":
        return <Parent setClickedParent={setClickedParent} />;
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
              <StudentDisplay
                studentDetails={studentDetails}
                clickedStudent={clickedStudent}
              />
            )}

            {selectedPage === "Parent" && (
              <ParentDisplay
                parentDetails={parentDetails}
                clickedParent={clickedParent}
              />
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;

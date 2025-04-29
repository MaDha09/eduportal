import React, { useState, useEffect } from "react";
import { supabase } from "../js/supabaseClient.js";
import MainNavbar from "../template/MainNavbar";
import Sidebar from "./subpages/dashboard/Sidebar";

// Corrected import paths for the pages
import Parent from "../mainpages/subpages/dashboard/menu/Parent";
import Teacher from "../mainpages/subpages/dashboard/menu/Teacher";
import Student from "../mainpages/subpages/dashboard/menu/Student";
import Subjects from "./subpages/dashboard/menu/Subjects.jsx";
import Profile from "./subpages/dashboard/menu/Profile.jsx";
import SchoolForm from "./subpages/dashboard/menu/SchoolForm.jsx";

import TeacherDisplay from "./subpages/dashboard/menu/teacher/TeacherDisplay";
import StudentDisplay from "./subpages/dashboard/menu/student/StudentDisplay";
import ParentDisplay from "./subpages/dashboard/menu/parent/ParentDisplay";
import SubjectDisplay from "./subpages/dashboard/menu/subject/SubjectDisplay.jsx";
import ProfileDisplay from "./subpages/dashboard/menu/profile/ProfileDisplay.jsx";
import SchoolFormDisplay from "./subpages/dashboard/menu/schoolform/SchoolFormDisplay.jsx";

// Correct CSS import
import "../css/maincss/dashboard/dashboard.css";

function Dashboard() {
  const [selectedPage, setSelectedPage] = useState("Teacher");
  const [clickedLastname, setClickedLastname] = useState(null);
  const [teacherDetails, setTeacherDetails] = useState(null);
  const [teacherAssignments, setTeacherAssignments] = useState([]);

  const [clickedStudent, setClickedStudent] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [studentGrades, setStudentGrades] = useState([]);
  const [sectionDetails, setSectionDetails] = useState(null);
  const [studentAttendance, setStudentAttendance] = useState(null);

  const [clickedParent, setClickedParent] = useState(null);
  const [parentDetails, setParentDetails] = useState(null);

  const [clickedSubjects, setClickedSubjects] = useState(null);
  const [subjectsDetails, setSubjectsDetails] = useState(null);

  const [clickedSchoolForm, setClickedSchoolForm] = useState(null);
  const [schoolformtDetails, setSchoolFormDetails] = useState(null);

  const [clickedProfile, setClickedProfile] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);

  const [clickedLogout, setClickedLogout] = useState(null);
  const [logoutDetails, setLogoutDetails] = useState(null);

  // Fetch teacher details when a teacher's lastname is clicked
  useEffect(() => {
    if (!clickedLastname) {
      setTeacherDetails(null);
      return;
    }

    supabase
      .from("teachers")
      .select("*")
      .eq("last_name", clickedLastname)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("Detail fetch error:", error);
        else setTeacherDetails(data);
      });
  }, [clickedLastname]);

  useEffect(() => {
    if (!teacherDetails) {
      setTeacherAssignments([]);
      return;
    }
  
    supabase
      .from("sf7_personnel_assignment")
      .select("*")
      .eq("teacher_id", teacherDetails.teacher_id)
      .then(({ data, error }) => {
        if (error) {
          console.error("Assignment fetch error:", error);
        } else {
          console.log("Assignments fetched:", data);   // 👈 ADD THIS LINE
          setTeacherAssignments(data);
        }
      });
  }, [teacherDetails]);
  
  

  // Fetch student details when a student's lastname is clicked
  useEffect(() => {
    if (!clickedStudent) {
      setStudentDetails(null);
      return;
    }
  
        supabase
      .from("students")
      .select(`
        *,
        sf1_register (*),
        health_info (*),
        sf10_permanent_record (*),
        movement (
          *,
          department_from:departments!movement_department_from_fkey (*),
          department_to:departments!movement_department_to_fkey (*)
        )
      `)
      .eq("last_name", clickedStudent)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("Student detail fetch error:", error);
        else setStudentDetails(data);
      });

  }, [clickedStudent]);
  
  

  useEffect(() => {
    if (!studentDetails) {
      setStudentGrades([]);
      return;
    }
  
      supabase
        .from("grades")
        .select(`
          grade,
          grading_period,
          subject_id,
          subjects (
            subject_name
          )
        `)
        .eq("student_id", studentDetails.student_id)
        .then(({ data, error }) => {
          if (error) {
            console.error("Grades fetch error:", error);
          } else {
            console.log("Fetched grades with subjects:", data);
            setStudentGrades(data);
          }
        });
    }, [studentDetails]);

    useEffect(() => {
      if (!studentDetails) {
        setStudentAttendance(null);
        return;
      }
    
      supabase
        .from("attendance")
        .select("*")
        .eq("student_id", studentDetails.student_id)
        .then(({ data, error }) => {
          if (error) {
            console.error("Attendance fetch error:", error);
          } else {
            console.log("Fetched attendance data:", data);  // 👈 Add this
            setStudentAttendance(data);
          }
        });
    }, [studentDetails]);
    
    
  

  useEffect(() => {
    if (!studentDetails) {
      setSectionDetails(null); // Clear the section data if there's no student details
      return;
    }
  
    supabase
      .from("sf1_register")  
      .select("*")  
      .eq("student_id", studentDetails.student_id) 
      .then(({ data, error }) => {
        if (error) {
          console.error("Section fetch error:", error);
        } else {
          setSectionDetails(data);  
        }
      });
  }, [studentDetails]); 
  

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

  useEffect(() => {
    if (!clickedSubjects) {
      setSubjectsDetails(null);
      return;
    }
  
    supabase
      .from("parentInfo")
      .select("*")
      .eq("lastname", clickedParent)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("Parent detail fetch error:", error);
        else setSubjectsDetails(data);
      });
  }, [clickedSubjects]);

  useEffect(() => {
    if (!clickedSchoolForm) {
      setClickedSchoolForm(null);
      return;
    }
  
    supabase
      .from("parentInfo")
      .select("*")
      .eq("lastname", clickedSchoolForm)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("Parent detail fetch error:", error);
        else setSchoolFormDetails(data);
      });
  }, [clickedSchoolForm]);

  useEffect(() => {
    if (!clickedProfile) {
      setProfileDetails(null);
      return;
    }
  
    supabase
      .from("parentInfo")
      .select("*")
      .eq("lastname", clickedProfile)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("Parent detail fetch error:", error);
        else setProfileDetails(data);
      });
  }, [clickedProfile]);

  // Render the appropriate page based on the selected option
  const renderPage = () => {
    switch (selectedPage) {
      case "Teacher":
        return <Teacher setClickedLastname={setClickedLastname} />;
      case "Student":
        return <Student setClickedStudent={setClickedStudent} />;
      case "Parent":
      return <Parent setClickedParent={setClickedParent} />;
      case "Subject":
      return <Subjects setClickedSubjects={setClickedSubjects} />;
      case "SchoolForm":
      return <SchoolForm setClickedSchoolForm={setClickedSchoolForm} />;
      case "Profile":
      return <Profile setClickedProfile={setClickedProfile} />;
      case "Logout":
        return <Parent setClickedLogout={setClickedLogout} />;
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
                teacherAssignments={teacherAssignments}
              />
            )}

            {selectedPage === "Student" && (
              <StudentDisplay
                studentDetails={studentDetails}
                clickedStudent={clickedStudent}
                studentGrades={studentGrades}
                sectionDetails={sectionDetails} 
                studentAttendance={studentAttendance}
              />
            )}

            {selectedPage === "Parent" && (
              <ParentDisplay
                parentDetails={parentDetails}
                clickedParent={clickedParent}
              />
            )}

            {selectedPage === "Subject" && (
              <SubjectDisplay
                subjectsDetails={subjectsDetails}
                clickedSubjects={clickedSubjects}
              />
            )}
            
            {selectedPage === "SchoolForm" && (
              <SchoolFormDisplay
                schoolformtDetails={schoolformtDetails}
                clickedSchoolForm={clickedSchoolForm}
              />
            )}

            {selectedPage === "Profile" && (
              <ProfileDisplay
                profileDetails={profileDetails}
                clickedProfile={clickedProfile}
              />
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;

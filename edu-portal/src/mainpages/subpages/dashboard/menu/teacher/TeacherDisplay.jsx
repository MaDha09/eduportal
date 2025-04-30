// TeacherDisplay.jsx
import React, { useState } from "react";
import TeacherPersonal from "./TeacherPersonal";
import TeacherAssignments from "./TeacherAssignments";

function TeacherDisplay({ teacherDetails, clickedLastname, teacherAssignments }) {

  const [activeTab, setActiveTab] = useState("Profile");
  // 1) Nothing selected yet
  if (!clickedLastname) {
    return <p className="p-3 text-muted">Click a teacher’s name to view details.</p>;
  }

  // 2) Clicked but still loading
  if (!teacherDetails) {
    return <p className="p-3 text-muted">Loading…</p>;
  }

  const navItems = ["Profile", "Assignments"];

  // 3) We have data!
  return (
    <>
        <div className="tab d-flex gap-3 mb-3 border-bottom pb-2">
        {navItems.map((tab) => (
          <button
            key={tab}
            className={`studentTab btn btn-sm ${activeTab === tab ? "btn-warning" : "btn-outline-light"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-3">
        {activeTab === "Profile" && <TeacherPersonal teacher={teacherDetails} />}
        {activeTab === "Assignments" && <TeacherAssignments assignments={teacherAssignments} teacher={teacherDetails}/>}
      </div>
    </>
  );
}

export default TeacherDisplay;

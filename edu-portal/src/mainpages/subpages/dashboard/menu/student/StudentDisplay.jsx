// StudentDisplay.jsx
import React, { useState } from "react";
import StudentPersonal from "./StudentPersonal";

import '../../../../../css/maincss/dashboard/subpages/student.css';



function StudentDisplay({ studentDetails, clickedStudent }) {

  const [activeTab, setActiveTab] = useState("Personal");
  // 1) Nothing selected yet
  if (!clickedStudent) {
    return <p className="p-3 text-muted">Click a student's name to view details.</p>;
  }

  // 2) Clicked but still loading
  if (!studentDetails) {
    return <p className="p-3 text-muted">Loading…</p>;
  }

  const navItems = ["Profile", "Attendance", "Grades", "Movement", "Health", "Permanent Record"];

  // 3) We have data!
  return (
    <div className="tab d-flex gap-1 mb-3 border-bottom pb-2">
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
  );
}

export default StudentDisplay;

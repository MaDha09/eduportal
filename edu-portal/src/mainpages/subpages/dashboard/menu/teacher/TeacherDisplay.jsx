// TeacherDisplay.jsx
import React from "react";

function TeacherDisplay({ teacherDetails, clickedLastname }) {
  // 1) Nothing selected yet
  if (!clickedLastname) {
    return <p className="p-3 text-muted">Click a teacher’s name to view details.</p>;
  }

  // 2) Clicked but still loading
  if (!teacherDetails) {
    return <p className="p-3 text-muted">Loading…</p>;
  }

  // 3) We have data!
  return (
    <div className="p-3">
      <h5>Teacher Info</h5>
      <p><strong>Last name:</strong> {teacherDetails.lastname}</p>
      <p><strong>First name:</strong> {teacherDetails.firstname}</p>
      <p><strong>Email:</strong> {teacherDetails.email}</p>
      {/* …any other fields */}
    </div>
  );
}

export default TeacherDisplay;

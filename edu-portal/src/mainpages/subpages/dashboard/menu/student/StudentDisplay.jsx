// StudentDisplay.jsx
import React from "react";

function StudentDisplay({ studentDetails, clickedStudent }) {
  // 1) Nothing selected yet
  if (!clickedStudent) {
    return <p className="p-3 text-muted">Click a student's name to view details.</p>;
  }

  // 2) Clicked but still loading
  if (!studentDetails) {
    return <p className="p-3 text-muted">Loading…</p>;
  }

  // 3) We have data!
  return (
    <div className="p-3">
      <h5>Student Info</h5>
      <p><strong>Last name:</strong> {studentDetails.lastname}</p>
      <p><strong>First name:</strong> {studentDetails.firstname}</p>
      <p><strong>Sex:</strong> {studentDetails.sex}</p>
      <p><strong>Birthday:</strong> {studentDetails.birthday}</p>
      <p><strong>Email:</strong> {studentDetails.email}</p>
      <p><strong>Grade Level:</strong> {studentDetails.gradeLevel}</p>
      <p><strong>Section:</strong> {studentDetails.section}</p>
      <p><strong>Enrollment Status:</strong> {studentDetails.enrollmentStatus}</p>
      <p><strong>Guardian:</strong> {studentDetails.guardian}</p>
      <p><strong>Guardian Contact:</strong> {studentDetails.guardianContact}</p>
      <p><strong>Address:</strong> {studentDetails.address}</p>
      <p><strong>School Year:</strong> {studentDetails.schoolYear}</p>
      {/* …any other fields */}
    </div>
  );
}

export default StudentDisplay;

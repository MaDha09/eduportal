import React from "react";

function StudentMovement({ student }) {
  // Grab the first movement (or fallback to an empty object)
  const move = student?.movement?.[0] || {};

  return (
    <div>
      <p><strong>Last name:</strong> {student.last_name}</p>
      <p><strong>First name:</strong> {student.first_name}</p>
      <p><strong>School Year:</strong> {move.school_year || "No school year found"}</p>
      <p><strong>Movement Type:</strong> {move.movement_type || "N/A"}</p>
      <p><strong>Department From:</strong> {move.department_from?.department_name || "N/A"}</p>
      <p><strong>Department To:</strong> {move.department_to?.department_name || "N/A"}</p>
      <p><strong>Movement Date:</strong> {move.movement_date || "N/A"}</p>
      <p><strong>Status:</strong> {move.status || "N/A"}</p>
    </div>
  );
}

export default StudentMovement;

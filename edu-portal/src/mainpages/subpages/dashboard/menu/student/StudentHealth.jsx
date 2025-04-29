import React from "react";

function StudentHealth({ student }) {
  const record = student?.health_info?.[0] || {};

  return (
    <div>
      <p><strong>Name:</strong> {student.first_name} {student.last_name}</p>
      <p><strong>Date:</strong> {record.created_At || "No date found"}</p>
      <p><strong>Height:</strong> {record.height || "N/A"}</p>
      <p><strong>Weight:</strong> {record.weight || "N/A"}</p>
      <p><strong>Health Notes:</strong> {record.health_notes || "None"}</p>
    </div>
  );
}

export default StudentHealth;

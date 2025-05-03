import React from "react";

function ParentDisplay({ parentDetails, clickedParent }) {
  if (!clickedParent) {
    return <p className="mt-3">Select a parent to view details.</p>;
  }

  if (!parentDetails) {
    return <p className="mt-3">Loading parent details...</p>;
  }

  return (
    <div className="p-3">
      <h5>Details for: {parentDetails.last_name}</h5>
      <p><strong>First Name:</strong> {parentDetails.first_name}</p>
      
      <p><strong>Student Name(s):</strong></p>
      <ul>
        {Array.isArray(parentDetails.students) &&
          parentDetails.students.map((student, index) => (
            <li key={index}>
              {student.first_name} {student.last_name}
            </li>
          ))}
      </ul>

      <p><strong>Grade Level:</strong> {parentDetails.email}</p>
      <p><strong>Phone:</strong> {parentDetails.contact_number}</p>
    </div>
  );
}

export default ParentDisplay;

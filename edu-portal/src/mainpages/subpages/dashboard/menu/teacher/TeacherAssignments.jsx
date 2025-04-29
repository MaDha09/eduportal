import React from "react";

function TeacherAssignments({ assignments }) {
  if (!assignments || assignments.length === 0) {
    return <p>No assignments found.</p>;
  }

  return (
    <div>
      <h5>Assignments:</h5>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            <strong>School Year:</strong> {assignment.school_year} - 
            <strong> Type:</strong> {assignment.assignment_type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherAssignments;

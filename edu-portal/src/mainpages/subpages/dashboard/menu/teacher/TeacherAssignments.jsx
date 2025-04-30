import React from "react";

function TeacherAssignments({ assignments, teacher}) {
  if (!assignments || assignments.length === 0) {
    return <p>No assignments found.</p>;
  }

  return (
    <div>
      <h5>Assignments:</h5>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {teacher.first_name} {teacher.last_name}</p>
            <br />
            <p><strong>Subject Specialization:</strong> {teacher.subject_specialization}</p>
            <br />
            <strong> Class:</strong> {teacher.departments?.department_name || "N/A"}
            <br />
            <strong> Role:</strong> {assignment.assignment_type}
            <br />
            <strong> Academic Year:</strong> {assignment.school_year}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherAssignments;

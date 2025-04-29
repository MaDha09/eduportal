import React from "react";

function TeacherProfile({ teacher }) {
  return (
    <div>
      <p><strong>First Name:</strong> {teacher.first_name}</p>
      <p><strong>Last Name:</strong> {teacher.last_name}</p>
      <p><strong>Email:</strong> {teacher.email}</p>
      <p><strong>Subject Specialization:</strong> {teacher.subject_specialization}</p>
      <p><strong>Sex:</strong> {teacher.sex}</p>
    </div>
  );
}

export default TeacherProfile;

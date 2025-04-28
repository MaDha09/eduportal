import React from "react";

function StudentMovement({ student }) {
  return (
    <div>
      <p><strong>Last name:</strong> {student.lastname}</p>
      <p><strong>First name:</strong> {student.firstname}</p>
      <p><strong>Sex:</strong> {student.sex}</p>
      <p><strong>Birthday:</strong> {student.birthday}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Grade Level:</strong> {student.gradeLevel}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Enrollment Status:</strong> {student.enrollmentStatus}</p>
      <p><strong>Guardian:</strong> {student.guardian}</p>
      <p><strong>Guardian Contact:</strong> {student.guardianContact}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>School Year:</strong> {student.schoolYear}</p>
    </div>
  );
}

export default StudentMovement;

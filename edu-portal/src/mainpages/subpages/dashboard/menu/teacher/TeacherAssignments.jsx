import React from "react";

function TeacherAssignments({ teacher }) {
  return (
    <div>
      <p><strong>Last name:</strong> {teacher.lastname}</p>
      <p><strong>First name:</strong> {teacher.firstname}</p>
      <p><strong>Sex:</strong> {teacher.sex}</p>
      <p><strong>Birthday:</strong> {teacher.birthday}</p>
      <p><strong>Email:</strong> {teacher.email}</p>
      <p><strong>Position:</strong> {teacher.position}</p>
      <p><strong>Employment Status:</strong> {teacher.employmentType}</p>
      <p><strong>Status:</strong> {teacher.isTeaching}</p>
      <p><strong>Specialization:</strong> {teacher.specialization}</p>
      <p><strong>Years Teaching:</strong> {teacher.yearsTeaching}</p>
      <p><strong>Highest Education:</strong> {teacher.highestEducation}</p>
      <p><strong>Eligibility:</strong> {teacher.eligibility}</p>
    </div>
  );
}

export default TeacherAssignments;

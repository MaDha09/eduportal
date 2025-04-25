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
      <p><strong>Sex:</strong> {teacherDetails.sex}</p>
      <p><strong>Birthday:</strong> {teacherDetails.birthday}</p>
      <p><strong>Email:</strong> {teacherDetails.email}</p>
      <p><strong>Position:</strong> {teacherDetails.position}</p>
      <p><strong>Employment Status:</strong> {teacherDetails.employmentType}</p>
      <p><strong>Status:</strong> {teacherDetails.isTeaching}</p>
      <p><strong>Specialization:</strong> {teacherDetails.specialization}</p>
      <p><strong>Years Teaching:</strong> {teacherDetails.yearsTeaching}</p>
      <p><strong>Highest Education:</strong> {teacherDetails.highestEducation}</p>
      <p><strong>Eligibility:</strong> {teacherDetails.eligibility}</p>
      <p><strong>Trainings:</strong> {teacherDetails.trainings}</p>
      <p><strong>Class Advisory:</strong> {teacherDetails.classAdvisory}</p>
      {/* …any other fields */}
    </div>
  );
}

export default TeacherDisplay;

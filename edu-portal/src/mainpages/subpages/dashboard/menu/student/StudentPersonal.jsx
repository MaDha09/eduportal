import React from "react";

function StudentPersonal({ student, sectionDetails }) {

  const sectionInfo = sectionDetails?.[0];

  return (
    <div>
      <p><strong>Last name:</strong> {student.last_name}</p>
      <p><strong>First name:</strong> {student.first_name}</p>
      <p><strong>Sex:</strong> {student.sex}</p>
      <p><strong>Birthday:</strong> {student.birthday}</p>
      <p><strong>Grade Level:</strong> {student?.sf1_register?.[0]?.grade_level || "No remarks"}</p>
      <p><strong>Section:</strong> {student?.sf1_register?.[0]?.section || "No remarks"}</p>
      <p><strong>Enrollment Status:</strong> {student?.movement?.[0]?.movement_type || "No"}</p>
      <p><strong>Remarks:</strong> {student?.sf10_permanent_record?.[0]?.details?.remarks || "No remarks"}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>School Year:</strong> {sectionInfo?.school_year || "No school year found"}</p>
    </div>
  );
}

export default StudentPersonal;

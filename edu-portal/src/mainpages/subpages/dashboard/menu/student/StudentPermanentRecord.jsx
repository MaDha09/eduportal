import React from "react";

function StudentPermanentRecord({ student }) {
  const record = student?.sf10_permanent_record?.[0];
  const details = record?.details || {}; // Make sure details is an object

  return (
    <div>
      <p><strong>Name: </strong>{student.first_name} {student.last_name}</p>
      <p><strong>School Year:</strong> {details?.school_year || "No remarks"}</p>
      <p><strong>Previous School:</strong> {details?.previous_school || "No remarks"}</p>
      <p><strong>Final Average:</strong> {details?.final_average || "No remarks"}</p>
      <p><strong>Remarks:</strong> {details?.remarks || "No remarks"}</p>
    </div>
  );
}

export default StudentPermanentRecord;

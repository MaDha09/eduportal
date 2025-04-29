import React, { useEffect } from "react";

function StudentGrade({ student, grades, sectionDetails }) {
  useEffect(() => {
    console.log("Student details:", student);
    console.log("Grades:", grades);
    console.log("Section details:", sectionDetails);  
  }, [student, grades, sectionDetails]);

  const sectionInfo = sectionDetails?.[0]; // assuming only one record matters
  const remarks = student?.sf10_permanent_record?.[0]?.details?.remarks || "No remarks";


  return (
    <div>
      <h5>Grades for {student.first_name} {student.last_name}</h5>
      <p><strong>Section:</strong> {sectionInfo?.section || "No section found"}</p>
      <p><strong>School Year:</strong> {sectionInfo?.school_year || "No school year found"}</p>
      <p><strong>Final Average:</strong> {student?.sf10_permanent_record?.[0]?.details?.final_average || "N/A"}</p>
      <p><strong>Previous School:</strong> {student?.sf10_permanent_record?.[0]?.details?.previous_school || "N/A"}</p>
      <p><strong>Remarks:</strong> {student?.sf10_permanent_record?.[0]?.details?.remarks || "No remarks"}</p>



      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            <strong>Subject:</strong> {grade.subjects?.subject_name || 'N/A'} <br />
            <strong>Grade:</strong> {grade.grade}
            <br />
            <strong>Grading Period:</strong> {grade.grading_period || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentGrade;

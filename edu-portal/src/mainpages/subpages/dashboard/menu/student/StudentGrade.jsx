import React, { useEffect } from "react";

function StudentGrade({ student, grades }) {

  // Console log to check the section
  console.log("Student Section:", student.sf1_register?.section);

  return (
    <div>
      <h5>Grades for {student.first_name} {student.last_name}</h5>
      // Inside StudentGrade.jsx
      <p><strong>Section:</strong> {student.sf1_register?.section || "No section found"}</p>

      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            <strong>Subject:</strong> {grade.subject} <br/>
            <strong>Grade:</strong> {grade.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentGrade;

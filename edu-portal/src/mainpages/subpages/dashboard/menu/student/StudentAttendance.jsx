import React from "react";

function StudentAttendance({ student, attendance }) {
  if (!attendance || attendance.length === 0) {
    return <p>No attendance data found for this student.</p>;
  }

  // Compute attendance statistics
  const totalDays = attendance.length;
  const present = attendance.filter((r) => r.status === "Present").length;
  const absent = attendance.filter((r) => r.status === "Absent").length;
  const rate = totalDays ? ((present / totalDays) * 100).toFixed(1) : 0;

  return (
    <div>
      <p><strong>Student Name:</strong> {student.first_name} {student.last_name}</p>
      <p><strong>Student ID:</strong> {student.student_id}</p>
      <p><strong>Total Days:</strong> {totalDays}</p>
      <p><strong>Total Present:</strong> {present}</p>
      <p><strong>Total Absent:</strong> {absent}</p>
      <p><strong>Attendance Rate:</strong> {rate}%</p>
    </div>
  );
}

export default StudentAttendance;

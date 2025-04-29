import React, { useEffect, useState } from "react";
import { supabase } from "../../../../../js/supabaseClient";

function StudentProfile({ searchQuery, setClickedStudent }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    supabase
      .from("students")
      .select("last_name")
      .then(({ data, error }) => {
        if (error) {
          console.error("Error fetching students:", error);
        } else {
          setStudents(data);  // Set the students data
        }
      });
  }, []);

  // Filter students based on the search query
  const filtered = students.filter(student =>
    student.last_name?.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <>
      <h6 className="mt-3 ms-3">Student's Names</h6>
      <div className="nameList mt-4">
        <ul className="w-full">
          {filtered.map((student, i) => (
             <li
             key={i}
             className="lastName w-full cursor-pointer p-2 border-b"
             onClick={() => {
                console.log("Clicked student:", student.last_name);
                setClickedStudent(student.last_name);
              }}
           >
             {student.last_name}
           </li>
          ))}
          {!filtered.length && (
            <li className="text-muted mt-2">No matching students found.</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default StudentProfile;

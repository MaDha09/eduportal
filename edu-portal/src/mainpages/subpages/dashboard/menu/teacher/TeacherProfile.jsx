// TeacherProfile.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../../js/supabaseClient.js";

function TeacherProfile({ searchQuery, onSelectLastname }) {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // only need lastnames here
    supabase
      .from("teachers")
      .select("last_name")
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setTeachers(data);
      });
  }, []);

  const filtered = teachers.filter(s =>
    s.last_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h6 className="mt-3 ms-3">Teacher's Names</h6>
      <div className="nameList mt-4">
        <ul className="w-full">
          {filtered.map((t, i) => (
            <li
              key={i}
              className="lastName w-full cursor-pointer p-2 border-b"
              onClick={() => onSelectLastname(t.last_name)}   // ← fire the lastname up
            >
              {t.last_name}
            </li>
          ))}
          {!filtered.length && (
            <li className="text-muted mt-2">No matching teachers found.</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default TeacherProfile;

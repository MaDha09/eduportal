// Teacher.jsx
import React, { useState } from "react";
import Searchbar from "./teacher/Searchbar";
import TeacherProfile from "./teacher/TeacherProfile";
import '../../../../css/maincss/dashboard/subpages/teacher.css';

function Teacher({ setClickedLastname }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="teacherRow1">
        <Searchbar onSearch={setSearchQuery} />
      </div>
      <div className="teacherRow2">
        <div className="teacherProfile">
          <TeacherProfile
            searchQuery={searchQuery}
            onSelectLastname={setClickedLastname}   // ← new prop
          />
        </div>
      </div>
    </>
  );
}

export default Teacher;

import React, { useState } from "react";
import Searchbar from "./teacher/Searchbar";

import StudentProfile from "./student/StudentProfile";

function Student({ setClickedStudent }) {
    const [searchQuery, setSearchQuery] = useState("");
  
    return (
      <>
        <div className="teacherRow1">
          <Searchbar onSearch={setSearchQuery} />
        </div>
        <div className="teacherRow2">
          <div className="teacherProfile">
                <StudentProfile
                    searchQuery={searchQuery}
                    setClickedStudent={setClickedStudent}
                />
          </div>
        </div>
      </>
    );
  }
  
  export default Student;
  

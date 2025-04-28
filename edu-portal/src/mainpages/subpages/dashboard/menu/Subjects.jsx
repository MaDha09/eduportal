import React, { useState } from "react";
import Searchbar from "./teacher/Searchbar";

import SubjectInfo from "./subject/SubjectInfo.jsx";
function Subjects({ setClickedSubjects }) {
    const [searchQuery, setSearchQuery] = useState("");
  
    return (
      <>
        <div className="teacherRow1">
          <Searchbar onSearch={setSearchQuery} />
        </div>
        <div className="teacherRow2">
          <div className="teacherProfile">
                <SubjectInfo
                    searchQuery={searchQuery}
                    setClickedStudent={setClickedSubjects}
                />
          </div>
        </div>
      </>
    );
  }

export default Subjects;
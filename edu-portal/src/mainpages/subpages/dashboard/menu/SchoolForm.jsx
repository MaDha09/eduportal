import React, { useState } from "react";
import Searchbar from "./teacher/Searchbar";

import SchoolFormInfo from "./schoolform/SchoolFormInfo";

function SchoolForm({ setClickedSchoolForm }) {
    const [searchQuery, setSearchQuery] = useState("");
  
    return (
      <>
        <div className="teacherRow1">
          <Searchbar onSearch={setSearchQuery} />
        </div>
        <div className="teacherRow2">
          <div className="teacherProfile">
                <SchoolFormInfo
                    searchQuery={searchQuery}
                    setClickedStudent={setClickedSchoolForm}
                />
          </div>
        </div>
      </>
    );
  }

export default SchoolForm;
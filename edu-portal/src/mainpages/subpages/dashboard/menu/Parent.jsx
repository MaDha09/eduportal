import React, { useState } from "react";
import Searchbar from "./teacher/Searchbar";

import ParentInfo from "./parent/ParentInfo";

function Parent({ setClickedParent }) {
    const [searchQuery, setSearchQuery] = useState("");
  
    return (
      <>
        <div className="teacherRow1">
          <Searchbar onSearch={setSearchQuery} />
        </div>
        <div className="teacherRow2">
          <div className="teacherProfile">
                <ParentInfo
                    searchQuery={searchQuery}
                    setClickedParent={setClickedParent}
                />
          </div>
        </div>
      </>
    );
  }

export default Parent;

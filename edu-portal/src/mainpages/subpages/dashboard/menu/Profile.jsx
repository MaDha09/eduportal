import React, { useState } from "react";
import Searchbar from "./teacher/Searchbar";

import ProfileInfo from "./profile/ProfileInfo.jsx";

function Profile({ setClickedProfile }) {
    const [searchQuery, setSearchQuery] = useState("");
  
    return (
      <>
        <div className="teacherRow1">
          <Searchbar onSearch={setSearchQuery} />
        </div>
        <div className="teacherRow2">
          <div className="teacherProfile">
                <ProfileInfo
                    searchQuery={searchQuery}
                    setClickedStudent={setClickedProfile}
                />
          </div>
        </div>
      </>
    );
  }

export default Profile;
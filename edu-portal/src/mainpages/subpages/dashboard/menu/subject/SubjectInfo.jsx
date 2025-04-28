import React, { useEffect, useState } from "react";
import { supabase } from "../../../../../js/supabaseClient";


function SubjectInfo({ searchQuery, setClickedParent }) {
    const [parents, setParents] = useState([]);
  
    useEffect(() => {
      supabase
        .from("parentInfo")
        .select("lastname")
        .then(({ data, error }) => {
          if (error) {
            console.error("Error fetching parents:", error);
          } else {
            setParents(data); // Set the parents data
          }
        });
    }, []);
  
    // Filter parents based on the search query
    const filtered = parents.filter(parent =>
      parent.lastname?.toLowerCase().includes(searchQuery?.toLowerCase() || "")
    );
  
    return (
      <>
        <h6 className="mt-3 ms-3">Subject's List</h6>
        <div className="nameList mt-4">
          <ul className="w-full">
            {filtered.map((parent, i) => (
              <li
                key={i}
                className="lastName w-full cursor-pointer p-2 border-b"
                onClick={() => {
                  console.log("Clicked parent:", parent.lastname);
                  setClickedParent(parent.lastname);
                }}
              >
                {parent.lastname}
              </li>
            ))}
            {!filtered.length && (
              <li className="text-muted mt-2">No matching parents found.</li>
            )}
          </ul>
        </div>
      </>
    );
  }
  
  export default SubjectInfo;
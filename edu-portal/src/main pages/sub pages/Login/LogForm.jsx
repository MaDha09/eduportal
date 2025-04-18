import React, { useState } from "react";

import { supabase } from "../../../js/supabaseClient";

import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";

import "../../../css/main css/login/subpages/LogForm.css";

function LogForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
      
        try {
          const { data, error } = await supabase
            .from('admin') 
            .select('*')
            .eq('admin_username', username)
            .eq('admin_password', password) 
            .single();
      
          if (error || !data) {
            setError("Invalid username or password.");
          } else {
            alert("Success");
            setSuccess("Login successful!");
            console.log("User found:", data);
          }
        } catch (err) {
          setError("Something went wrong.");
        }
      };
  
    return (
      <div className="LogForm">
        <form onSubmit={handleLogin}>
          <div className="FormCon">
            <div className="LogInputs">
              <label className="me-3 mt-3">
                <FaUser />
              </label>
              <input
                type="text"
                placeholder="Username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
  
            <div className="LogInputs">
              <label className="me-3 mt-3">
                <RiLockPasswordFill />
              </label>
              <input
                type="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            {error && <p className="error-message mt-3">{error}</p>}
            {success && <p className="success-message mt-3">{success}</p>}
  
            <button className="mt-3 ms-4" type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default LogForm;
// utils/session.js

// Set username
export const setSessionUser = (username) => {
    sessionStorage.setItem("username", username);
  };
  
  // Get username
  export const getSessionUser = () => {
    return sessionStorage.getItem("username");
  };
  
  // Remove user
  export const clearSessionUser = () => {
    sessionStorage.removeItem("username");
  };
  
  // Clear all session data (optional)
  export const clearAllSession = () => {
    sessionStorage.clear();
  };
  
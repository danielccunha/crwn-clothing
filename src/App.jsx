import React, { useState, useEffect } from "react";

import Routes from "./routes";
import { auth, createUserDocument } from "./config/firebase";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      createUserDocument(user);
      return setCurrentUser(user);
    });
  }, []);

  return <Routes user={currentUser} />;
}

export default App;

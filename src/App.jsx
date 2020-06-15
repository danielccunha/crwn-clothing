import React, { useState, useEffect } from "react";

import Routes from "./routes";
import { auth } from "./utils/firebase";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      return setCurrentUser(user);
    });
  }, []);

  return <Routes user={currentUser} />;
}

export default App;

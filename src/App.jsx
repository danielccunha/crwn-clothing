import React, { useState, useEffect } from "react";

import Routes from "./routes";
import { auth, createUserDocument } from "./config/firebase";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    return auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        return userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }

      return setCurrentUser(userAuth);
    });
  }, []);

  return <Routes user={currentUser} />;
}

export default App;

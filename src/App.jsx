import React, { useEffect } from "react";
import { connect } from "react-redux";

import Routes from "./routes";
import { auth, createUserDocument } from "./config/firebase";
import { setCurrentUser } from "./store/ducks/user/actions";

function App({ setCurrentUser }) {
  useEffect(() => {
    return auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, [setCurrentUser]);

  return <Routes />;
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

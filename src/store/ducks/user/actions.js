import { createAction } from "typesafe-actions";

import { SET_CURRENT_USER } from "./types";

export const setCurrentUser = (user) => createAction(SET_CURRENT_USER, user);

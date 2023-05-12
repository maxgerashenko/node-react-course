// Contexts.js
import {createContext} from "react";

export interface CurrentUser {
  name: string;
}

export interface CurrentUserContext {
  currentUser: CurrentUser | null;
  setCurrentUser: (value: CurrentUser | null) => void;
}

export const CurrentUserContext = createContext<CurrentUserContext | null>(null);

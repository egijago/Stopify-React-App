import React, { useContext } from "react";
import { User } from "../lib/models/User";

export const AuthContext = React.createContext<User | undefined>(undefined);

export function useAuthContext(): User {
    const user = useContext(AuthContext)

    if (user === undefined) {
        throw new Error("You must login to access this feature!");
    }
    
    return user;
}
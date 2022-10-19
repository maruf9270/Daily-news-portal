import React, { createContext } from 'react';

// Creating context api for the entire project
export const UserContext = createContext()

const Contextapi = ({children}) => {
    return (
        <UserContext.Provider value={"how ate"}>
            {children}
        </UserContext.Provider>
    );
};

export default Contextapi;
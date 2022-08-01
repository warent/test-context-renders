import { createContext, useState } from "react";

const CoolContext = createContext({});

export const CoolContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    return (
        <CoolContext.Provider value={{ counter, incr: () => setCounter(val => val+1) }}>
            {children}
        </CoolContext.Provider>
    )
}

export default CoolContext;
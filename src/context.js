import React,{createContext, useContext, useState} from "react";
export const ScrollContext=createContext();
export function useScroll()
{
    return useContext(ScrollContext);
}
export function ScrollContextProvider({children})
{
    const [scrollTo,setScrollTo]=useState('Home');

    return(
        <ScrollContext.Provider value={{scrollTo,setScrollTo}}>
            {children}
        </ScrollContext.Provider>
    )
}
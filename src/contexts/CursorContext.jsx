import {createContext, useState} from 'react'


export const CursorContext = createContext(null)

export default function CursorContextProvider({
    children
}) {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
   <CursorContext.Provider value={{cursorVariant, setCursorVariant}}>
        {children}
    </CursorContext.Provider>
  )
}


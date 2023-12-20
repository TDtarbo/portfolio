import {createContext, useState} from 'react'
import PropTypes from 'prop-types';


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

CursorContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}


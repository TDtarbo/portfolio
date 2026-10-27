import {createContext, useState} from 'react'
import PropTypes from 'prop-types';


export const MenuBtnContext = createContext(null)

export default function MenuBtnContextProvider({
    children
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <MenuBtnContext.Provider value={{isOpen, setIsOpen}}>
        {children}
    </MenuBtnContext.Provider>
  )
}

MenuBtnContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}


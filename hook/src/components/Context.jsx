import React, { createContext, useState } from 'react'

export const appContext=createContext()
function Context({children}) {
    const[color,isColor]=useState(true)
    const[show,isShow]=useState(true)
  return (
    <appContext.Provider value={{color,isColor,show,isShow}}>
        {children}
    </appContext.Provider>
  )
}

export default Context
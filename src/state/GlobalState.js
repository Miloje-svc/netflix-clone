import { createContext, useReducer } from 'react'
import { GlobalReducer } from './GlobalReducer'

const initialState = {
  user: null,
}

export const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const logIn = (user) => {
    dispatch({
      type: "LOGIN",
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      user: state.user,
      logIn,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

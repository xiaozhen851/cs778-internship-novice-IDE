import React, { useState, useReducer, useContext } from 'react'
import { CLEAR_ALERT, DISPLAY_ALERT, SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR } from './action'
import reducer from './reducer'
import axios from "axios"

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const university = localStorage.getItem('location')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token:token,
  university: university,
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)
  const displayAlert = () => {
    dispatch({
      type: DISPLAY_ALERT,
    })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      })
    }, 3000)
  }
  const addUserToLocalStorage = ({ user, token, university }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('university', university)
  }

  const removeUserFromLocalStorage = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('university')
  }

  const setUpUser = async ({currentUser, endpoint, alertText}) => {
    dispatch({ type: SETUP_USER_BEGIN})
    try {
      const { data } = await axios.post(`/api/version1/auth/${endpoint}`, currentUser)
      const { user, token, location } = data
  
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText},
      })
  
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        setUpUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext,initialState }
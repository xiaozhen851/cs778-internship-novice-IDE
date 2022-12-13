import React from 'react'
import { CLEAR_ALERT, DISPLAY_ALERT, SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR } from './action'

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT){
        return{
            ...state,
            showAlert: true,
            alertType:"danger",
            alertText: 'Please provide all values!'
        }
    }
    if(action.type === CLEAR_ALERT){
        return{
            ...state,
            showAlert: false,
            alertType:"",
            alertText: ''
        }
    }
    if(action.type ===SETUP_USER_BEGIN){
        return{
            ...state,
            isLoading:true
        }
    }
    if(action.type === SETUP_USER_SUCCESS){
        return{
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          userLocation: action.payload.location,
          jobLocation: action.payload.location,
          isLoading: false,
          showAlert: true,
          alertType: 'success',
          alertText: action.payload.alertText,
        }

    }
    if(action.type === SETUP_USER_ERROR){
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertText: action.payload.msg,
            alertType: "danger"
        }
    }
    throw new Error(`no such action ${action.type}`)
}

export default reducer

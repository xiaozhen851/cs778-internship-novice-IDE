import React from 'react'
import { CLEAR_ALERT, DISPLAY_ALERT, SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR,TOGGLE_SIDEBAR,LOGOUT_USER,UPDATE_USER_BEGIN,UPDATE_USER_SUCCESS,UPDATE_USER_ERROR } from './action'
import { initialState } from './appContext'

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
          university :action.payload.university,
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
    if (action.type === TOGGLE_SIDEBAR){
        return{
            ...state,
            showSidebar: !state.showSidebar
        }
    }
    if(action.type === LOGOUT_USER){
        return {
            ...initialState,
            user: null,
            token: null,
            university: null,
        }
    }
    if(action.type === UPDATE_USER_BEGIN){
        return{
            ...state,
            isLoading : true,
            alertType:"success",
            alertText:"Loading"
        }
    }
    if(action.type === UPDATE_USER_SUCCESS){
        return{
            ...state,
            isLoading:false,
            token:action.payload.token,
            university:action.payload.university,
            user:action.payload.user,
            alertType:"success",
            alertText:"Update Successful",
            showAlert:true
        }
    }
    if(action.type === UPDATE_USER_ERROR){
        return{
            ...state,
            isLoading:false,
            alertType:"danger",
            alertText:action.payload.msg,
            showAlert:true
        }
    }
    throw new Error(`no such action ${action.type}`)
}

export default reducer

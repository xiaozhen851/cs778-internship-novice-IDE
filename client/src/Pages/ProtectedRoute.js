import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../Context/appContext'

const ProtectedRoute = ({children}) => { //children在这里是sharded layout 因为在app.js里面包裹这个component
    //如果user的话直接返回sharedlayout本来的
    const {user} = useAppContext()
    if(!user){
        return(
            <Navigate to = "/landing"></Navigate>
        )
    }
    return children
}

export default ProtectedRoute
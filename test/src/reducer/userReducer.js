import React from 'react'

const userReducer = (state=[], action) => {
 switch (action.type) {
    case "detailUsers":
        
        return [...action.users]
 
    default:
       return state
}}

export default userReducer
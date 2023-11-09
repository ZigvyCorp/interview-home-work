import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcums = () => {

    const location = useLocation()
    console.log('location: ', location);

    return (
        <div>Breadcums</div>
    )
}

export default Breadcums
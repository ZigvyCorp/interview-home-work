"use client"
import { fetchInitialData } from '@/stores/asyncActions'
import React from 'react'
import { useDispatch } from 'react-redux'
import Header from './Header'

function DefaultLayout({ children }) {

    const dispatch = useDispatch()

    React.useEffect(() => {

        dispatch(fetchInitialData())
    }, [])

    return (
        <div>
            <Header />
            <div className='px-[50px] py-[20px]' style={{
                backgroundColor: 'rgba(124, 15, 209, 0.05)'
            }}>
                {children}
            </div>

        </div>
    )
}

export default DefaultLayout
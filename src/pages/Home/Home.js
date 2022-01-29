import React from 'react'
import Blog from '../../components/Blog/Blog'
import Header from '../../components/Header/Header'

export default function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div style={{marginTop:40}}>
                <Blog />
            </div>
        </div>
    )
}

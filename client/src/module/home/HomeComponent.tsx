import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import MainLayout from '../layout/MainLayout'

const HomeComponent = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        navigate({ pathname: '/blog' }) 
    }, [])

    return (
        <MainLayout activeKey="">
            <></>
        </MainLayout>
    )
}

export default HomeComponent

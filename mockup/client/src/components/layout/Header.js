"use client"
import React from 'react'
import LOGO from '@/assets/images/LOGO.png'
import Image from 'next/image'
import { UserOutlined } from '@ant-design/icons'
import { PRIMARY_COLOR } from '@/styles/color'
import Link from 'next/link'

function Header() {

    const [isFixed, setIsFixed] = React.useState(false)

    React.useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 0) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        })

        return () => window.removeEventListener('scroll', () => { })
    }, [])

    return (
        <div className={`bg-white z-[100] px-[40px] py-[10px] flex items-center justify-between ${isFixed ? "shadow-[0_3px_10px_rgb(0,0,0,0.2)] fixed top-0 left-0 right-0" : ""}`}>
            <div>
                <Link href={"/"}>
                    <Image src={LOGO} alt="logo" style={{
                        width: '190px',
                        height: '40px',
                        objectFit: 'contain'
                    }} />
                </Link>
            </div>
            <div>
                <h3 className='font-serif uppercase text-[30px]' style={{
                    color: PRIMARY_COLOR
                }}>
                    BLOG
                </h3>
            </div>
            <div className='flex items-center'>
                <UserOutlined className='text-[26px] text-[#333] cursor-pointer' />
                <h1 className='ml-[20px] text-[#333]'>Nịnh Đức Thọ</h1>
            </div>
        </div>
    )
}

export default Header
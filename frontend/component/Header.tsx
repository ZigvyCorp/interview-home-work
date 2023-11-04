import Image from 'next/image'
import ZigvyLogo from '@/public/zigvy-logo.png'
import Avatar from '@/public/avatar.png'

export default function Header () {
    return (
        <header className="fixed-top w-100 px-3 px-sm-5 py-3 bg-white shadow-sm ">
            <div className="position-relative d-flex w-100 justify-content-between align-items-center">
                <Image src={ZigvyLogo} width={50} height={50} alt="logo" className="rounded-1 border border-1 border-light-gray"/>
                <div className="position-absolute w-100 text-center">
                    <h2 className="align-content-center font-weight-bolder m-0 fw-semibold fs-4">Blogs</h2>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <Image src={Avatar} width={40} height={40} alt="logo" className="rounded-circle"/>
                    <p className="fw-semibold d-none d-sm-block  m-0">Khanh Nguyen</p>
                </div>
            </div>
      </header>
    )
}

import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <p className="text-center text-white">&copy; {new Date().getFullYear()} | Powered by Nguyen Ngoc Hoai.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
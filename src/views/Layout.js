import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
const Layout = ({children}) => {
    return (
        <div className='container-fluid'>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;
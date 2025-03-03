import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Alphabet from '..//../pages/Alphabet/Alphabet'
function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Alphabet />
            <Footer />
        </div>
    );
}

export default Layout;

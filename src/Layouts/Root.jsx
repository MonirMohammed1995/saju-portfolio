import React from 'react-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <header className='flex justify-center'>
                <Navbar></Navbar>
            </header>
            <main className='flex justify-center'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;
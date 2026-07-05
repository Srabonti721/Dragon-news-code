import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header.jsx/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-4'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default Home;
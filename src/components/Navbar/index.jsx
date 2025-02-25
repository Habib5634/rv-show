'use client'
import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const btn = [
        {
            id:'home',
            title:'Home',
        },
        {
            id:'directions',
            title:'Directons',
        },
        {
            id:'discount',
            title:'Dicount Coupons',
        },
        {
            id:'gallery',
            title:'Gallery',
        },
        {
            id:'dealers',
            title:'Dealers',
        },
        
    ];
    const handleScroll =(id)=>{
        const element = document.getElementById(id);
        if (element) {
            // Scroll to the section if it exists
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className={`sticky top-0 z-30 transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-50' : ''}`}>

        <div className={` container mx-auto h-32 flex justify-between items-center px-5  `}>
            <img onClick={()=>handleScroll('home')} src="/assets/logo.png" alt="logo" className='cursor-pointer h-[159px] w-[159px]]' />

            <div className='hidden lg:flex items-center gap-6 text-2xl font-semibold font-nunito text-white'>
                {btn?.map((btn, i) => (
                    <button onClick={()=>handleScroll(btn.id)} className='' key={i}>{btn.title}</button>
                ))}
            </div>

            <Sidebar />
        </div>
                    </div>
    );
};

export default Navbar;
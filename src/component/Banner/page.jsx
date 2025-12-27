"use client"
import React from 'react';
import Title from '../Title/page';
import { useRouter } from 'next/navigation';
const Banner = () => {
    const router = useRouter()
    const handlebtn = () => {
        const password = prompt("Enter your password")
        if(password == "1234"){
            router.push('/dashboard')
        }
    }
    return (
        <div className='items-center flex flex-col justify-center  bg-linear-60 from-blue-500 to-blue-200 m-10 rounded-2xl p-20'>
            <h1 className='text-4xl font-semibold text-white'>Welcome to Dev-Story</h1>
            <button onClick={handlebtn} className="px-6 py-3 m-3 bg-linear-90 from-red-200 text-white border-red-400 border cursor-pointer font-medium text-xl  rounded-2xl">Share Story</button>

        </div>
    );
};

export default Banner;
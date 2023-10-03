import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function NotFound() {
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center text-center gap-5 flex-col">
                <h1 className='font-medium md:text-4xl lg:text-6xl text-2xl text-black '>

                    I Have bad
                    news for you 😟
                </h1>

                <p className='md:text-base  text-sm text-black font-semibold '>
                    The page you are looking
                    For might be remove or is
                    temporary unavaible !
                </p>

                <Link to='/' className="inline-flex text-2xl font-bold text-black items-center gap-1 "> <AiOutlineArrowLeft/>Back to home </Link>

            </div>




        </>
    )
}

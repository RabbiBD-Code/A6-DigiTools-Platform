import React from 'react';

const StepsCard = () => {
    return (
       <div className='bg-[#F9FAFC] py-2'>
         <div className='w-11/12 mx-auto my-20  space-y-10'>
            <div className='text-center space-y-5'>
                <h2 className='font-extrabold text-5xl'>Get Started in 3 Steps</h2>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-between gap-10'>
                <div className='border-2 border-gray-100 text-center pt-10 relative space-y-4 rounded-2xl pb-15 p-5 bg-white'>
                <img className='mx-auto' src="/src/assets/user.png" alt="" />
                <h2 className='font-bold text-2xl'>Create Account</h2>
                <p className='text-[#101727]'>Sign up for free in seconds. No credit card required to get started.</p>
                <div className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] inline-block rounded-full absolute right-2 top-1'>
                    <p className='text-sm text-white w-7 h-7 flex justify-center items-center'>01</p>
                </div>
            </div>
            <div className='border-2 border-gray-100 text-center pt-10 relative space-y-4 rounded-2xl pb-15 p-5 bg-white'>
                <img className='mx-auto' src="/src/assets/package.png" alt="" />
                <h2 className='font-bold text-2xl'>Choose Products</h2>
                <p className='text-[#101727]'>Browse our catalog and select the tools that fit your needs.</p>
                <div className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] inline-block rounded-full absolute right-2 top-1'>
                    <p className='text-sm text-white w-7 h-7 flex justify-center items-center'>02</p>
                </div>
            </div>
            <div className='border-2 border-gray-100 text-center pt-10 relative space-y-4 rounded-2xl pb-15 p-5 bg-white'>
                <img className='mx-auto' src="/src/assets/rocket.png" alt="" />
                <h2 className='font-bold text-2xl'>Start Creating</h2>
                <p className='text-[#101727]'>Download and start using your premium tools immediately.</p>
                <div className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] inline-block rounded-full absolute right-2 top-1'>
                    <p className='text-sm text-white w-7 h-7 flex justify-center items-center'>03</p>
                </div>
            </div>
            </div>
        </div>
       </div>
    );
};

export default StepsCard;
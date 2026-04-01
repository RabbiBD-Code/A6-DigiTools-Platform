import React from 'react';

const Ratting = () => {
    return (
        <div className='bg-linear-to-r mb-20 from-[#4F39F6] to-[#9514FA] text-white'>
            <div className='flex justify-around items-center py-14'>
                <div className='pr-4 md:pr-52 border-r-2 text-center mb-2'>
                    <h1 className='text-5xl font-extrabold space-y-2'>50K+</h1>
                    <p className='text-md'>Active Users</p>
                </div>
                <div className='pr-4 md:pr-52 border-r-2 text-center mb-2'>
                    <h1 className='text-5xl font-extrabold space-y-2'>200+</h1>
                    <p className='text-md'>Premium Tools</p>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='text-5xl font-extrabold '>4.9</h1>
                    <p className='text-md'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Ratting;
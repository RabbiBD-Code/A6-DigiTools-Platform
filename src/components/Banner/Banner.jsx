import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col text-center md:flex-row md:text-left gap-5 justify-between items-center mt-16 mb-20'>
            <div className='space-y-5 flex-1'>
                <button className='flex gap-2 bg-[#E1E7FF] rounded-full px-2.5'>
                    <img className='object-contain' src="/src/assets/Group 5.png" alt="" />
                    <p className='bg-linear-to-r from-[#9514FA] to-[#4F39F6]  bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </button>
                <h1 className='text-5xl md:text-7xl font-bold text-[#101727]'>Supercharge Your <br /> <span className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>Digital Workflow</span></h1>
                <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>
                <div className='flex gap-4'>
                    <button className='btn rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white'>Explore Products</button>
                    <div className='btn btn-outline btn-primary rounded-full ]'>
                        <img src="/src/assets/Play.png" alt="" />
                        Watch Demo
                    </div>
                </div>
            </div>
            <div className=''>
                <img src="/src/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
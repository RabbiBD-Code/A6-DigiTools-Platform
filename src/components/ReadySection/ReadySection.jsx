import React from 'react';

const ReadySection = () => {
    return (
        <div className='bg-linear-to-l from-[#9514FA] to-[#4F39F6]'>
            <div className='w-11/12 mx-auto text-center py-15 space-y-4'>
                <h1 className='text-5xl md:text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
                <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
                </p>
                <div className='flex justify-center gap-4'>
                    <button className='btn rounded-full bg-white text-black'>Explore Products</button>
                    <div className='btn btn-outline text-white rounded-full ]'>
                        Watch Dem
                    </div>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default ReadySection;
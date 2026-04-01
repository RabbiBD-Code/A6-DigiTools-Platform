import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData)
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className='text-center space-y-5'>
                <h1 className='font-extrabold text-5xl '>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
            {
                pricingData.map((pricing, id) => <PricingCard key={id} pricing={pricing}/>)
            }
            </div>
        </div>
    );
};

export default PricingOption;
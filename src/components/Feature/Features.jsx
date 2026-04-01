import { Check, CheckCheck } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
            <div className='flex gap-3 text-red-700'>
                <span className='text-green-300'><Check/></span>
                <p className='text-[#627382] text-sm'> {feature}</p>
            </div>
    );
};

export default Features;
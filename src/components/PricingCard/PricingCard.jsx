import React from 'react';
import PricingFeature from '../PricingFeatures/PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, description, tag, price, features} = pricing;
   
    return (
        <div className='mx-auto'>
            <div className={`card w-96 bg-base-300 ${tag === 'popular'&& 'bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white'} shadow-sm`}>
                <div className="card-body">
                    {
                        tag === 'popular'&& <span className='badge badge-warning rounded-full absolute -top-4 right-32'>Most Popular</span>
                    }
                    <div className="space-y-5">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p>{description}</p>
                        <span className="text-xl"><span className='font-extrabold'>${price}</span>/mo</span>
                    </div>
                    
                    {
                                features.map((feature, id) => <PricingFeature key={id} feature={feature}/>)
                            }
                    <div className="mt-6">
                        <button className={`btn btn-primary btn-block ${tag === 'popular'&& 'bg-white text-black'}`}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
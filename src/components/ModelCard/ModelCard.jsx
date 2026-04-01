import React from 'react';
import Features from '../Feature/Features';
import { toast } from 'react-toastify';

const ModelCard = ({model, carts, setCarts}) => {
    const {name, description, price, img, features, tagType} = model;

const handleCards = () =>{
    const isExit = carts.find(cart => cart.id === model.id)

    if(isExit){
        toast.error("Already card exit")
        return;
    }
    setCarts([...carts, model])
    toast.success('Add to cart')
}


    return (
        <div className=''>
            <div className='border-2 flex flex-col h-full rounded-2xl p-4 space-y-2 border-gray-300 relative'>
                <div className='border border-gray-100 rounded-full w-15 h-15'>
                    <img className='w-15 h-15 rounded-full p-2' src={img}  alt="" />
                </div>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p className='text-[#627382]'>{description}</p>
                <p> <span className='font-bold text-2xl'>${price}</span>/mo</p>
                <div className='flex-1'>
                    {
                    features.map((feature, index) => <Features feature={feature} key={index}/>)
                }
                </div>
                <button onClick={handleCards} className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full text-white'>Buy Now</button>
                <div className='absolute top-1 right-1  text-sm px-4 rounded-full'>
                    <p className= {`px-4 rounded-full text-white ${tagType === 'popular'? 'bg-green-300' : tagType === 'new'? 'bg-purple-400' : 'bg-amber-200'}`}>{tagType}</p>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;
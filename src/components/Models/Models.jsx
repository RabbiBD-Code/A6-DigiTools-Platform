import React, { use } from 'react';
import ModelCard from '../ModelCard/ModelCard';

const Models = ({modelsPromise, carts, setCarts}) => {
    const models = use(modelsPromise)
    return (
        <div className='w-11/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10'>
            {
                models.map(model => <ModelCard carts={carts} setCarts = {setCarts} key = {model.id} model={model}/>)
            }
        </div>
    );
};

export default Models;
import { Cross } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const Carts = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([])
        toast.success("Payment to success");
    }

    const handleDelete = (cart) => {
        const filterCard = carts.filter((c) => c.id !== cart.id)
        console.log()
        setCarts(filterCard)
        toast.error("Remove to cart!");
    }

    return (
        <div>
            <div className='w-11/12 mx-auto border-2 border-gray-200 px-10 py-8 rounded-2xl my-10'>
                <p className='font-bold text-xl mb-5'>Your Cart</p>
                {
                    carts.length === 0 ? (<p className="text-center text-2xl p-5">Cart is empty</p>) :
                        (
                            <>
                                {
                                    carts.map(cart =>
                                        <div className='border-2 border-amber-50 rounded-2xl mb-6 bg-gray-200' key={cart.id}>

                                            <div className='flex justify-between items-center p-5'>
                                                <div className='flex items-center gap-2'>
                                                    <div className='rounded-full bg-amber-500 overflow-hidden'>
                                                        <img className='w-10 h-10' src={cart.img} alt="" />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl font-semibold'>{cart.name}</h2>
                                                        <p className='text-sm'>${cart.price}/mo</p>
                                                    </div>
                                                </div>
                                                <button onClick={() => handleDelete(cart)} className='text-sm text-red-500'>Remove</button>
                                            </div>
                                        </div>)
                                }
                                <div className='flex justify-between px-4 pb-3'>
                                    <p className='font-bold'>Total:</p>
                                    <p className='font-bold text-xl'>$ {totalPrice}</p>
                                </div>
                                <button onClick={handlePayment} className='btn w-full font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed To Checkout</button>
                            </>
                        )
                }

            </div>
        </div>
    );
};

export default Carts;
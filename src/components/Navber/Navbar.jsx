import React from 'react';
import Carts from '../Carts/Carts';

const Navbar = ({carts}) => {
    console.log(carts.length)
    return (
        <div className=''>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='font-semibold'><a>Features</a></li>
                            <li className='font-semibold'><a>Pricing</a></li>
                            <li className='font-semibold'><a>Products</a></li>
                            <li className='font-semibold'><a>Testimonials</a></li>
                            <li className='font-semibold'><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-semibold'><a>Features</a></li>
                        <li className='font-semibold'><a>Pricing</a></li>
                        <li className='font-semibold'><a>Products</a></li>
                        <li className='font-semibold'><a>Testimonials</a></li>
                        <li className='font-semibold'><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className='relative'>
                        <img src="/src/assets/products/shopping-cart.png" alt="" />
                        <div className='text-white text-sm font-semibold  absolute -top-4 left-3 '>
                            <p className={`${carts.length ? 'bg-red-700 w-5 h-5 rounded-full flex items-center justify-center ' : 'hidden'}`}>{carts.length}</p>
                        </div>
                    </div>
                    <h3 className='font-semibold'>Login</h3>
                    <a className="btn rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] font-bold text-white bg-transparent">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
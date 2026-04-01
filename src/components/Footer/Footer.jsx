import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black mb-20'>
            <div className='w-11/12 mx-auto'>

                <footer className="footer text-[#ffffff] sm:footer-horizontal p-10">
                    <div className='space-y-4'>
                        <h2 className='text-5xl font-bold'>DigiTools</h2>
                        <p>Premium digital tools for creators, <br /> professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</p>
                    </div>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Sociak Link</h6>
                        <div className='flex gap-2'>
                            <span className='w-10 h-10 flex justify-center items-center rounded-full bg-white'><img src="/src/assets/Instagram.png" alt="" /></span>
                            <span className='w-10 h-10 flex justify-center items-center rounded-full bg-white'><img src="/src/assets/Facebook.png" alt="" /></span>
                            <span className='w-10 h-10 flex justify-center items-center rounded-full bg-white'><img src="/src/assets/fi_5968958.png" alt="" /></span>
                        </div>
                    </nav>
                </footer>
                <footer className="footer flex justify-between text-white border-base-300 border-t px-10 py-4">
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube,  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/foodie_alt.png'
import '../../../css/footer.css'
const Footer = () => {
    return (
        <div className='footer pt-20'>
            <div className="grid grid-cols-7 align-middle px-32 pb-10">
                <div className="col-span-2 w-7/12">
                    <img src={logo} alt="" />
                </div>
                <div className="col-span-3 my-auto">
                    <form className='flex bg-white rounded-full justify-between align-middle'>
                        <input placeholder='Subscribe to newsletter' className='rounded-full mx-5 search_field w-full' type="text"/>
                        <button className ='bg-red-600 font-medium px-5 py-1 m-1 rounded-full' type='submit'>Subscribe</button>
                    </form>
                </div>
                <div className="col-span-2 my-auto mx-auto px-5">

                    <Link to='/' className='inline-block mx-1 p-4 rounded-full bg-gray-800 hover:bg-red-600'><FaInstagram style={{color: 'white'}} /></Link>
                        
                    <Link to='/' className='inline-block mx-1 p-4 rounded-full bg-gray-800 hover:bg-red-600'><FaFacebook style={{color: 'white'}} /></Link>

                    <Link to='/' className='inline-block mx-1 p-4 rounded-full bg-gray-800 hover:bg-red-600'><FaYoutube style={{color: 'white'}} /></Link>

                    <Link to='/' className='inline-block mx-1 p-4 rounded-full bg-gray-800 hover:bg-red-600'><FaTwitter style={{color: 'white'}} /></Link>

                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 px-32">
                <div className="">
                    <h1 className="font-bold pb-2 uppercase text-white">Book a table</h1>
                    <p className="text-gray-400">Save time with proper planning</p>
                    <h1 className='text-3xl font-bold text-amber-400'>0092 7894 465</h1>
                </div>
                
                <div className="">
                    <h1 className="font-bold uppercase pb-2 text-white">opening hours</h1>
                    <p className="text-gray-400">Mon – Thu: 10:00 Am – 01:00 Am</p>
                    <p className="text-gray-400">Saturday: 11:00 Am To Midnight</p>
                    <p className="text-gray-400">Sunday: <span className="tex-red-600">Kitchen Closed</span> </p>
                    
                </div>

                <div className="">
                    <h1 className="font-bold pb-2 uppercase text-white">usefull links</h1>
                    <div className="flex flex-col">
                        <Link to='/' className="text-gray-400">Wishlist</Link>
                        <Link to='/' className="text-gray-400">Privacy Policy</Link>
                        <Link to='/' className="text-gray-400">Order Tracking</Link>
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold uppercase pb-2 text-white">Address</h1>
                    <p className="text-gray-400">123 New Yourk, 10001</p>
                    <p className="text-gray-400">contact@web.com</p>
                    <p className="text-gray-400">0012 23222 55</p>
                </div>
            </div>
            <p className="text-center py-6 text-gray-600">Copyright &copy; 2022 Foodie. Designed by MohammadArif</p>
        </div>
    );
};

export default Footer;
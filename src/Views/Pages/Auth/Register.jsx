import React from 'react';
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

const Register = ({loginState}) => {
    return (
        <div className="mx-auto auth-form w-full">
            <input type="text" placeholder="Enter Your Name" className='w-full my-2' />
            <input type="text" placeholder="Enter Your Email" className='w-full my-2' />
            <input type="text" placeholder="Enter Your Password" className='w-full my-2' />
            <button className='bg-amber-400 w-full my-2 py-2'>Register</button>


            <p className="text-center">Already have a account? <button onClick={() => loginState('login')}>Login</button> </p>


            <div className="mx-auto block text-center my-3">
                <p className="py-2 uppercase">Sing in using</p>

                <button
                style={{color: 'rgb(40, 40, 40)', fontSize: '1.6em'}} >
                    <BsFacebook />
                </button>

                <button 
                style={{color: 'rgb(40, 40, 40)', marginLeft: '10px', fontSize: '1.6em'}}>
                    <BsGithub />
                </button>

                <button 
                style={{color: 'rgb(40, 40, 40)', marginLeft: '10px', fontSize: '1.6em'}}>
                    <BsGoogle />
                </button>
            </div>
        </div>
    );
};

export default Register;
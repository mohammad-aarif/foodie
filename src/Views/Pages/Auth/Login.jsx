import React from 'react';
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import useFirebase from '../../../hooks/useFirebase';

const Login = ({loginState}) => {
    const {emailSignIn} = useFirebase()
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        emailSignIn(data.email, data.password)
    }
    
    
    return (
        <div className="mx-auto auth-form w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-red-600 py-1 text-center">{errors.exampleRequired && 'This field is required'}</p>
                <input {...register("email", { required: true })} type="text" placeholder="Enter Your Email" className='w-full my-2' />
                <input {...register("password", { required: true })} type="text" placeholder="Enter Your Password" className='w-full my-2' />
                <p className="font-bold text-gray-600">Forget Password?</p>
                <button type='submit' className='bg-amber-400 w-full my-2 py-2'>Login</button>
            </form>

            <p className="text-center">Not a Member? <button onClick={() => loginState('register')}>Register</button> </p>


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

export default Login;
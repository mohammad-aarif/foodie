import React from 'react';
import { useState } from 'react';
import { GiExitDoor } from "react-icons/gi";
import authImage from '../../../assets/images/auth-img.png';
import logo from '../../../assets/images/foodie.png';
import '../../../css/auth.css'
import Login from './Login';
import Register from './Register';

const Auth = ({view}, ref) => {
    const [authState, setAuthState] = useState('login')
    
    return (
        <div className='px-32 py-10'>
            <button onClick={() => view(false)}  className='text-red-600'><GiExitDoor style={{display: 'inline-block'}}/> close</button>

            <div className="grid grid-cols-2">
                <div className="col-span-1 px-14">
                    <img src={authImage} alt="" />
                </div>
                <div className="col-span-1 login bg-gray-50 p-5 shadow-lg w-3/5 m-auto">
                    <img src={logo} className='w-32 py-5 mx-auto' alt="" />
                    {
                        authState === 'login'
                        ? <Login loginState={setAuthState}/>
                        : <Register loginState={setAuthState}/>
                    }
                    
                </div>
            </div>
        </div>
    );
};
const AuthLogin = React.forwardRef(Auth)

export default AuthLogin;
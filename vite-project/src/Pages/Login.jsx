import './Login.css'
import React from 'react';
import Input from '../Components/Input/Input.jsx'

function Login() {
    return (
        <>
            <div className='container'>
                <div className='form'>
                    <h2>Login</h2>
                    <p>Welcome back ! Please login to continue</p>
                    <form action="">
                        <div className='username'>
                            <Input
                                label="Username or Email"
                                type="text"
                                placeholder="Enter your username or email"
                            />
                        </div>
                        <div className='password'>
                            <Input
                                label="Password"
                                type="Password"
                                placeholder="Enter your password"
                            />
                        </div>
                    </form>
                </div>
                <div className='image'>
                    <img src="/image2.png" alt="login" />
                </div>
            </div>
        </>

    );

}
export default Login;
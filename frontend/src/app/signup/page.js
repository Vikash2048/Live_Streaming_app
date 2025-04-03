"use client"
import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const signup = () => {
    const google_client_id = "853655992653-9oallu762np98umoapc5mqth1quk7md5.apps.googleusercontent.com";

    const handleSuccess = (response) => {
        console.log("Login Success:", response)
    }

    const handleError = () => {
        console.log('Login Failed');
    }

    return (
        <GoogleOAuthProvider clientId={google_client_id} >
            <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
                <a className='flex my-8 '
                    href='/'>
                    <img src='/video.png' width={40} alt='video_icon' />
                    <p className='text-3xl font-light pl-4'> Stream Fusion </p>
                </a>

                <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                    {/* Heading */}
                    <h1 className='text-2xl mb-6 text-center'> Create an account </h1>

                    {/* Name Input */}
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'> Name </label>
                        <input
                            type='name'
                            placeholder='Enter your name'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Email Input */}
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'> Email </label>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Password Input */}
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'> Password </label>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Login Button */}
                    <button className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200 cursor-pointer'>
                        Sign up
                    </button>

                    {/* Divider */}
                    <div className='flex items-center my-6'>
                        <div className='flex-grow border-t border-gray-300'></div>
                        <span className='mx-4 text-sm text-gray-500'>or continue with</span>
                        <div className='flex-grow border-t border-gray-300'></div>
                    </div>

                    {/* Google Login Buttons */}
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={handleError}
                    />

                    {/* Sign Up Link */}
                    <p className='text-sm text-center mt-6'>
                        Don't have an account?{' '}
                        <a href='/login' className='text-blue-600 hover:underline'>Login</a>
                    </p>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default signup
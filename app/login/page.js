'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/nav'; 
import Link from 'next/link';
import Footer from '../components/Footer';

export default function LoginForm() {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (<>
    <Navbar />
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white h-screen flex items-center justify-center bg-cover bg-opacity-70">
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '20px',
                    maxWidth: '400px',
                    margin: 'auto',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent black background for form container
                    borderRadius: '10px',
                    backdropFilter: 'blur(10px)', // Optional: adds a blur effect for more modern look
                }}
            >
                <h1 className="text-center text-2xl font-bold">Login</h1>

                {/* Name Input */}
                <label className="text-lg">
                    Name:
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 p-3 rounded-md w-full bg-opacity-20 text-white border border-gray-400 focus:outline-none"
                        required
                    />
                </label>

                {/* Password Input */}
                <label className="text-lg">
                    Password:
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-2 p-3 rounded-md w-full bg-opacity-20 text-white border border-gray-400 focus:outline-none"
                        required
                    />
                </label>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-4 py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-md focus:outline-none transition-all duration-300"
                >
                    Submit
                </button>

                <div className="text-center text-sm mt-4">
                    <p>Or sign in with</p>
                    <div className="flex justify-around mt-3">
                        {/* Google Button */}
                        <button
                            type="button"
                            className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-md w-32 justify-center"
                        >
                            <Image
                                src="/Google.svg"
                                alt="Google"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Google
                        </button>

                        {/* Facebook Button */}
                        <button
                            type="button"
                            className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-md w-32 justify-center"
                        >
                            <Image
                                src="/Facebook.svg"
                                alt="Facebook"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Facebook
                        </button>

                        {/* GitHub Button */}
                        <button
                            type="button"
                            className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-md w-32 justify-center"
                        >
                            <Image
                                src="/github.svg"
                                alt="GitHub"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            GitHub
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    );
}

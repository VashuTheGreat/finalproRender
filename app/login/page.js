'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/nav'; 
import Link from 'next/link';
import Footer from '../components/Footer';
import { useSession, signIn } from 'next-auth/react';

export default function LoginForm() {
    const { data: session } = useSession();

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white h-screen flex items-center justify-center bg-cover bg-opacity-70">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        padding: '20px',
                        maxWidth: '400px',
                        margin: 'auto',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        borderRadius: '10px',
                        backdropFilter: 'blur(10px)', 
                    }}
                >
                    <h1 className="text-center text-2xl font-bold">Login</h1>

                    <button
                        type="button"
                        className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-md w-32 justify-center mx-auto"
                        onClick={() => signIn("google", { callbackUrl: "/" })}                    >
                        <Image
                            src="/google.png"
                            alt="Google"
                            width={20}
                            height={20}
                            className="mr-2"
                        />
                        Google
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

import React from 'react';
import Image from 'next/image'; // Only if you're using Next.js
import Link from 'next/link';

const Navbar2 = () => {
  return (
    <div className="w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
<Image src="/logo.svg" alt="logo" width={200} height={60} />
      </Link>


      {/* signIN */}

      <div className="space-x-6">
        <Link href="/login" className="text-lg font-medium hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Vashu<span className="text-red-500">TheGreat</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Building smart solutions for modern problems. Explore my projects and feel free to connect.
          </p>
        </div>


{/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Skills or Tech */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Technologies</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Next.js / React</li>
            <li>Node.js / Express</li>
            <li>Unity / C#</li>
            <li>Python / ML</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect</h2>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </Link>
            <Link href="mailto:youremail@example.com" className="hover:text-white">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VashuTheGreat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

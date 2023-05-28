"use client";
// Simple Nav requirements
//  - Hostshare logo on left
//  - Search component in the middle
//  - placeholder user avatar and menu on right (non-functional)
//  - Category Selector
// Additional components which has to be extracted 
//  - Search
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <nav className='fixed w-full z-10 flex items-center justify-between px-6 py-4 bg-white shadow-md'>
            <Link href='/'>
                <Image src='/assets/logo.png' alt='Logo' width={150} height={150} />
            </Link>
        </nav>
    );
}

export default NavBar;

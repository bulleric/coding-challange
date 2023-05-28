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
                <div className='hidden md:block'>
                    <Image src='/assets/logo-desktop.png' alt='Logo' width={228} height={50} />
                </div>
                <div className='md:hidden'>
                    <Image src='/assets/logo-mobile.png' alt='Logo' width={50} height={50} />
                </div>
            </Link>
        </nav>
    );
}

export default NavBar;

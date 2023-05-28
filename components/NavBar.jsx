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
import UserAvatarButton from "./UserAvatarButton";

const NavBar = () => {
  return (
    <nav className="fixed w-full z-10 flex items-center justify-between px-6 py-3 bg-white shadow-md">
      <Link href="/">
        <div className="hidden md:block">
          <Image src="/assets/logo-desktop.png" alt="Logo" width={200} height={44} />
        </div>
        <div className="md:hidden">
          <Image src="/assets/logo-mobile.png" alt="Logo" width={40} height={40} />
        </div>
      </Link>
      <UserAvatarButton />
    </nav>
  );
};

export default NavBar;

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
    <nav className="fixed w-full z-10 top-0 left-0 right-0 z-10 px-6 sm:px-12 py-3 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div>
            <div className="hidden md:block">
              <Image src="/assets/images/logo-desktop.png" alt="Logo" width={200} height={44} />
            </div>
            <div className="md:hidden">
              <Image src="/assets/images/logo-mobile.png" alt="Logo" width={40} height={40} />
            </div>
          </div>
        </Link>
        <UserAvatarButton />
      </div>
    </nav>
  );
};

export default NavBar;

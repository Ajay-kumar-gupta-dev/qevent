"use client";

import "../app/globals.css";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { TfiTicket } from "react-icons/tfi";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <nav className="drop-shadow-2xl flex items-center justify-between p-3 border-b border-slate-200 bg-slate-100 h-24">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={90}
            height={90}
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 font-semibold">

        <Link href="/" className="flex items-center gap-2 hover:text-primary hover:scale-105 transition">
          <HomeIcon />
          <p>Home</p>
        </Link>

        <Link href="/events" className="flex items-center gap-2 hover:text-primary hover:scale-105 transition">
          <CgProfile />
          <p>Events</p>
        </Link>

        <Link href="/artists" className="flex items-center gap-2 hover:text-primary hover:scale-105 transition">
          <PersonIcon />
          <p>Artists</p>
        </Link>

        <Link href="/tags" className="flex items-center gap-2 hover:text-primary hover:scale-105 transition">
          <TfiTicket />
          <p>Tags</p>
        </Link>

        <FaRegHeart className="text-xl cursor-pointer" />

        {/* ✅ Auth Buttons */}
        {session ? (
          <div className="flex items-center gap-3">
            {/* Optional: show user name */}
            <span className="text-sm text-gray-600">
              {session.user?.name}
            </span>

            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:opacity-80"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}   // ✅ IMPORTANT FIX
            className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md hover:opacity-80"
          >
            Log in
          </button>
        )}

      </div>
    </nav>
  );
};

export default Header;
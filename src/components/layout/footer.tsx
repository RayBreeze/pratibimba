import React from 'react'
import Link from 'next/link'
import { NextURL } from 'next/dist/server/web/next-url'
import { BsInstagram } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-rose-700 text-slate-300 mt-24 z-50">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-7 md:grid-cols-3">
        <div>
          <img src="/logo-white.svg" alt="Magazine Society Logo" className="w-30 h-auto" />
          <p className="text-base text-rose-50 italic opacity-80 font-[--notoSansBengali] mt-4">
            আমরা নিরাশার খনিতে স্বপ্ন খনন করি
          </p>
        </div>

        <div className="flex flex-col gap-3 ">
          <h3 className="text-white font-large text-xl">Explore</h3>
          <Link href="/About" className="hover:text-sky-500 transition cursor-pointer">About</Link>
          <Link href="/Archive" className="hover:text-sky-500 transition cursor-pointer">Archive</Link>
          <Link href="/Contact" className="hover:text-sky-500 transition cursor-pointer">Contact</Link>
          <Link href="/Gallery" className="hover:text-sky-500 transition cursor-pointer">Gallery</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium text-xl">Connect</h3>
          <div className="flex flex-row gap-5">
          <a href="https://www.instagram.com/pratibimba.official" className="hover:text-sky-500 text-2xl transition"><BsInstagram /></a>
          <a href="mailto:pratibimba.gcect@gmail.com" className="hover:text-sky-500 text-2xl transition"><MdEmail /></a>
          <a href="https://www.linkedin.com/company/gcectpratibimba" className="hover:text-sky-500 text-2xl transition"><BsLinkedin /></a>
            </div>
        </div>


      </div>

      <div className="border-t border-pink-200 text-center py-5 text-sm text-white font-medium">
        © 2026 Pratibimba. All rights reserved.
      </div>
    </footer>
  )
}

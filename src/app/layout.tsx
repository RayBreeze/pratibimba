import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StaggeredMenu from "../components/layout/StaggeredMenu";
import Image from "next/image";
import Footer from "@/components/layout/footer";
import { Noto_Sans_Bengali } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import footer from '@/components/layout/footer';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "700"],
});

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/About' },
  { label: 'Gallery', ariaLabel: 'View our gallery', link: '/Gallery' },
  { label: 'Archive', ariaLabel: 'View our archive', link: '/Archive' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/Contact' }
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/pratibimba.official' },
  { label: 'GitHub', link: 'https://github.com/RayBreeze/pratibimba' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/gcectpratibimba' }
];

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratibimba",
  description: "Official website of Pratibimba, the literary society of Government College of Engineering and Ceramic Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansBengali.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        <StaggeredMenu isFixed={true} items={menuItems} socialItems={socialItems} 
        menuButtonColor="#ff0000"
        openMenuButtonColor="#fd2424"
        changeMenuColorOnOpen={true}
        colors={['#fe5656', '#9a1313']} 
        accentColor="#fd2424" />
        <div className="flex items-center left-5 top-0 fixed z-50">
            <Image
              src="/logo.svg"
              alt=""
              width={120}
              height={120}
              objectPosition=""
              priority
            />
          </div>
        <div className="flex-1">
        {children}
          <ToastContainer position="top-right" />
        </div>
        <Footer />
      </body>
    </html>
  );
}

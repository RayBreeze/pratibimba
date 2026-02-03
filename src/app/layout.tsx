import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StaggeredMenu from "./StaggeredMenu";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/About' },
  { label: 'Gallery', ariaLabel: 'View our gallery', link: '/Gallery' },
  { label: 'Archive', ariaLabel: 'View our archive', link: '/Archive' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/Contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StaggeredMenu isFixed={true} items={menuItems} socialItems={socialItems} 
        menuButtonColor="#ff0000"
        openMenuButtonColor="#fd2424"
        changeMenuColorOnOpen={true}
        colors={['#fe5656', '#9a1313']} 
        accentColor="#fd2424" />
        <div className="flex items-center left-5 top-2 fixed z-50">
            <Image
              src="/logo.svg"
              alt=""
              width={120}
              height={120}
              objectPosition=""
              priority
            />
          </div>
          <div className="min-h-screen flex items-center justify-center text-red-600 font-regular text-xl">Page is under Active Development Phase ;3</div>
        {children}
      </body>
    </html>
  );
}

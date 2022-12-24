import React, { useState } from "react";
import Link from "next/link";
import { cls } from "../libs/client/utils";
import { useRouter } from "next/router";
import Head from "next/head";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
  seoTitle?: string;
  brandLogo?: boolean;
  searchIcon?: boolean;
  shoppingCart?: boolean;
  hamburgerMenu?: boolean
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
  seoTitle,
  brandLogo,
  searchIcon,
  shoppingCart,
  hamburgerMenu
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Sunny&apos;s&nbsp;Express</title>
      </Head>
      <div className="bg-white static w-full h-12 justify-between text-lg px-3 font-medium  text-gray-800 border-b top-0 flex items-center z-[-1] ">
        <Link legacyBehavior href={`/`}>
          <div className="flex space-x-3 items-center">
            <span className="text-xl font-bold cursor-pointer">Sunny&apos;s&nbsp;Express</span>
            <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Shop</span>
          </div>
        </Link>
        <div className="flex space-x-3 items-center">
          <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Our Store</span>
          <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Chats</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer hover:text-white hover:bg-black hover:rounded-2xl hover:p-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <Link legacyBehavior href={`/cart`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer hover:text-white hover:bg-black hover:rounded-2xl hover:p-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </Link>
          <Link legacyBehavior href={`/enter`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer hover:text-white hover:bg-black hover:rounded-2xl hover:p-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </Link>
          <button className={cls("lg:hidden ")} onClick={() => { setIsOpen(!isOpen) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer hover:bg-black hover:text-white hover:rounded-2xl hover:p-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>


      <div className={cls("z-10 absolute bg-white w-2/3 min-h-full right-0 transition-all ease-in duration-500", isOpen ? "" : "translate-x-[100%] hidden")}>
        <div className="flex flex-col w-full pl-3">
          <span className="pl-4 pt-8 text-2xl gray">Shop</span>
          <span className="pl-6 pt-1 text-lg cursor-pointer hover:border-2 hover:border-dashed hover:font-bold">All</span>
          <span className="pl-6 pt-1 text-lg cursor-pointer hover:border-2 hover:border-dashed hover:font-bold">Green</span>
          <span className="pl-6 pt-1 text-lg cursor-pointer hover:border-2 hover:border-dashed hover:font-bold">Bouquet</span>
          <span className="pl-6 pt-1 text-lg cursor-pointer hover:border-2 hover:border-dashed hover:font-bold">Seasonal</span>
          <span className="pl-6 pt-1 text-lg cursor-pointer hover:border-2 hover:border-dashed hover:font-bold">Package</span>
          <span className="pl-4 pt-3 text-xl">Our Store</span>
          <span className="pl-4 pt-2 text-xl">Chat</span>
        </div>
      </div>

      <div className={cls("top-0 static pt-0 z-[-10]", hasTabBar ? "pb-24" : "")}>{children}</div>
    </div>
  );
}
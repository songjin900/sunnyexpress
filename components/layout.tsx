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
        <title>{seoTitle} | Sunnys Express</title>
      </Head>
      <div className="bg-white w-full h-12 justify-between text-lg px-10 font-medium  text-gray-800 border-b top-0 flex items-center  ">
        <div className="flex space-x-3 items-center">
          <span className="text-xl font-bold">Sunny&apos;s&nbsp;Express</span>
          <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Shop</span>
          {/* <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Green</span>
            <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Bouquet</span>
            <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Seasonal</span> */}
        </div>
        <div className="flex space-x-3 items-center">
          <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Our Store</span>
          <span className="hidden p-1 text-sm lg:block hover:bg-black hover:text-white hover:rounded-2xl hover:p-1 hover:cursor-pointer">Chats</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointerz">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointerz">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>

          <button className={cls("lg:hidden ")} onClick={() => { setIsOpen(!isOpen) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* {canGoBack ? (
          <button onClick={onClick} className="absolute left-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        ) : null}
        {title ? (
          <span className={cls(canGoBack ? "mx-auto" : "", "")}>{title}</span>
        ) : null} */}
      </div>


      <div className={cls("lg:hidden absolute left-[30%] w-full bg-red-200 z-10 flex items-start ", !isOpen ? "hidden" : "")}>
        <div className="flex flex-col bg-white w-full pl-3 min-h-screen">
          <span className="pl-4 pt-8 text-2xl gray">Shop</span>
          <span className="pl-8 pt-1 text-lg">All</span>
          <span className="pl-8 pt-1 text-lg">Green</span>
          <span className="pl-8 pt-1 text-lg">Bouquet</span>
          <span className="pl-8 pt-1 text-lg">Seasonal</span>




          <span className="pl-4 pt-3 text-xl">Our Store</span>
          <span className="pl-4 pt-2 text-xl">Chat</span>
        </div>
      </div>
      {/* <div className="fixed z-100 w-1/ bg-red-400 h-44"></div> */}

      <div className={cls(" top-0 pt-0 z-[-10]", hasTabBar ? "pb-24" : "")}>{children}</div>
      {/*       
      {hasTabBar ? (
        <nav className="bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between text-xs">
          <Link legacyBehavior href="/">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span>Flowers</span>
            </a>
          </Link>
          <Link legacyBehavior href="/cart">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/cart"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <span>My Cart</span>
            </a>
          </Link>
          <Link legacyBehavior href="/chats">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/chats"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>채팅</span>
            </a>
          </Link>
          <Link legacyBehavior href="/streams">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/streams"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <span>SunnysExpress</span>
            </a>
          </Link>
          <Link legacyBehavior href="/profile">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/profile"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span>나의 캐럿</span>
            </a>
          </Link>
        </nav>
      ) : null} */}
    </div>
  );
}
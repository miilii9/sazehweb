import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="sticky top-0 w-full shadow-md flex justify-center bg-[#FAFAFA] z-10">
      <div className="w-full h-20 flex items-center justify-between md:container md:px-0 sm:px-4">
        <div className="flex w-1/2">
          {/* Nav Logos */}
          <div className="flex items-center sm:w-28">
            <div className="ml-2">
              <Image src="/pannelimages/logo.svg" width={90} height={90} />
            </div>
            <div>
              <Image src="/pannelimages/logo1.svg" width={70} height={70} />
            </div>
          </div>
          {/* Nav Search */}
          <form class="md:flex sm:hidden items-center mr-8 w-full">
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border text-gray-900 text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  "
                placeholder="جستجو در سازه وب..."
                required
              />
            </div>
          </form>
        </div>
        {/* Nav Icons */}
        <div className="md:flex sm:hidden">
          <Link href="/pannel">
            <div className="mx-3">
              <Image src="/pannelimages/home.svg" width={25} height={25} />
            </div>
          </Link>
          <Link href="/pannel/wallet">
            <div className="mx-3">
              <Image src="/pannelimages/wallet.svg" width={25} height={25} />
            </div>
          </Link>
          <Link href="/pannel/messages">
            <div className="mx-3">
              <Image src="/pannelimages/bell.svg" width={25} height={25} />
            </div>
          </Link>
          <Link href="/pannel/profile">
            <div className="mx-3">
              <Image src="/pannelimages/user.svg" width={25} height={25} />
            </div>
          </Link>
          <div className="mx-3">
            <Image src="/pannelimages/out.svg" width={25} height={25} />
          </div>
        </div>
      </div>
    </nav>
  );
}

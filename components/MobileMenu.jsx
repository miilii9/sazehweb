import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function MobileMenu() {
  return (
    <div className="sticky bottom-0 md:hidden sm:flex bg-white shadow-xl h-16 justify-around items-center">
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
  );
}

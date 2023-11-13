import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
export default function SessionsDisclosure() {
  return (
    <div className="mb-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg  bg-[#fafafa] px-4 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span> شرط</span>
              <div className="flex ">
                <div className="flex items-center">
                  <Image src="/pannelimages/clock.svg" height={16} width={16} />
                  <span className="mr-1">۱۵ m</span>
                </div>
                <div className="flex mr-2 items-center">
                  <Image src="/pannelimages/paper.svg" height={16} width={16} />
                  <span className="mr-2">قسمت ۱</span>
                </div>
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                <Link href="/sessions">
                  <div className="flex justify-between">
                    <span> شرط</span>
                    <div>
                      <span className="mr-2">قسمت ۱</span>
                    </div>
                  </div>
                </Link>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

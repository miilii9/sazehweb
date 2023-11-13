"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Tab } from "@headlessui/react";
export default function WalletPage() {
  return (
    <main className="w-full  flex justify-center  mt-5">
      <div className="w-full md:container flex sm:flex-col md:flex-row px-4 ">
        {/* Dashboard My Courses */}
        <div className="w-full px-6 pt-8 pb-4 bg-[#F8F7FA] rounded-2xl md:h-auto sm:h-screen md:order-1 sm:order-last">
          <div className="flex justify-between mb-8">
            <div className="border-b-2 pb-2 border-mainOrange">تراکنش ها</div>
          </div>
          {/*Wallet Transactions */}
          <div className=" w-full h-10">
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul
                class="flex -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block text-sm p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    برداشت از حساب
                  </button>
                </li>
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="settings-tab"
                    data-tabs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    فاکتور های پرداخت
                  </button>
                </li>
                <li role="presentation">
                  <button
                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="contacts-tab"
                    data-tabs-target="#contacts"
                    type="button"
                    role="tab"
                    aria-controls="contacts"
                    aria-selected="false"
                  >
                    واریز به حساب
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Dashboard Wallet */}

      </div>
    </main>
  );
}

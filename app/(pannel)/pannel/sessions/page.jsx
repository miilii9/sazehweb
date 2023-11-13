"use client";
import React from "react";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import SessionsDisclosure from "../../../../components/SessionsDisclosure";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function SessionsPage() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8,];
  const [fullScreen, setFullScreen] = useState(false);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <main className="w-full flex justify-center bg-[#FAFAFA] pt-10">
      <div className="w-full flex sm:flex-col md:flex-row px-4 ">
        <div className="sm:w-full md:w-2/6 md:h-[828px]  sm:mb-10 md:mb-0 px-6 bg-mainOrange py-6 overflow-y-scroll md:order-1 sm:order-last">
          {num.map((number) => (
            <SessionsDisclosure />
          ))}
        </div>
        <div
          className={`${fullScreen
            ? "ease-in-out transition-all duration-200 backdrop-blur-3xl w-full h-screen absolute opacity-1 top-0 right-0 bottom-0 z-50 flex justify-center items-center"
            : "order-2 sm:w-full md:w-4/6 bg-slate-100 sm:items-center justify-center items-center flex md:mb-0 overflow-hidden sm:mb-14 relative ease-in-out transition-all duration-200 "
            }`}
        >
          <div className="flex justify-center w-full">

            <div className="rotate-90 overflow-hidden bg-gray-200 h-[830px] mx-4">
              <Document
                file={"/js.pdf"}
                onLoadSuccess={onDocumentLoadSuccess}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Page
                  wrap
                  style={{ width: "100%", height: "auto" }}
                  size="A4"
                  pageNumber={pageNumber}
                />
              </Document>
            </div>
            <div className=" flex justify-center  items-center absolute md:bottom-8 sm:bottom-8">


              <button
                className=" p-1 bg-slate-200 rounded-full"
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                <Image src="/pannelimages/right.svg" width={20} height={20} />
              </button>
              <div className="mx-4 flex items-center">
                <p className="ml-2">
                  صفحه {pageNumber || (numPages ? 1 : "--")} از{" "}
                  {numPages || "--"}
                </p>
                <div
                  className="text-mainOrange cursor-pointer px-2 py-1 rounded-xl border border-mainOrange hover:text-white hover:bg-mainOrange"
                  onClick={() => setFullScreen(!fullScreen)}
                >
                  {fullScreen ? "بستن" : "نمایش "}
                </div>
              </div>
              <button
                className=" p-1 bg-slate-200 rounded-full"
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                <Image src="/pannelimages/left.svg" width={20} height={20} />
              </button>


            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

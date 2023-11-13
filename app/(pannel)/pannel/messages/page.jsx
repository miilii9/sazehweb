import React from "react";
import Message from "@/components/Message";

export default function MessagesPage() {
  const num = [1, 2, 3, 4, 5, 6];
  return (
    <main className="w-full flex justify-center bg-[#FAFAFA] px-3 py-5 ">
      <div className="w-full md:container flex flex-col ">
        {/* Messages */}
        {num.map((number) => (
          <Message />
        ))}
      </div>
    </main>
  );
}

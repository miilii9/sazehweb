import React from "react";
import Coursenav from "./Coursenav";

export default function layout({ children }) {
  return (
    <div dir="rtl">
      <Coursenav />
      {children}
    </div>
  );
}

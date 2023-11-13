"use client";

import StepForm from "@/ClientComponents/StepForm";
import Navigation from "../ClientComponents/Navigation";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import toast, { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()


export default function RootLayout({ children }) {
  const [showLogin, setShowLogin] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html dir="rtl" lang="fa-IR">
      <head>
        <link rel="icon" type="image/x-icon" href="/group.png" />
        <title>سازه وب</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {mounted && (
            <>
              <Toaster position="top-center" reverseOrder={false} />
              <Navigation showLogin={showLogin} setShowLogin={setShowLogin} />
              {showLogin ? <StepForm showLogin={showLogin} setShowLogin={setShowLogin} /> : null}
              {children}
            </>
          )}
        </QueryClientProvider>

      </body>
    </html>
  );
}

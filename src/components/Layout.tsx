// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-backgroundPrimary text-textPrimary">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto p-4 md:p-6">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

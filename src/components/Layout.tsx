import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-gray-300">
      <Header />
      <main className="max-w-4xl mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

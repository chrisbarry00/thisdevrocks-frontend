import React from "react";
import AnimatedLink from "../components/AnimatedLink";

const NotFound = () => {
  return (
    <section className="pt-20 text-center space-y-4">
      <h1 className="text-6xl font-bold text-primaryAccent">404</h1>
      <p className="text-2xl text-textSecondary">Page not found.</p>
      <AnimatedLink to="/" label="← Back to Home" />
    </section>
  );
};

export default NotFound;

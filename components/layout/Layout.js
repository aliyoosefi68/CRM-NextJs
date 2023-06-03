import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>HiElementor CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://hielementor.com" target="_blank" rel="noreferrer">
          HiElementor
        </a>{" "}
        Next.js CRM project
      </footer>
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router";
import Header from "../../../widgets/header/header";
import Footer from "../../../widgets/footer/footer";

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="max-w-[85%] m-auto">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

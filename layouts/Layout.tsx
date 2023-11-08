import React, { ReactNode, useEffect } from "react";
import Head from "next/head";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { baseUrl } from '@/config/appConfig';
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props): JSX.Element => {

  useEffect(() => {
    document.body.classList.add("w-screen");
    document.body.classList.add("h-screen");
    document.body.classList.add("bg-gray-100");
    document.body.classList.add("dark:bg-gray-900");
  });


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={`${baseUrl}/img/favicon.png`} type="image/x-icon" />
      </Head>
      <ToastContainer />
      <Header />

      <div className="full">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

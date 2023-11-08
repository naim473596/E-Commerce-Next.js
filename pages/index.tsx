import React from "react";
import Head from 'next/head'
import { baseUrl } from "@/config/appConfig";

import Layout from "@/layouts/Layout"
import TopSlider from "@/components/Home/TopSlider";
import Categorys from "@/components/Home/Categorys";
import NewArrival from "@/components/Home/NewArrival";
import WebFetchers from "@/components/Home/WebFetchers";
import Offers from "@/components/Home/Offers";


const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>No.1 E-Commerce</title>
      </Head>

      {/* Top Banner */}
      <TopSlider />
      {/* Top Banner */}
      
      {/* Main Start */}

      <div className="w-full pt-24">
      <WebFetchers />
      </div>

      <div className="w-full pt-24">
        <Offers />
      </div>

      <div className="w-full pt-24">
         <Categorys />
      </div>

      <div className="w-full pt-24">
        <NewArrival />
      </div>


      {/*  Main End  */}

    </Layout>
  );
}

export default HomePage;
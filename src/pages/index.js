import Head from "next/head";
import Advertisment from "../../components/Advertisment";
import Categories from "../../components/Categories";
import Createser from "../../components/Createser";
import Description from "../../components/Description";
import Header from "../../components/Headers/Header";
import Imagerela from "../../components/Imagerela";
import Lastsection from "../../components/Lastsection";
import Ticket from "../../components/Ticket";
import VisionGlobe from "../../components/VisionGlobe";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZOMO WEB APP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Header />
      {/* Header */}
      <Description />
      {/* Categories */}
      <Categories />
      {/* Tickets */}
      <Ticket />
      {/* Create User */}
      <Createser />
      {/* Vision */}
      <VisionGlobe />
      {/* Advertisment */}
      <Advertisment />
      {/* Last Section */}
      <Lastsection />
      <Imagerela />
    </>
  );
}

import TitlePage from "@/components/pageComponents/TitlePage";
import Link from "next/link";
import React from "react";

const Home = () => {
  return <>
    <TitlePage title="Home"/>
    <Link href="/blog">Blog</Link>
  </>
};

export default Home;

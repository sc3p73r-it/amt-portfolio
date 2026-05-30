"use client";

import { Layout } from "antd";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";

const { Content } = Layout;

export default function PortfolioShell() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#0a0e17" }}>
      <Header />
      <Content style={{ paddingTop: 64 }}>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Certifications />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  );
}

"use client";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import Order from "./_components/Order";
import Selling from "./_components/Selling";
import InstantCoffee from "./_components/InstantCoffee";
import Testimonial from "./_components/Testimonials";
import Footer from "./_components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    // Initialize AOS only in the browser
    AOS.init({});
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Explore />
      <Order />
      <Selling />
      <InstantCoffee />
      <Testimonial />
      <Footer />
    </>
  );
}

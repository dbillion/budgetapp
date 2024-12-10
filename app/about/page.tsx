import React from "react";
import { AboutCarousel } from "@/components/about-carousel";
import { AboutFocus } from "@/components/about-focus";
import { Header } from "@/components/header";

export default function AboutPage() {
    return <>
    <Header/>
    <AboutFocus/>
    <AboutCarousel/>
    </>
  }
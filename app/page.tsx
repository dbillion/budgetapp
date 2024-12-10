import React from "react";
import { Header } from "@/components/header";
import { ValueProposition } from "@/components/value-proposition";
import { SupportingTalks } from "@/components/supporting-value";
import { ProductShow } from "@/components/productShow";
import { ProductTestimonials } from "@/components/productTestimonials";
import { IntroHero } from "@/components/intro-hero";

export default function Home() {
  return (
    <>

<Header />
    <Header />
    <IntroHero/>
    <SupportingTalks/> 
    <ValueProposition/>
    <ProductShow />
    
    <ProductTestimonials/>


    </>
   
  );
}

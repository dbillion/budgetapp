"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function SupportingTalks() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Dont delay to budget that money"
        revealText="Track and multiply your income"
      >
        <TextRevealCardTitle>
          The earliest time to plant
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        A tree is  20 years ago, You have the best opportunity to start now
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

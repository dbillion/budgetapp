"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function ValueProposition() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            Effortlessly master your money with our intuitive <br />
            budget app that turns financial chaos into crystal-clear savings.
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
      One tap<span className="text-red-500">, total control:  </span> 
        <span className="text-red-500">: track, plan, </span>.
        and crush your financial goals.
      </MaskContainer>
    </div>
  );
}

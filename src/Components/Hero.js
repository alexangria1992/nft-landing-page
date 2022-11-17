import React from "react";
import Button from "./Button";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <>
      <div className="bg-emerald-700 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto bg-violet-600 ">
          <div className="flex flex-col gap-8 text-center items-center md:text-left md:items-start">
            <h1 className="text-5xl text-center md:text-left md:text-8xl font-primary font-semibold text-primary">
              Discover{" "}
              <span className="text-secondary underline decoration-solid">
                Rare 3D Collections
              </span>{" "}
              in the{" "}
              <span className="text-secondary underline decoration-solid">
                World
              </span>
            </h1>
            <p className="text-primary md:text-xl">
              The largest 3D NFT marketplace authentic and truly unique digital
              creation. Create yout own NFT dream gallery
            </p>
            <div className="flex justify-between w-3/4 ">
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl semibold">$278M</h1>
                <p className="text-sm md:text-base">Trading Volume</p>
              </div>
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl semibold">$300M</h1>
                <p className="text-sm md:text-base">Art World</p>
              </div>
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl semibold">$1.8M</h1>
                <p className="text-sm md:text-base">Total Users</p>
              </div>
            </div>
            <div>
              <Button text="Join Now" size="lg" variant="primary-outline" />
            </div>
          </div>
          <div className="bg-red-600 hidden md:block ">
            <Spline
              scene="https://prod.spline.design/aGZfgto9xC0mPfR2/scene.splinecode"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

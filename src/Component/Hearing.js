import React from "react";

export default function Hearing() {
  return (
    <div className="container mx-auto h-full max-w-[1024px] ">
      <div className="flex gap-3 justify-center  xl:mx-auto mx-3 pt-2 md:flex-row flex-col">
        <div className="md:w-8/12 w-full">
          <div className="flex justify-between px-7 py-4 bg-[#F5F5F5] border-b border-[#000]">
            <text className="text-xs italic text-black">Hearing</text>
            <h3 className="text-sm text-[#C7C4C4] font-bold">X</h3>
          </div>
          <p className="p-4 text-sm text-[#787070] font-bold uppercase border-b border-[#BEB7B7]">
            Results
          </p>
          <div className="flex flex-col ml-2">
            <div className="flex justify-between gap-10 py-2 border-b border-[#BEB7B7]">
              <p className="text-sm font-bold text-[#434141]  w-[15%]">
                Traditional
              </p>
              <div className="w-[50%]">
                <div className="flex justify-between mb-2">
                  <strong className="text-sm text-[#434141] font-bold">
                    Hearing Basic
                  </strong>
                  <p className="text-sm text-[#434141] font-light">Standard</p>
                </div>
                <h5>
                  <p className="text-xs text-[#787070]">
                    Hearing loss requires report from evaluation by an
                    audiologist . . .{" "}
                  </p>
                </h5>
              </div>
              <div className="w-7 h-7 px-2 rounded-full bg-gray-400 border-2 border-gray"></div>
            </div>
            <div className="flex justify-between gap-10 py-2 border-b border-[#BEB7B7]">
              <p className="text-sm font-bold text-[#434141] w-[15%]">Custom</p>
              <div className="w-[50%]">
                <div className="flex justify-between mb-2">
                  <strong className="text-sm text-[#434141] font-bold">
                    Hearing Basic
                  </strong>
                  <p className="text-sm text-[#434141] font-light"> J.gill</p>
                </div>
                <h5>
                  <p className="text-xs text-[#787070]">
                    Hearing loss requires report from evaluation by an vet . . .
                  </p>
                </h5>
              </div>
              <div className="w-7 h-7 px-2 rounded-full bg-gray-400 border-2 border-gray"></div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9F9] px-4 py-11 md:w-4/12  w-full border-l border-black min-h-screen">
          <p className="text-[#787070] font-bold uppercase mb-7">Filters</p>
          <div className="flex gap-5 py-2">
            <div className="w-[50%] text-sm font-bold text-black">Category</div>
            <h5 className="text-sm text-[#A29F9F] font-bold">all</h5>
          </div>
          <div className="flex gap-5 py-2">
            <div className="w-[50%] text-sm font-bold text-black">
              Created by
            </div>
            <h5 className="text-sm text-[#A29F9F] font-bold">Everyone</h5>
          </div>
          <div className="flex gap-5 py-2">
            <div className="w-[50%] text-sm font-bold text-black">
              Recommendation
            </div>
            <h5 className="text-sm text-[#A29F9F] font-bold">All</h5>
          </div>
        </div>
      </div>
      <div className="lg:mx-auto mx-3">
        
      <button className="bg-[#7BAFE2] w-full p-3 rounded-mu text-xl text-white uppercase mt-3  xl:mx-auto rounded-md">
        Close
      </button>

      </div>
    </div>
  );
}

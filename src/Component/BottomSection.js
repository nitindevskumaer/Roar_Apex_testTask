import React, { useState } from "react";
export default function BottomSection() {
  const [isTimelineSelected, setIsTimelineSelected] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div className="flex justify-between h-full bg-white py-3 gap-10 md:flex-row flex-col">
        <div className=" md:w-1/2 w-full h-[500px] text-6xl text-[#9F9999] flex justify-center items-center bg-[#F2F0F0] rounded-md">
          PDF
        </div>
        <div className=" md:w-1/2 w-full flex flex-col h-[500px]">
          <div className=" px-1 py-5 bg-[#F2F0F0] rounded-md h-full">
            <div className="flex gap-6 pl-2">
              <h3
                className={
                  isTimelineSelected
                    ? "w-1/4 border-b-2 border-red-600 text-sm font-bold px-3 py-2"
                    : " w-1/4 text-sm font-bold px-3 py-2"
                }
                onClick={() => setIsTimelineSelected(true)}
              >
                Notes Timeline
              </h3>
              <h3
                className={
                  !isTimelineSelected
                    ? "w-1/4 border-b-2 border-red-600 text-sm font-bold px-3 py-2"
                    : "w-1/4 text-sm font-bold px-3 py-2"
                }
                onClick={() => setIsTimelineSelected(false)}
              >
                Findings
              </h3>
            </div>
            <div className="my-3 mx-1 h-full px-2">
              {isTimelineSelected ? (
                <div className="bg-white">
                  <div className="px-10  ml-10 border-l border-gray-400 pb-3">
                    <div className="flex gap-2 pt-10 relative">
                      <div className="bg-white w-6 h-6 absolute left-[-50px]"></div>
                      <div className="w-3 h-3 absolute left-[-47px] top-11 rounded-full bg-gray-100 border-2 border-gray-400"></div>
                      <div className="flex justify-between w-full">
                        <h3 className="text-sm text-gray-400">
                          <strong className="text-black">Chelsea Hagon</strong>{" "}
                          edited the invoice
                        </h3>
                        <h4 className="text-sm text-gray-400">6 days ago</h4>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-10 relative">
                      <div className="bg-white w-6 h-6 absolute left-[-50px]"></div>
                      <div className="w-3 h-3 absolute left-[-47px] top-11 rounded-full bg-gray-100 border-2 border-gray-300"></div>
                      <div className="flex justify-between w-full">
                        <h3 className="text-sm text-gray-400">
                          <strong className="text-black">Chelsea Hagon</strong>{" "}
                          edited the invoice
                        </h3>
                        <h4 className="text-sm text-gray-400">6 days ago</h4>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-10 relative p-3 flex-col border border-gray-300 rounded-md">
                      <div className="bg-white w-6 h-6 absolute left-[-50px]"></div>
                      <img
                        src="/female.png"
                        className="w-8 absolute left-[-57px] rounded-full"
                        alt="Example"
                      />
                      <div className="flex justify-between w-full">
                        <h3 className="text-sm text-gray-400">
                          <strong className="text-black">Chelsea Hagon</strong>{" "}
                          Commented
                        </h3>
                        <h4 className="text-sm text-gray-400">3 days ago</h4>
                      </div>

                      <text className="text-sm text-gray-500">
                        called client, they reassured me the invoice would be
                        paid by the 25
                      </text>
                    </div>

                    <div className="flex gap-2 pt-10 relative">
                      <div className="bg-white w-6 h-6 absolute left-[-50px]"></div>
                      <div className="w-3 h-3 absolute left-[-47px] top-11 rounded-full bg-gray-100 border-2 border-gray-300"></div>
                      <div className="flex justify-between w-full">
                        <h3 className="text-sm text-gray-400">
                          <strong className="text-black">Chelsea Hagon</strong>{" "}
                          edited the invoice
                        </h3>
                        <h4 className="text-sm text-gray-400">6 days ago</h4>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-10 relative">
                      <div className="bg-white w-6 h-6 absolute left-[-50px]"></div>
                      <div className="w-3 h-3 absolute left-[-47px] top-11 rounded-full bg-gray-100 border-2 border-gray-300"></div>
                      <div className="flex justify-between w-full">
                        <h3 className="text-sm text-gray-400">
                          <strong className="text-black">Chelsea Hagon</strong>{" "}
                          edited the invoice
                        </h3>
                        <h4 className="text-sm text-gray-400">6 days ago</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-2 bg-white">
                  <div className="accordion">
                    <button
                      className="accordion-header w-full pt-3"
                      onClick={() => setIsOpen1(!isOpen1)}
                    >
                      <p className="text-sm font-semibold flex items-center text-[#434141] gap-3">
                        {isOpen1 ? (
                          <img
                            src="/Vector1.png"
                            alt="Example"
                            className="text-2xl font-light"
                          />
                        ) : (
                          <img
                            src="/Vector2.png"
                            alt="Example"
                            className="text-2xl font-light"
                          />
                        )}
                        <span className=" border-b w-full border-gray-300 pb-2 text-left">
                          Hearing Basic
                        </span>
                      </p>
                    </button>
                    {isOpen1 && (
                      <div className="accordion-content p-2 text-black text-sm font-light pl-10">
                        Positive Phalen's, Tinel's, Finkelstein's testing
                        identified during pre-placement medical examination
                        requires evaluation by a qualified physician (e.g. an
                        orthopedist or neurologist). The physician must provide
                        a statement addressing: a) the presence of any
                        functional limitations (please identify if present); b)
                        whether the performance of the [job class] essential job
                        functions (attached) poses a significantly increased
                        risk of injury, or aggravation or exacerbation of the
                        condition (if any). If yes, please identify the
                        potentially injurious job functions; and c) any work
                        restrictions or accommodations necessary to permit the
                        safe performance of essential job functions. Please
                        document the period of time that any restrictions or
                        accommodations are expected to remain in effect.
                      </div>
                    )}
                  </div>
                  <div className="accordion">
                    <button
                      className="accordion-header w-full pt-3"
                      onClick={() => setIsOpen2(!isOpen2)}
                    >
                      <p className="text-sm font-semibold flex items-center text-[#434141] gap-3">
                        {isOpen2 ? (
                          <img
                            src="/Vector1.png"
                            alt="Example"
                            className="text-2xl font-light"
                          />
                        ) : (
                          <img
                            src="/Vector2.png"
                            alt="Example"
                            className="text-2xl font-light"
                          />
                        )}
                        <span className=" border-b w-full border-gray-300 pb-2 text-left">
                          Hernia
                        </span>
                      </p>
                    </button>
                    {isOpen2 && (
                      <div className="accordion-content p-2 text-black text-sm font-light pl-10">
                        Accordion 2 text content
                      </div>
                    )}
                  </div>
                  <div className="accordion">
                    <button
                      className="accordion-header w-full pt-3"
                      onClick={() => setIsOpen3(!isOpen3)}
                    >
                      <p className="text-sm font-semibold flex items-center text-[#434141] gap-3">
                        {isOpen3 ? (
                          <img
                            src="/Vector1.png"
                            alt="Example"
                            className="text-2xl font-light"
                          />
                        ) : (
                          <img
                            src="/Vector2.png"
                            alt="Example"
                            className="text-2xl font-light"
                          />
                        )}
                        <span className=" border-b w-full border-gray-300 pb-2 text-left">
                          Two Pairs of Glasses
                        </span>
                      </p>
                    </button>
                    {isOpen3 && (
                      <div className="accordion-content p-2 text-black text-sm font-light pl-10">
                        Accordion 3 text content
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          {!isTimelineSelected && (
            <div className="p-3 bg-[#F2F0F0] mt-auto">
              <text className="text-xl text-[#565656]">Recommendation</text>
              <div className="mt-4">
                <select
                  value={selectedOption}
                  className="p-3 w-full bg-white text-xl text-[#919EAB] border-2 border-[#317FF6
              ] focus:border-[#317FF6]"
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option className="" value="">
                    Select an option...
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="lg:mx-auto mx-3 text-center">
        <button className="bg-[#7BAFE2] w-1/2 p-3 rounded-mu text-xl text-white uppercase mt-3  mx-auto rounded-md">
        SUBMIT
        </button>
      </div>
    </div>
  );
}

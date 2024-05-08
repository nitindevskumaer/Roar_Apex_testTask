import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Add Quill styles
import "quill-emoji/dist/quill-emoji.css"; // Add Quill Emoji styles


import "quill-emoji/dist/quill-emoji.js";
import BottomSection from "./BottomSection";

export default function ApplicantInfo() {
  const [value, setValue] = useState(
    "<h2><strong>Notes: 2024-02-26</strong></h2><br/> Gastropub chillwave lumbersexual umami lyft. Poke austin direct trade, marfa raclette letterpress actually. Chartreuse sriracha pinterest twee lo-fi try-hard. Meditation banh mi kitsch, prism organic hot chicken literally heirloom occupy af semiotics food truck.Aesthetic asymmetrical gluten-free, health goth shaman meh lumbersexual bespoke kinfolk helvetica vaporware fashion axe freegan. Pour-over hammock succulents disrupt chartreuse raw denim. Brunch aesthetic fanny pack subway tile everyday carry green juice neutra beard cray small batch poke yuccie plaid pork belly. Blue bottle 8-bit flexitarian hashtag. Scenester marfa yuccie snackwave edison bulb. VHS blog pickled scenester venmo hashtag lo-fi."
  );
  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image", "emoji"],
        ["clean"],
      ],
    },
    "emoji-toolbar": true,
    "emoji-textarea": false,
    "emoji-shortname": true,
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mx-auto p-1">
        <div className="flex">
          <h3 className="text-sm font-semibold w-16">Exam</h3>
          <h3 className="text-sm">Exam Name</h3>
        </div>
        <div className="flex">
          <h3 className="text-sm font-semibold w-16">Team</h3>
          <h3 className="text-sm">Team Name</h3>
        </div>
        <div className="flex">
          <h3 className="text-sm font-semibold w-20">Schedular</h3>
          <h3 className="text-sm">Schedular Name</h3>
        </div>
        <div className="flex">
          <h3 className="text-sm font-semibold w-16">ExamQA</h3>
          <h3 className="text-sm">ExamQA</h3>
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 p-2 px-3 rounded-md gap-3  lg:flex-row flex-col">
        <div className="p-3 px-5 bg-white lg:w-4/12 w-full">
          <p className="text-sm font-bold text-black mb-5">
            {" "}
            Applicant Information
          </p>
          <div className="flex section-1  gap-20">
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold w-16">Name</h2>
              <h2 className="text-sm font-semibold w-16">Age</h2>
              <h2 className="text-sm font-semibold w-16">Gender</h2>

              <h2 className="text-sm font-semibold w-16">Name</h2>
              <h2 className="text-sm font-semibold w-16">Ph Home</h2>
              <h2 className="text-sm font-semibold w-16">Ph work</h2>
              <h2 className="text-sm font-semibold w-16">Ph cell</h2>
              <h2 className="text-sm font-semibold w-16">Email</h2>
              <h2 className="text-sm font-semibold w-16">Address</h2>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-sm">Dean Winchester</h2>
              <h2 className="text-sm">24</h2>
              <h2 className="text-sm">Male</h2>

              <h2 className="text-sm">1/1/2024</h2>
              <h2 className="text-sm">(111) 333-2239</h2>
              <h2 className="text-sm">(111) 333-2239</h2>
              <h2 className="text-sm">(111) 333-2239</h2>
              <h2 className="text-sm">joe@email.com</h2>
              <h2 className="text-sm">111 Main St Anywhere USA 40339</h2>
            </div>
          </div>
        </div>
        <div className="p-3 px-5 bg-white  lg:w-4/12 w-full">
          <p className="text-sm font-bold text-black mb-5">
            Referral Information
          </p>
          <div className="flex section-1  gap-2">
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold w-fit">Evaluation Type</h2>
              <h2 className="text-sm font-semibold w-fit">Dept/Contract</h2>
              <h2 className="text-sm font-semibold w-fit">Employer</h2>
              <h2 className="text-sm font-semibold w-fit">Job Class</h2>
              <h2 className="text-sm font-semibold w-fit">Exam Type</h2>
              <h2 className="text-sm font-semibold w-fit h-10">Recruiter</h2>
              <h2 className="text-sm font-semibold w-fit">Deployment Country</h2>
              <h2 className="text-sm font-semibold w-fit">Deployment Center</h2>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-sm">Pre-Placement</h2>
              <h2 className="text-sm">Vectrus, a subsidiary of V2X</h2>
              <h2 className="text-sm">Male</h2>

              <h2 className="text-sm">LOGCAP V - Kuwait Task Order</h2>
              <h2 className="text-sm">Production Control Supervisor</h2>
              <h2 className="text-sm">
                Femae (49 and Older) [MOD] with Kuwait Visa
              </h2>
              <h2 className="text-sm">Nikki Cole-Rios</h2>
              <h2 className="text-sm">Kuwait</h2>
              <h2 className="text-sm">Greenville</h2>
            </div>
          </div>
        </div>
        <div className="p-3 px-5 bg-white  lg:w-4/12 w-full">
          <p className="text-sm font-bold text-black mb-5">Exam history</p>
          <div className="flex section-3  gap-10">
            <div>
              
            <div className="flex flex-col gap-3">
              <p className="text-sm">Referral Dates</p>
              <div className="flex justify-between">

              <div className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold w-16">Received</h2>
                <h2 className="text-sm font-semibold w-16">Initiated</h2>
                <h2 className="text-sm font-semibold w-16">Deployment</h2>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-sm">1/1/2024</h2>
                <h2 className="text-sm">1/1/2024</h2>
              </div>
              </div>
             <p className="mt-10">Recommendations</p> 
            </div>
            <div>
              <p className="text-sm font-semibold mt-3">Most Recent</p>
              <text className="text-sm pl-5">Most Recent</text>
            </div>

            </div>
            <div className="border-l boder-[#BFBFBF] pl-7">
              
              <div className="flex flex-col gap-3">
                <p className="text-sm">Exam Dates</p>
                <div className="flex justify-between">
  
                <div className="flex flex-col gap-3">
                  <h2 className="text-sm font-semibold w-16">Exam</h2>
                  <h2 className="text-sm font-semibold w-16">Received</h2>
                  <h2 className="text-sm font-semibold w-16">Complete</h2>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-sm">1/1/2024</h2>
                  <h2 className="text-sm">1/1/2024</h2>
                  <h2 className="text-sm">1/1/2024</h2>

                </div>
                </div>
               <p className="mt-10">RDQA</p> 
              </div>
              <div>
                <p className="text-sm mt-3">Initiated</p>

                <p className="text-sm mt-3">Deadline</p>
              </div>
  
              </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-2 pb-2 mt-3 rounded-md">
        <p className="text-md mb-2 font-bold">Exam Notes</p>
        <div className="bg-white">
          
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      /></div>

</div>
      <BottomSection />
    </div>
  );
}

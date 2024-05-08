import React from "react";
import Dashboard from "./Dashboard";

export default function Applicants() {
  const generateRows = () => {
    let rows = [];
    for (let i = 0; i < 6; i++) {
      rows.push(
        <tr key={i}>
          <td className="text-sm text-[#232222] p-2 font-normal" colSpan={2}>
            <div className="flex gap-5">
              <img src="/Star.svg" alt="Example" />
              <ul>
                <li className="text-sm font-bold text-black">
                  Text
                  <li className="text-sm font-normal text-black ml-5">Text</li>
                  <li className="text-sm font-normal text-black ml-5">Text</li>
                </li>
              </ul>
            </div>
          </td>
          <td className="text-sm text-[#232222] p-2 font-normal">Exam type</td>
          <td className="text-sm text-[#232222] p-2 font-normal">1/1/24</td>
          <td className="text-sm text-[#232222] p-2 font-normal">1/1/24</td>
          <td className="text-sm text-[#232222] p-2 font-normal">1/1/24</td>
          <td className="text-sm text-[#232222] p-2 font-normal">1/1/24</td>
          <td className="text-sm text-[#232222] p-2 font-normal">1/1/24</td>
          <td className="text-sm text-[#232222] p-2 font-normal">1/1/24</td>
          <td className="text-sm text-[#232222] p-2 font-normal">1/1/24</td>
          <td className="text-sm text-[#232222] p-2 font-normal">1/1/24</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="flex md:flex-row flex-col">
      <Dashboard />
      <div className="w-full">
        <div className="flex justify-between">
          <input
            placeholder="Search"
            className="px-9 py-3.5 text-sm text-[#B3ACAC] font-bold flex-1 focus:border-0 focus:outline-none"
          />
          <div className="border-l border-[##CFCFCF] h-5 my-3"></div>
          <p className="text-sm text-black p-2 py-3.5">John Doe</p>
        </div>
        <div className="container mx-auto bg-[#F3F2F2] pb-10 dashboard-container">
          <table className="w-full">
            <thead>
              <tr>
                <th
                  className="text-sm text-[#232222] p-2 font-normal"
                  colSpan={2}
                >
                  Applicant Name Employer Dept Contract
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  Exam Type
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  Date of Exam
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  Date Received
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  Date Complete
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  Initial Rec.
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  Final Rec
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  RDQA Deadline
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  Follow-Up
                </th>
                <th className="text-sm text-[#232222] p-2 font-normal">
                  Deployment Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={11}
                  className="text-sm text-[#232222] p-2 font-bold px-3 border-black border-b-2 bg-[#CCDDEF]"
                >
                  GROUP NAME
                </td>
              </tr>
              {generateRows()}
              <tr>
                {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Jane Smith</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">jane.smith@example.com</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">User</td> */}
              </tr>
              {/* Add more rows as needed */}
            </tbody>
            '
            <tfoot>
              <tr>
                <td
                  colSpan={11}
                  className="text-sm text-[#232222] p-2 font-bold px-3 border-black border-b-2 bg-[#CCDDEF]"
                >
                  GROUP NAME
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

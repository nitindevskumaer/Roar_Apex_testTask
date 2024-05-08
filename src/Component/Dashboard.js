import React from "react";

const Dashboard = ()=>{
    

    return(
        <div className="md:min-w-[18rem] md:w-[18rem] w-full flex md:flex-col flex-row py-3.5 md:px-11 px-3.5 bg-[#7BAFE2] md:min-h-screen h-full flex-wrap">
            <div className="w-20 h-20 bg-[#D9D9D9] md:mx-auto mx-0 mb-5">

            </div>
            <h1 className="text-xl text-white p-3">Dashboard</h1>
            <ul className="flex md:flex-col flex-row flex-wrap">
                <li className="text-xl text-white p-3">Category(45)</li>
                <li className="text-xl text-white p-3">Category(33)</li>
                <li className="text-xl text-white p-3">Category(n)</li>
                <li className="text-xl text-white p-3">Category(n)</li>
            </ul>
        </div>
    )
}

export default Dashboard
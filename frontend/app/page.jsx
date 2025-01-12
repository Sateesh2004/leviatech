"use client";

import { Search, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TrendingUp } from 'lucide-react';
export default function Dashboard() {
  const [count,setCount]= useState({
   
  })
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leviabackend-production.up.railway.app/api/patient-count');
        const data = await response.json();
       console.log(data) 
       setCount(data)
      } 
      catch(e){
        console.log(e)
      }
    };

    fetchData();  
  }, []); 
  return (
    <div className="min-h-screen bg-blue-100">
     <Header/>
     

      <main className="max-w-7xl  mx-auto px-4 py-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Statistics */}
          <div className="lg:col-span-2 space-y-4 ">
            {/* Search Bar */}
            <div className="relative shadow-sm ">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-300  shadow-sm">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                  <h3 className="text-gray-500 font-medium">Views</h3>
                  <span className="text-green-500 text-sm flex">
                    <div className="mr-1">
                    +11.01%</div>
                     <TrendingUp className="h-4 w-4" />
                     </span>
                 
                  

                </div>
                <p className="text-3xl font-bold mt-2">7,265</p>
              </div>
              <div className="bg-white p-6  border-2 border-gray-300 rounded-lg shadow-sm">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                  <h3 className="text-gray-500 font-medium">New Users</h3>
                  <span className="text-green-500 text-sm flex">
                    <div className="mr-1">
                    +15.03%</div>
                     <TrendingUp className="h-4 w-4" />
                     </span>
                </div>
                <p className="text-3xl font-bold mt-2">256</p>
              </div>
              <div className="bg-white p-6  border-2 border-gray-300 rounded-lg shadow-sm">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                  <h3 className="text-gray-500  sm:text-[16px] text-[14px] font-medium">Active Users</h3>
                  <span className="text-green-500 text-sm flex">
                    <div className="mr-1">
                    +6.08%</div>
                     <TrendingUp className="h-4 w-4" />
                     </span>
                </div>
                <p className="text-3xl font-bold mt-2">2,318</p>
              </div>
            </div>

            {/* Patient Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white relative shadow-black shadow-xl  col-span-1  rounded-lg text-white">
                
                <div className="absolute h-[50%] rounded-lg w-full bg-white top-0">
                <h3 className="text-4xl font-bold text-cyan-500 text-center leading-[110px]">
                  
                  {count.opdCount||"Loading"}
                  </h3>
                </div>
                <div className="absolute h-[50%] rounded-lg w-full bg-cyan-500 bottom-0">
                
                <p className="mt-2 text-center px-10 pt-2 font-semibold text-[12px] sm:text-[20px]">Total OPD patients</p>
                </div>
                
              </div>
              <div className="bg-white relative  shadow-black shadow-xl  col-span-1  rounded-lg text-white">
                
                <div className="absolute h-[50%] rounded-lg w-full bg-white top-0">
                <h3 className="text-4xl font-bold text-blue-900 text-center leading-[110px]">{count.ipdCount||"Loading"}</h3>
                </div>
                <div className="absolute h-[50%] rounded-lg w-full bg-blue-900 bottom-0">
         
                <p className="mt-2 text-center px-10 pt-2 font-semibold text-[12px] sm:text-[20px]">Total IPD patients</p>
                </div>
                
              </div>
              <div className="bg-white p-6 col-span-2  border-2 border-gray-300  rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Notifications</h3>
              <div >
                {[
                  { message: "You fixed a bug.", time: "Just now" },
                  { message: "New user registered.", time: "29 minutes ago" },
                  { message: "New user registered.", time: "59 minutes ago" },
                ].map((notification, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-800">{notification.message}</p>
                      <p className="text-gray-400 text-xs">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              
              
            </div>

            {/* Notifications */}
           
          </div>

          {/* Right Section - Employee Status */}
          <div className="space-y-4 p-5  border-2 border-gray-300 rounded-lg bg-white">
            <h2 className="text-2xl font-semibold">Employee Status</h2>
            <div className="grid grid-cols-3  gap-4">
              {[
                { title: "Present GDA", count: "04" },
                { title: "Present Staff", count: "04" },
                { title: "Present Doctors", count: "04" },
              ].map((status, index) => (
                <div key={index} className="bg-white border h-[140px]  relative  rounded-lg shadow-md">
                  <div className="flex flex-col h-[140px] justify-center items-center">
                    <div className=" h-[50%]  rounded-lg w-full bg-white "><h3 className="text-4xl text-center leading-[60px] font-bold text-blue-900">{status.count}</h3></div>
                    <div className=" h-[50%] rounded-lg w-full bg-blue-900 text-white "><p className="mt-2 font-medium text-center p-2">{status.title}</p></div>

                  </div>
                  
                  
                  
                  
                  
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
              Employ management
            </button>
          </div>
        </div>

        <div className="grid mt-7 grid-cols-7 md:grid-cols-7  gap-4">
          <div className="bg-white py-12 rounded-2xl border-2 border-gray-300"></div>
          <div className="bg-white py-12 rounded-2xl border-2 border-gray-300"></div>
          <div className="bg-white py-12 rounded-2xl border-2 border-gray-300"></div>
          <div className="bg-white py-12 rounded-2xl border-2 border-gray-300"></div>
          <div className="bg-white py-12 rounded-2xl border-2 border-gray-300"></div>
          <div className="bg-white py-12 rounded-2xl border-2 border-gray-300"></div>
          <div className="bg-white py-12 rounded-2xl border-2 border-gray-300"></div>
          
         
          
        </div>
       
      </main>
      <Footer/>

          

      
    </div>
  );
}

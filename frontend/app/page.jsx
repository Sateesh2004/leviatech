"use client";

import { LoaderCircle, Search, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer, toast } from 'react-toastify';
import { TrendingUp } from 'lucide-react';
export default function Dashboard() {
  const [popUp,setPopUp]=useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    patientType: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    try {
     
      const response = await fetch('https://leviabackend-production.up.railway.app/api/patients', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData), 
      });
  
      if (response.ok) {
        const data = await response.json();
        toast.success("Patient Added Successfully");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          patientType: '', // Reset patientType as well
        });
       

        setPopUp(false);  
      } else {
        const error = await response.json();
        toast.error(error.message);
        
      }
    } catch (err) {
      console.error('Error:', err);
      alert(err);
    }
  };
  
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
       <ToastContainer />
      {popUp && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-md shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">Add Patient Details</h2>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          placeholder="First Name"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="text"
          name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          placeholder="Last Name"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="text"
          name="phone"
            value={formData.phone}
            onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          placeholder="Date of Birth"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <select
          name="patientType"
          value={formData.patientType}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="" disabled selected>
            Select Patient Type
          </option>
          <option value="OPD">OPD</option>
          <option value="IPD">IPD</option>
        </select>
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950"
        >
          Submit
        </button>
        <button
          type="button"
          className="ml-2 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
          onClick={() => setPopUp(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
)}

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
                <h3 className="text-4xl font-bold text-cyan-500 flex justify-center items-center h-full text-center leading-[110px]">
                  
                {count.ipdCount||<div> <LoaderCircle className="animate-spin h-10 w-10" /></div>}
                  </h3>
                </div>
                <div className="absolute h-[50%] rounded-lg w-full bg-cyan-500 bottom-0">
                
                <p className="mt-2 text-center px-10 pt-2 font-semibold text-[12px] sm:text-[20px]">Total OPD patients</p>
                </div>
                
              </div>
              <div className="bg-white relative  shadow-black shadow-xl  col-span-1  rounded-lg text-white">
                
                <div className="absolute h-[50%] rounded-lg w-full bg-white top-0">
                <h3 className="text-4xl font-bold text-blue-900 text-center h-full leading-[110px] flex justify-center items-center border">{count.ipdCount||<div> <LoaderCircle className="animate-spin h-10 w-10" /></div>}</h3>
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
            <button onClick={()=>{setPopUp(!popUp)}} className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
              Add Patient
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
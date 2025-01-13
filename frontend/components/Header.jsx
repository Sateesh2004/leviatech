import React from 'react'
import { Search, Users, UserPlus, Activity, BedDouble } from "lucide-react";

const Header = () => {
  return (
    <header className=" bg-blue-100">
    <div className="max-w-7xl  mx-auto px-4 py-4 flex flex-col gap-2 sm:flex-row  items-center justify-between">
      <div className="flex items-center p-5 border rounded-xl   bg-white font-bold text-[24px] ">
      Narayana Nethralay
      </div>
      <div className="flex items-center md:flex-row flex-col  p-4 rounded-xl border bg-white sm:gap-6">
        <div className="mr-8">
        <h1 className="text-xl lg:block hidden font-bold text-[24px] text-gray-800">
        Narayana Eye Hospital
      </h1>
        </div>
        <div className="relative mr-8 border-b-2">
          <Search className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-400 h-7 w-7" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-lg  border-gray-200  w-64"
          />
        </div>
        <div className="flex text-center sm:text-right flex-col ">
          <span className="font-medium">Admin</span>
          <span className="text-sm text-gray-500">hello@samwhitaker.com</span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header

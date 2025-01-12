import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHome, FaUser, FaBell, FaCog, FaInfoCircle } from 'react-icons/fa';
import { Activity, House, LayoutDashboard, Settings, UsersRound } from 'lucide-react';

export default function Footer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center 2xl:fixed 2xl:bottom-0  w-full justify-between px-6 py-3 mt-2 bg-white text-white">
        {/* Logo */}
        <div className=" text-violet-700 text-[24px] font-extrabold ml-12">HNSMBL</div>

        {/* Menu for larger screens */}
        <div className="hidden m-auto  w-[60%] md:flex justify-evenly space-x-6">
         <div className='flex flex-col cursor-pointer items-center'>
      
         <LayoutDashboard className="text-3xl text-center text-black cursor-pointer" />
          <div className='text-black text-center  mt-2 '>    Dashboard</div>
         </div>
         <div className='flex flex-col cursor-pointer items-center'>
      
         <UsersRound className="text-3xl text-center text-black cursor-pointer" />
          <div className='text-black cursor-pointer text-center mt-2 '>   Patients Flows</div>
         </div>
         <div className='flex flex-col items-center'>
      
         <Activity className="text-4xl text-center text-blue-900 cursor-pointer" />
          <div className='text-center cursor-pointer text-blue-900  mt-2 '>    Staff Flows</div>
         </div>
         <div className='flex flex-col items-center'>
      
         <Settings className="text-3xl text-center text-black cursor-pointer" />
          <div className='text-black cursor-pointer text-center mt-2 '>    Settings</div>
         </div>
         <div className='flex flex-col items-center'>
      
         <House className="text-3xl text-center text-black cursor-pointer" />
          <div className='text-black cursor-pointer text-center mt-2 '>    Admin</div>
         </div>
        



       
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          {isSidebarOpen ? (
            <FiX
              className="text-3xl cursor-pointer text-black "
              onClick={toggleSidebar}
            />
          ) : (
            <FiMenu
              className="text-3xl text-black cursor-pointer "
              onClick={toggleSidebar}
            />
          )}
        </div>
      </nav>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-start space-y-6 p-6">
          <button
            className="text-2xl self-end mb-4"
            onClick={toggleSidebar}
          >
            <FiX />
          </button>
          <div className='flex flex-row '>
          <LayoutDashboard className="text-2xl text-white cursor-pointer mr-2 " /> <div className='text-[18px]'>Dashboard</div> 
          </div>
          
         
          <div className='flex flex-row '>
          <UsersRound className="text-2xl text-white cursor-pointer mr-2 " /> <div className='text-[18px]'>Patient Flows</div> 
          </div>
          <div className='flex flex-row '>
          <Activity className="text-2xl text-black cursor-pointer mr-2 " /> <div className='text-[18px]   text-black'>Staff Flows</div> 
          </div>
          <div  className='flex flex-row '>
          <Settings className="text-2xl text-white cursor-pointer mr-2 " /> <div className='text-[18px]'>Settings</div> 
          </div>
          <div className='flex flex-row '>
          <House className="text-2xl text-white cursor-pointer mr-2 " /> <div className='text-[18px]'>Admin</div> 
          </div>
         
          
        </div>
      </div>
    </>
  );
}

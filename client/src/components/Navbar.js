// import React from "react";
// import { CgGym } from 'react-icons/cg';
// import { FaRegClipboard } from 'react-icons/fa';
// import { BsFilePersonFill } from 'react-icons/bs';
// import {GoSignOut} from 'react-icons/go';
// import {GoSignIn} from 'react-icons/go';
// import { Link } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from "../hooks/useLogout";


// const Navbar = () => {
//    const { logout } = useLogout();
//    const { user } = useAuthContext();

//     const handleClick = () => {
//     logout();
//   };

//     return (
// <main class= "flex">
// {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//    <span class="sr-only">Open sidebar</span>
//    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//       <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//    </svg>
// </button> */}
// <aside id="default-sidebar" class="w-40 h-screen" aria-label="Sidebar">
//    <div class="h-full px-3 py-4 overflow-y-auto bg-blue-100 dark:bg-gray-800">
//       <ul class="space-y-2">
//          <li>
//             <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                 <BsFilePersonFill class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
//                <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
//             </a>
//          </li>
//          <li>
//             <Link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                <CgGym class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
//                <span class="ml-3">Workout</span>

//             </Link>
//          </li>
//          {/* <li>
//             <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//               <GoSignIn class="w-6 h-6 text-gray-500 transition duration-75  dark:text-gray-400 group-hover:text-gray-900  dark:group-hover:text-white"/>
//                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
//             </a>
//          </li>
//          <li>
//             <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//               <GoSignOut class="w-6 h-6 text-gray-500 transition duration-75  dark:text-gray-400 group-hover:text-gray-900  dark:group-hover:text-white"/>
//                <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
//             </a>
//          </li>
//          <li>
//             <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//               <FaRegClipboard class="w-6 h-6 text-gray-500 transition duration-75  dark:text-gray-400 group-hover:text-gray-900  dark:group-hover:text-white"/>
//                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
//             </a>
//          </li> */}
//       </ul>
//    </div>
// </aside>

// </main>
// );
// }

import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Track Meet</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { AiOutlineClose } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
// import NavbarIcon from "../layout/NavbarIcon";
// import NavBarSearch from "../layout/NavBarSearch";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { logout, selectCurrentUser } from "../../redux/fetchurs/auth/authSlice";

// const Navbar = () => {
//   const user = useAppSelector(selectCurrentUser);
//   const dispatch = useAppDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/dashboard", label: "Dashboard" },
//   ];
//   const handleLogout = () => {
//     const dispatch = useAppDispatch();
//     dispatch(logout());

//   };
//   return (
//     <>
//       <header className="sm:px-8 px-4  z-10 w-full bg-primaryy">
//         <nav className="flex justify-between items-center max-container">
//           <NavLink to="/">
//             <div className="mx-auto text-center  flex justify-center items-center">
//               <img
//                 src="https://i.ibb.co/nwWZjcV/Pngtree-mbe-plant-icon-rose-4047324.png"
//                 alt="logo"
//                 className="size-20"
//               />
//               <span className="text-textColor font-extrabold text-4xl -ml-5 accentFont ">
//                 Florist
//               </span>
//             </div>
//           </NavLink>
//           <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-textColor font-base secondaryyFont">
//             {navLinks.map((item) => (
//               <li key={item.label}>
//                 <NavLink to={item.href}>{item.label}</NavLink>
//               </li>
//             ))}
//             {user ? (
//               <button onClick={handleLogout}>logOut</button>
//             ) : (
//               <NavLink to="/login">Login</NavLink>
//             )}
//           </ul>
//           <div className="gap-2 flex justify-between items-center">
//             <div>
//               <NavBarSearch />
//             </div>
//             <div className="pt-5 -pb-10 hidden md:block">
//               <NavbarIcon />
//             </div>
//           </div>
//           <div
//             className="hidden max-lg:block cursor-pointer"
//             onClick={() => {
//               setIsMenuOpen(!isMenuOpen);
//             }}
//           >
//             {isMenuOpen ? (
//               <AiOutlineClose className="text-4xl" />
//             ) : (
//               <RxHamburgerMenu className="text-4xl" />
//             )}
//           </div>
//         </nav>
//       </header>
//       {isMenuOpen && (
//         <div className="">
//           <nav className="fixed top-20  right-0 bottom-0 lg:bottom-auto bg-primaryy  ">
//             <div
//               className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//               }}
//             ></div>
//             <ul className=" lg:hidden flex flex-col px-4 text-base secondaryyFont text-textColor text-left h-full ">
//               {navLinks.map((item) => (
//                 <li key={item.label}>
//                   <NavLink to={item.href}>{item.label}</NavLink>
//                 </li>
//               ))}
//               {user ? (
//                 <button onClick={handleLogout}>logOut</button>
//               ) : (
//                 <NavLink to="/login">Login</NavLink>
//               )}
//             </ul>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };
// export default Navbar;

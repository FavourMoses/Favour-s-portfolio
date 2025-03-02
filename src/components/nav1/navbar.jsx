// import { useState, useEffect } from "react";
// import "./navbar.css";
// import { Link, useLocation } from "react-router-dom";
// import star from "../../assets/star.png";
// // import Button from "../Button/Button";
// // import Backgroundless from "../Button/Backgroundless";
// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState("home");
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/" || location.pathname === "/home") {
//       setActiveItem("home");
//     } else if (location.pathname === "/about") {
//       setActiveItem("about");
//     } else if (
//       location.pathname === "/services" ||
//       location.pathname.includes("/services")
//     ) {
//       setActiveItem("services");
//     } else if (location.pathname === "/contact") {
//       setActiveItem("contact");
//     } else if (location.pathname === "/blog") {
//       setActiveItem("blog");
//     }
//     window.scrollTo(0, 0);
//   }, [location]);

//   const handleLinkClick = (path) => {
//     setMobileMenuOpen(false);
//     history.push(path);
//     window.scrollTo(0, 0);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const activeColor = "#e60b18";

//   const activeLinkStyle = {
//     color: activeColor,
//     textDecoration: "none",
//     borderBottom: "3px solid #e60b18",
//     paddingBottom: "5px",
//     marginBottom: "-2px",
//   };

//   const handleDocumentClick = (e) => {
//     if (isMobileMenuOpen && !e.target.closest(`.${styles.menuItems}`)) {
//       setMobileMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleDocumentClick);
//     return () => {
//       document.removeEventListener("click", handleDocumentClick);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isMobileMenuOpen]);

//   return (
//     <nav className="navbar">
//       <div className="navbarContainer container">
//         <Link to="/">
//           <img src={star} className="navLogo" alt="logo" />
//         </Link>{" "}
//         <input type="checkbox" onChange={toggleMobileMenu} />
//         <div className="hamburgerLines">
//           <span className="line line1"></span>
//           <span className="line line2"></span>
//           <span className="line line3"></span>
//         </div>
//         <ul
//         className={`menuItems ${isMobileMenuOpen ? 'menuItemsOpen':''}`}
//         //   className="menuItems} ${
//         //     isMobileMenuOpen ? styles.menuItemsOpen : ""
//         //   }`}
//         >
//           <li>
//             <Link
//               to="/"
//               style={activeItem === "home" ? activeLinkStyle : {}}
//               onClick={() => handleLinkClick("/")}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               style={activeItem === "about" ? activeLinkStyle : {}}
//               onClick={() => handleLinkClick("/about")}
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/services"
//               style={activeItem === "services" ? activeLinkStyle : {}}
//               onClick={() => handleLinkClick("/services")}
//             >
//               Services
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/contact"
//               style={activeItem === "contact" ? activeLinkStyle : {}}
//               onClick={() => handleLinkClick("/contact")}
//             >
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="https://www.allseasonswindowtint.com/blog"
//               // style={activeItem === 'contact' ? activeLinkStyle : {}}
//               // onClick={() => handleLinkClick('/contact')}
//             >
//               Blog
//             </Link>
//           </li>
//           {/* <div className= "BTN2_list">
//             <div className="TheBTN2"> */}
//               {/* <Backgroundless
//                 route="/dealership_login"
//                 content="Dealership login"
//                 style={{
//                   fontSize: "13px",
//                 }}
//               />
//               <Button
//                 content="Get instant quote"
//                 style={{
//                   fontSize: "13px",
//                 }}
//                 route="/service_category"
//               />
//             </div>
//           </li>
//         </ul>
//         <div className="TheBTN">
//           <Backgroundless
//             route="/dealership_login"
//             content="Dealership login"
//             style={{
//               fontSize: "13px",
//               marginRight: "10px",
//             }}
//           />
//           <Button
//             content="Get instant quote"
//             style={{
//               fontSize: "13px",
//             }}
//             route="/service_category"
//         />   */}
//         {/* </div>
       
//       </div> */}
//       </ul>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import "./nav1.css";
import star from "../../assets/star.png";
import { IoMdClose } from "react-icons/io";
const Nav1 = () => {
  const navRef = useRef(null);
  const closeRef = useRef(null);
  function revealSidebar() {
    navRef.current.classList.add("navreveal");
  }


  function hideSidebar() {
    navRef.current.classList.remove("navreveal");
  }

  // function menuToggle(){
  //   if(toggle === false){
  //       document.querySelector('ul').classList.add('reveal')
  //       toggle = true;
  //   }else{
  //       document.querySelector('ul').classList.remove('reveal')
  //       toggle = false
  //   }
  // }

  const whatToHappen = () => {
    window.location.replace("/contact");
  };
  return (
    <div className="parent">
      {/* <div class="menu" id="menu" onclick={menuToggle}></div> */}

      <div className="div1">
        <img className="l2" src={star} alt="flower" />
        <h1>Moses Favour</h1>
      </div>
      <nav ref={navRef}>
        <ul className="list">
          <li>
            <IoMdClose onClick={hideSidebar} ref={closeRef} className="mynav" />
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="/skill">Skills</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <button onClick={whatToHappen} className="btn1">
          Let&apos;s Talk
        </button>
        <RxHamburgerMenu onClick={revealSidebar} className="burger" />
      </div>
    </div>
  );
};

export default Nav1;

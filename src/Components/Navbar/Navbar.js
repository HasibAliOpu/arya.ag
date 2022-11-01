import React from "react";
import Logo from "../../images/arya-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faRetweet } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-200 px-10 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="">
          <img src={Logo} className="" alt="company logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0}>
            <a>
              Warehouse
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Find a Warehouse</a>
              </li>
              <li>
                <a>Enlist Warehouse</a>
              </li>
              <li>
                <a>Surveillance</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              Finance
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Loan against commodity</a>
              </li>
              <li>
                <a>Arya paysafe (escrow)</a>
              </li>
              <li>
                <a>Line of Credit</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              Marketplace
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Find Buyers</a>
              </li>
              <li>
                <a>Find sellers</a>
              </li>
              <li>
                <a>participate in e-Auctions</a>
              </li>
              <li>
                <a>Explore Mandi Prices</a>
              </li>
              <li>
                <a>Arya Certified Stocks</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              Who We Serve
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Farmer Producer organiztions</a>
              </li>
              <li>
                <a>Processors</a>
              </li>
              <li>
                <a>Financial Institutions</a>
              </li>
              <li>
                <a>Agri Corporations</a>
              </li>
              <li>
                <a>International Buyers</a>
              </li>
              <li>
                <a>Development Actors</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Storage & Logistics Solutions</a>
              </li>
              <li>
                <a>Audits & Surveillance </a>
              </li>
              <li>
                <a>Arjun - Procurement Facilitation</a>
              </li>
              <li>
                <a>Consulting </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex justify-around">
        <span className="">
          <FontAwesomeIcon
            icon={faRetweet}
            size="xl"
            className="hover:text-[#F1b531] duration-300"
          />
        </span>
        <a
          href="/"
          className="text-md font-semibold px-3 py-2 rounded-md text-white  bg-[#6b7a28] hover:bg-[#F1b531] duration-300"
        >
          Login/Signup
        </a>
      </div>
    </div>
  );
};

export default Navbar;

import "./Header.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../../assets/Svg/menu_Icon.svg";
// import { AuthContext } from "../../../AuthContext";
export default function Header() {
  return (
    <>
      <div className="bg-[#1D1D1D] header">
        <div className=" max-w-[1440px] mx-auto text-white   border-[#99AA99]  ">
          <div className="flex justify-between items-center h-full ">
            <div className=" hidden   sm:flex pl-[20px] sm:pl-[40px] md-[100px] lg:pl-[120px]  gap-x-4 md:gap-x-8 lg:gap-x-12   items-center   ">
              <Link
                to="/howitwork"
                className="py-[23px] text-[18px] leading-[28px] tracking-[ -0.05em] font-normal"
              >
                How it Works
              </Link>
              <div class="icon-container">
                <Link className="" to="whyfilm">
                  Why Film
                </Link>
              </div>
              <Link className="py-[23px]" to="About">
                About
              </Link>
              <Link className="py-[23px]" to="PriceDatabase">
                Price Database
              </Link>

              <Link className="py-[23px]" to="invest">
                Invest Page
              </Link>
              <Link className="py-[23px]" to="portfolio">
                My Portfolio
              </Link>
              <Link className="py-[23px]" to="Invite">
                Invite
              </Link>
            </div>
            <div className=" pl-[20px] flex sm:hidden lg:hidden  ">
              <Link to="#">
                <img src={menuIcon} alt="Menu Icon" />
              </Link>
            </div>
            <NavLink
              className="py-[23px] mr-[12px] px-[48px] border-x-[0.5px    ] border-[#9A9A9A] 
            "
              to="/login"
            >
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

import { NavLink } from "react-router-dom";
import HowitsWorkCard from "../HowItsWork/HowitsWorkCard";
import familymembers from "../../assets/images/familymembers.png";
import stars from "../../assets/Svg/stars.svg";

import firstInvestment from "../../assets/images/firstInvestment.png";
export default function InviteFriend() {
  return (
    <div className="bg-[#37513C]">
      <div className="max-w-[1440px] mx-auto py-[142px] sm:py-[142px] md:py-[142px] lg:py-[142px] pl-[133px] sm:pl-[133px] md:pl-[133px] lg:pl-[133px] pr-[148px] sm:pr-[148px] md:pr-[148px] lg:pr-[148px] text-white">
        <div className=" flex flex-row ">
          <div className="w-[55%]">
            <h1 className="heading text-[30px] sm:text-[30px] md:text-[40px] lg:text-[48px] leading-[  57.6px] font-medium ">
              Invite your friends
            </h1>
            <p className="text-[24px] font-normal leading-[33.6px] tracking-[ -0.05em]">
              Share your experience. Send an invite to your friends and family
              and we’ll let them skip the waitlist to get access immediately.
            </p>
          </div>
          <div className="w-[45%] flex gap-8 flex-col">
            <div className="flex flex-col gap-3  w-full ">
              <label htmlFor="">Name</label>
              <input
                className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                placeholder="Enter Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3  w-full  ">
              <label htmlFor="">Email Address</label>
              <input
                className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                placeholder="Enter email address"
                type="text"
              />
            </div>
            <NavLink
              className="btn_secondary !text-white !border-white "
              href=""
            >
              Add Contacts
            </NavLink>
            <NavLink
              to="/request"
              className="btn_primary_with_icon block !bg-[#547B5C]  !max-w-full text-white"
            >
              Send Invite
            </NavLink>
          </div>
        </div>
        <div className="text-center pt-[74px]">
          <h1 className="text-[24px] leading-[33.6px] tracking-[-.04em]">
            How it Works
          </h1>
          <HowitsWorkCard
            card1_Img={familymembers}
            card2_Img={firstInvestment}
            card3_Img={stars}
            card1_heading={"Share invite with your friend or family member"}
            card2_heading={
              "Your friend or family member signs up and makes their first investment"
            }
            card3_heading={
              "We’ll let your friend or family member skip the waitlist to get access immediately"
            }
          />
        </div>
      </div>
    </div>
  );
}

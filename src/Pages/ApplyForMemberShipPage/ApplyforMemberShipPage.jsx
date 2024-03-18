import { NavLink } from "react-router-dom";
import EmailRequestAndBtns from "../../Components/EmailRequestAndBtns/EmailRequestAndBtns";
import ButtonGroup from "../../Components/HowItsWork/buttonsGroup";
import loginbg from "../../assets/images/loginbg.png";
export default function ApplyForMemberShipPage() {
  return (
    <div className="relative bg-[#36493A]">
      <img
        className="absolute -rotate-[-29.45°]   -z-0  "
        src={loginbg}
        alt=""
      />
      <form className="relative">
        <div className="p-10 md:p-20">
          <div className="bg-white px-8 py-8  sm:px-14 sm:py-[72px] w-full  lg:w-1/2 rounded-[8px]">
            <div className="pb-12">
              <p className="learn_more pb-4">Join us</p>
              <h1 className="primary_heading heading font-medium">
                Apply for membership
              </h1>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="w-full text-left font-semibold text-[16px] leading-[22.4px]  tracing-[.02em] ">
                SUBMIT YOUR MEMBERSHIP APPLICATION
              </h1>
              <div className="w-full flex gap-4">
                <div className="flex flex-col gap-3  w-full ">
                  <label htmlFor="">First Name</label>
                  <input
                    className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                    placeholder="Enter your first name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-3  w-full  ">
                  <label htmlFor="">Last Name</label>
                  <input
                    className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                    placeholder="Enter your last name"
                    type="password"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3  w-full ">
                <label htmlFor=""> Eamil Address</label>
                <input
                  className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                  placeholder="Exter email address"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-3  w-full  ">
                <label htmlFor="">Password</label>
                <input
                  className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                  placeholder="Exter password"
                  type="password"
                />
              </div>

              <NavLink
                to="/request"
                className="btn_primary_with_icon block  !max-w-full text-white"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/request"
                className=" block text-center font-normal text-[18px] leading-[18px] tracking-[-.05em] text-[#36613F] !max-w-full "
              >
                Forgot your password?
              </NavLink>
              <div className="bg-[#C1D6C5] h-[1px] w-1/2 text-center my-8  "></div>
              <div className="w-full ">
                <ButtonGroup
                  Group_btn_class="w-full !flex-col  "
                  google_Btn="bg-[#4284F3] text-white"
                  linkedin_btn="bg-[#0B65C2] text-white"
                />
              </div>
              <a className="btn_secondary " href="">
                Request Invitation
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import InvestmentPlatFormBg_img from "../../assets/images/InvestmentPlatFormBg_img.png";
import "./InvestmentPlateForm.css";
export default function InvestmentPlateForm() {
  return (
    <section className="bg-[#EFEFEF]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-20 md:px-32 lg:px-[189px]  pt-10  text-[#1D1D1D]">
        <div className="flex justify-between items-end pb-12">
          <div>
            <h1 className="font-normal  primary_heading ">A dedicated film</h1>
            <h1 className=" font-medium font-combon  primary_heading italic">
              investment platform
            </h1>
          </div>
          <div>
            <NavLink to="/request" className="btn_primary_with_icon text-white">
              Request Invitation
            </NavLink>
          </div>
        </div>
        <div className="relative bg-[#36493A] rounded-[16px]">
          <div className="testclass h-full absolute ">
            <img
              className=" rounded-tl-[16px] rounded-bl-[16px] h-full overflow-hidden object-cover  w-full"
              src={InvestmentPlatFormBg_img}
              alt=""
            />
            <div></div>
          </div>
          <div className="relative shadow-custom rounded-[16px] w-full">
            <div class="flex justify-end py-[165px] pr-20">
              <div class="flex justify-between gap-24 text-white items-center">
                <div class="flex flex-col items-center">
                  <span class="text-[68px] leading-[81.6px] tracking-[-0.04] font-combon font-medium">
                    200+
                  </span>
                  <span class="text-[18px] leading-[28.6px] font-normal mt-2">
                    Films Offered
                  </span>
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-[68px] leading-[81.6px] tracking-[-0.04] font-combon font-medium">
                    100+
                  </span>
                  <span class="text-[18px] leading-[28.6px] font-normal mt-2">
                    Employees
                  </span>
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-[68px] leading-[81.6px] tracking-[-0.04] font-combon font-medium">
                    2023
                  </span>
                  <span class="text-[18px] leading-[28.6px] font-normal mt-2">
                    Company Launched
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import "./Header.css";
import menu_Icon from "../../assets/Svg/menu_Icon.svg";
export default function Header() {
  return (
    <>
      <div className="bg-[#1D1D1D] header">
        <div className=" max-w-[1440px] mx-auto text-white   border-[#99AA99]  ">
          <div className="flex justify-between items-center h-full ">
            <div className=" hidden   sm:flex pl-[20px] sm:pl-[40px] md-[100px] lg:pl-[120px]  gap-x-4 md:gap-x-8 lg:gap-x-12   items-center   ">
              <a
                className="py-[23px] text-[18px] leading-[28px] tracking-[ -0.05em] font-normal "
                href="howitwork"
              >
                How it Works
              </a>
              <div class="icon-container">
                <a className="" href="whyfilm">
                  Why Film
                </a>
              </div>
              <a className="py-[23px]" href="About">
                About
              </a>
              <a className="py-[23px]" href="PriceDatabase">
                Price Database
              </a>
            </div>
            <div className=" pl-[20px] flex sm:hidden lg:hidden  ">
              <a href="">
                <img src={menu_Icon} alt="" />
              </a>
            </div>
            <a
              className="py-[23px] mr-[12px] px-[48px] border-x-[0.5px    ] border-[#9A9A9A] 
            "
              href="priceD"
            >
              SignOut
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

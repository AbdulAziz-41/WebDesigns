import ButtonGroup from "../../Components/HowItsWork/buttonsGroup";
export default function EmailRequestAndBtns({ bg_color, btnColor }) {
  return (
    <>
      <div className={` ${bg_color} `}>
        <div className="max-w-[1440px] mx-auto pb-20 pl-10 sm:pl-20 md:pl-28   lg:pl-[177px] pr-10 sm:pr-20 md:pr-28 lg:pr-[185px]">
          <div class="relative w-full block">
            <input
              type="search"
              id="search-dropdown"
              class="block w-full z-20 bg-white text-[18px] leading-[28.8px]  text-black bg-[#FFFFFF24] rounded-e-lg rounded-s-gray-100 rounded-[8px] border border-[#498856] focus:border-2 outline-none focus:border-[#498856] py-[10px] pl-[14px] "
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              class="absolute top-0 end-0 h-full text-white bg-[#498856] rounded-e-lg px-[48px] text-[18px] leading-[18px] tracking-[ -0.05em]  "
            >
              Request Invitation
            </button>
          </div>
          <div className="flex justify-center">
            <div className="OrDiv">
              <h2 className="px-4 text-[16px] leading-[24px]">or</h2>
            </div>
          </div>
          <div>
            <ButtonGroup btnColor={btnColor} />
          </div>
        </div>
      </div>
    </>
  );
}
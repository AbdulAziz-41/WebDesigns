import ButtonGroup from "./buttonsGroup";
import Features from "./Featues";
import "./howitsWork.css";
import HowitsWorkCard from "./HowitsWorkCard";
export default function HowItsWorkDark() {
  return (
    <>
      <div className="bg-[#EFEFEF]">
        <div className=" flex justify-center flex-col w-full max-w-[1440px] mx-auto">
          <Features />
          <div className=" py-20 pl-10 sm:pl-20 md:pl-28   lg:pl-[177px] pr-10 sm:pr-20 md:pr-28 lg:pr-[185px] text-[#1D1D1D]">
            <div className="text-center md:text-left">
              <p className="learn_more">Learn more</p>
              <h1 className=" pb-4 heading primary_heading font-medium">
                How its Woks
              </h1>
              <div className="pb-9">
                <HowitsWorkCard />
              </div>
            </div>
            <h1 className=" text-center md:text-left lg:w-[55%] text-[17px] leading-[23.8px] text-black  lg;pt-10  ">
              We are the first platform for buying and selling shares
              representing an investment in high rating films. Build a
              diversified portfolio of expertly-vetted works curated by our
              industry-leading research team.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

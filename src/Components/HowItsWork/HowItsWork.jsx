import EmailRequestAndBtns from "../EmailRequestAndBtns/EmailRequestAndBtns";
import ButtonGroup from "./buttonsGroup";
import "./howitsWork.css";
import HowitsWorkCard from "./HowitsWorkCard";
export default function HowItsWork({ bg_color, text_color }) {
  return (
    <>
      <div className={` ${bg_color} `}>
        <div className=" flex justify-center w-full max-w-[1440px] mx-auto">
          <div className=" py-20 pl-10 sm:pl-20 md:pl-28   lg:pl-[177px] pr-10 sm:pr-20 md:pr-28 lg:pr-[185px] text-white">
            <div className="text-center md:text-left">
              <p className={`learn_more ${text_color}`}>Learn more</p>
              <h1 className={` pb-4 heading primary_heading ${text_color}`}>
                How its Woks
              </h1>
              <h1
                className={` w-[70%] secondery_heading  lg;pt-10  ${text_color}`}
              >
                We are the first platform for buying and selling shares
                representing an investment in high rating films. Build a
                diversified portfolio of expertly-vetted works curated by our
                industry-leading research team.
              </h1>
            </div>
            <div className="">
              <HowitsWorkCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

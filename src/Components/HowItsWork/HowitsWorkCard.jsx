import stars from "../../assets/Svg/stars.svg";
import workcard from "../../assets/Svg/workcard.svg";
const HowitsWorkCard = () => {
  return (
    <>
      <div className="flex pt-[50px]  flex-col items-center md:flex-row">
        <div className="howitsWorkCards">
          <img src={stars} alt="" />
          <div>
            <h1 className="secondery_heading font-combon font-bold ">
              We find high rating films
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-1%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              risus imperdiet
            </p>
          </div>
        </div>
        <img src={workcard} alt="" />
        <div className="howitsWorkCards ">
          <img src={stars} alt="" />
          <div>
            <h1 className="secondery_heading font-combon font-bold   ">
              We Purchase the Film
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-1%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              risus imperdiet
            </p>
          </div>
        </div>
        <img src={workcard} alt="" />
        <div className="howitsWorkCards">
          <img src={stars} alt="" />
          <div>
            <h1 className="secondery_heading  font-combon font-bold  ">
              Sell Your Sharesm
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-1%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              risus imperdiet
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitsWorkCard;

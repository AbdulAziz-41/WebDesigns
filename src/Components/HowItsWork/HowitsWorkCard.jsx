import stars from "../../assets/Svg/stars.svg";
import workcard from "../../assets/Svg/workcard.svg";
const HowitsWorkCard = ({
  card1_Img,
  card1_heading,
  card1_discription,
  card2_Img,
  card2_heading,
  card2_discription,
  card3_Img,
  card3_heading,
  card3_discription,
}) => {
  return (
    <>
      <div className="flex pt-[50px]  flex-col  md:flex-row">
        <div className="howitsWorkCards">
          <img src={card1_Img} alt="" />
          <div>
            <h1 className="howitsWorkCardsheading font-combon font-bold ">
              {card1_heading}
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-1%]">
              {card1_discription}
            </p>
          </div>
        </div>
        <img src={workcard} alt="" />
        <div className="howitsWorkCards ">
          <img src={card2_Img} alt="" />
          <div>
            <h1 className="howitsWorkCardsheading font-combon font-bold   ">
              {card2_heading}
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-1%]">
              {card2_discription}
            </p>
          </div>
        </div>
        <img src={workcard} alt="" />
        <div className="howitsWorkCards">
          <img src={card3_Img} alt="" />
          <div>
            <h1 className="howitsWorkCardsheading  font-combon font-bold  ">
              {card3_heading}
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-1%] ">
              {card3_discription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitsWorkCard;

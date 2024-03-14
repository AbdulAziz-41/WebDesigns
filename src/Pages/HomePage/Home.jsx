import BarChart from "../../Components/Charts/BarChart";
import HistoryChart from "../../Components/Charts/historyChart";
import EmailRequestAndBtns from "../../Components/EmailRequestAndBtns/EmailRequestAndBtns";
import FriquentlyAskedQuestions from "../../Components/FriquentlyAsqQuestions/FriquentlyAskedQuestion";
import HomeBannar from "../../Components/Bannars/HomePageBannar/HomeBannar/HomeBannar";
import HowItsWork from "../../Components/HowItsWork/HowItsWork";
// import OurStatsSlider from "../../Components/OurStatsSlider/OurStatsSlider";
import CenterMode from "../../Components/OurStatsSlider/slickSlider";
import RecentOffers from "../../Components/RecentOffers/RecentOffers";

export default function Home() {
  return (
    <>
      <HomeBannar />
      {/* <OurStatsSlider /> */}
      <div className="bg-[#EFEFEF] pt-20 ">
        <CenterMode />
      </div>
      <RecentOffers />
      <HistoryChart />
      <BarChart />
      <HowItsWork bg_color="bg-[#36493A] " />
      <EmailRequestAndBtns
        bg_color={"bg-[#36493A]"}
        btnColor={"border-[#EFEFEF] !text-white"}
      />
      <FriquentlyAskedQuestions />
    </>
  );
}

import EmailRequestAndBtns from "../../Components/EmailRequestAndBtns/EmailRequestAndBtns";
import HowItsWork from "../../Components/HowItsWork/HowItsWork";
import HowItsWorkDark from "../../Components/HowItsWork/HowitsWorkDark";
import TopBannar from "../../Components/Bannars/HowitsWorkPageBannars/TopBannar";

import mobileview from "../../assets/images/mobileview.png";
import TextWithImageHIsWBannar from "../../Components/Bannars/HowitsWorkPageBannars/TextWithImageHIsWBannar";
export default function HowItsWorkPage() {
  return (
    <>
      <TopBannar />
      <TextWithImageHIsWBannar
        bannarSpanclass=""
        bannarSpan="unique asset class"
        bannarformation_Class=""
        bannar_subheadingClass=""
        bannarImage={mobileview}
        bannar_heading_Class=""
        bannar_heading="Leveraging the power of the "
        bannar_subheading="Since inception, we’ve offered over $700mm in blue chip contemporary art investments, exemplifying not only the success of our strategy, but the favorable performance of this asset class."
      />
      <HowItsWork bg_color="bg-[#EFEFEF] " text_color={"text-[#272727]"} />
      <TextWithImageHIsWBannar
        bannarSpanclass=""
        bannarSpan="Process"
        bannarformation_Class=""
        bannar_subheadingClass=""
        bannarImage={mobileview}
        bannar_heading_Class=""
        bannar_heading="Investment 
        "
        bannar_subheading="Our company focuses on acquiring movies by contemporary filmmakers who exhibit attractive investment characteristics. The filmmakers are identified by the research team using data analytics built on top of its proprietary database.
        Works by those filmmakers are then sourced via our acquisitions team, a group with decades of art market transaction and diligence experience. Our company maintains a buy and hold approach, selling opportunistically in order to increase returns for investors."
      />
      <EmailRequestAndBtns
        bg_color="bg-[#EFEFEF]  "
        btnColor={"border-[#498856]"}
      />
    </>
  );
}

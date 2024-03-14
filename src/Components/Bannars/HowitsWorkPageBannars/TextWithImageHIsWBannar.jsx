import mobileview from "../../../assets/images/mobileview.png";
export default function TextWithImageHIsWBannar({
  bannarImage,
  bannarformation_Class,
  bannar_heading_Class,
  bannar_heading,
  bannarSpanclass,
  bannarSpan,
  bannar_subheadingClass,
  bannar_subheading,
  bannar_subheading_2,
  Content,
}) {
  return (
    <div className="bg-[#37513C]  ">
      <div
        className={` text-white gap-5  max-w-[1440px] mx-auto flex items-center justify-center pt-[132px]  ${bannarformation_Class}`}
      >
        <div className="73%">
          <img src={bannarImage} alt="" />
        </div>
        <div className={`${Content}`}>
          <h1
            className={` max-w-[500px] w-fullz text-white  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] lg:leading-[66.96px] tracking-[-0.07em] pb-10
 font-light ${bannar_heading_Class}`}
          >
            {bannar_heading} <br />{" "}
            <span
              className={`font-combon heading  italic  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] text-white leading-[66.96px] tracking-[-0.07em]
 font-light ${bannarSpanclass}`}
            >
              {bannarSpan}
            </span>
          </h1>
          <p
            className={` text-[12px] sm:text-[14px] md:text-[17px] lg:text-[21px]  tracking-[ -0.05em] leading-[20.7px] sm:leading-[25px] md:leading-[30px] lg:leading-[35.7px]  ${bannar_subheadingClass}`}
          >
            {bannar_subheading}
          </p>
          <br />
          <p
            className={` text-[12px] sm:text-[14px] md:text-[17px] lg:text-[21px]  tracking-[ -0.05em] leading-[20.7px] sm:leading-[25px] md:leading-[30px] lg:leading-[35.7px]  ${bannar_subheadingClass}`}
          >
            {bannar_subheading_2}
          </p>
        </div>
      </div>
    </div>
  );
}

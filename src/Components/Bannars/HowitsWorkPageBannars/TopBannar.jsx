import HIWbannar1 from "../../../assets/images/HIWbannar1.png";
export default function TopBannar() {
  return (
    <div className="bg-[#1D1D1D] text-white">
      <div className="max-w-[1440px] mx-auto pl-16  sm:pl-16  lg:pl-16  pt-[169px] pb-[170px] ">
        <div className="flex items-center gap-7">
          <div>
            <h1 className=" font-inter  text-[60px] sm:text-[80px] md:text-[100px] lg:text-[88.8px]    leading-[40.6px] sm:leading-[75.6px] md:leading-[90.6px] lg:leading-[81.84px] tracking-[-7px] font-light ">
              A complete platform for &nbsp;
              <span className="italic font-combon font-normal   ">
                investing in film
              </span>
            </h1>
            <p className="pt-[24px] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px]  leading-[20.7px] lg:leading-[35.7px]  sm: tracking-[ -0.05em] max-w-[40rem] ">
              With over 215 employees based in New York City, our company is the
              first and leading firm for buying and trading shares in
              multi-million dollar, blue-chip artworks. Build a diversified
              portfolio of iconic works of art curated by our industry-leading
              research and acquisition teams.
            </p>
          </div>
          <div className="w-full mb-[-300px] mr-[-102px]">
            <div className=" border-[#AAA9A4] border-[5px] rounded-[25px] overflow-hidden">
              <img className="w-full h-full " src={HIWbannar1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

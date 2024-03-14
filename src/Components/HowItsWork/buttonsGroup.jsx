import googlebutton from "../../assets/Svg/googlebutton.svg";
import linkedin from "../../assets/Svg/linkedin.svg";

export default function ButtonGroup({ btnColor }) {
  return (
    <>
      <div className={`w-full flex flex-col sm:flex-row gap-4`}>
        <a
          className={`w-full py-4 text-center  border  text-[18px] leading-[18px] tracking-[ -0.05em] flex justify-center items-center gap-x-2 ${btnColor}`}
          href=""
        >
          Continue with Google
          <img src={googlebutton} alt="" />
        </a>
        <a
          className={`w-full py-4 text-center  border  text-[18px] leading-[18px] tracking-[ -0.05em] flex justify-center items-center gap-x-2 ${btnColor}`}
          href=""
        >
          Continue with LinkedIn
          <img src={linkedin} alt="" />
        </a>
      </div>
    </>
  );
}

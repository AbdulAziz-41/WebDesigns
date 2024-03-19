import inviteBannar from "../../../assets/images/inviteBannar.png";
export default function InviteTOpBannar() {
  return (
    <>
      <div className="bg-[#1D1D1D] text-white">
        <div className="max-w-[1440px] mx-auto px-16 pt-20 flex flex-row justify-between items-center">
          <div className="w-1/2">
            <h1 className=" font-light   text-[88px] leading-[81.8px] tracking-[-0.07em] pb-10">
              Share the gift of{" "}
              <span className="font-combon font-normal  italic text-[88px] leading-[81.8px] tracking-[-0.07em] pb-10">
                investing in film
              </span>
            </h1>
            <p className="text-[28px] leading-[47.6px] tracking-[-0.04em] ">
              Invite friends and we’ll let them skip the waitlist
            </p>
          </div>
          <div className="w-1/2">
            <img src={inviteBannar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

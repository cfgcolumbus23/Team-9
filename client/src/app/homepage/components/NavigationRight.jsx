import React from "react";
import { ButtonSecondary } from "./ButtonSecondary";

export const NaviationRight = () => {
  return (
    <div className="relative w-[1440px] h-[64px] bg-white">
      <ButtonSecondary
        className="!h-[40px] !absolute !left-[1260px] !w-[140px] !top-[12px]"
        text="Sign Up"
        textClassName="!w-[107px] !top-[7px]"
      />
      <div className="absolute w-[296px] h-[22px] top-[21px] left-[932px]">
        <div className="left-0 absolute h-[22px] top-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
          Link 1
        </div>
        <div className="left-[80px] absolute h-[22px] top-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
          Link 2
        </div>
        <div className="left-[160px] absolute h-[22px] top-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
          Link 3
        </div>
        <div className="left-[240px] absolute h-[22px] top-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
          Link 4
        </div>
      </div>
      <div className="absolute top-[18px] left-[40px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[normal]">
        TRADE
      </div>
    </div>
  );
};

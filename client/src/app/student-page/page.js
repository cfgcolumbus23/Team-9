import React from "react";
import { ButtonPrimary } from "./components/ButtonPrimary";
import { ButtonSecondary } from "./components/ButtonSecondary";
import { CardBlog } from "./components/CardBlog";

export default function Desktop() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1920px] h-[1080px] relative">
        <ButtonPrimary
          className="!h-[618px] !absolute !left-[2375px] !w-[904px] !top-[1491px]"
          textClassName="!w-[855px] !top-[298px]"
        />
        <div className="absolute w-[1920px] h-[213px] top-[874px] left-0">
          <div className="absolute w-[1920px] h-[213px] top-0 left-0 bg-[#005959]">
            <p className="absolute top-[69px] left-[713px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              215 North Front St, Ste 620
            </p>
            <div className="absolute top-[94px] left-[713px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              Columbus, Ohio 43215
            </div>
            <div className="top-[114px] left-[713px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {""}
            </div>
            <div className="top-[135px] left-[713px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {""}
            </div>
            <div className="top-[94px] left-[1247px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {""}
            </div>
            <div className="top-[135px] left-[1247px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {""}
            </div>
            <div className="top-[135px] left-[1513px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {""}
            </div>
            <div className="top-[69px] left-[980px] whitespace-nowrap absolute [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
              Phone: 614-502-1837
            </div>
            <div className="top-[69px] left-[1247px] whitespace-nowrap absolute [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
              Email: info@futurereadyfive.org
            </div>
            <div className="top-[69px] left-[1513px] absolute [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
              {""}
            </div>
          </div>
          <img
            className="w-[250px] h-[40px] top-[56px] left-[146px] absolute object-cover"
            alt="Image"
            src="image-2.png"
          />
          <p className="absolute w-[307px] top-[114px] left-[117px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
            © 2022 Future Ready Five. All Rights Reserved
          </p>
        </div>
        <div className="absolute w-[1862px] h-[841px] top-[-18px] left-[29px]">
          <div className="top-[86px] left-[951px] whitespace-nowrap absolute [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
            Phone: 614-502-1837
          </div>
          <div className="absolute w-[1862px] h-[93px] top-[50px] left-0 bg-white">
            <ButtonSecondary
              className="!h-[58px] !left-[1629px] !w-[181px] !top-[17px]"
              text="Sign up"
              textClassName="!w-[148px] !top-[16px]"
            />
          </div>
          <img
            className="w-[405px] h-[69px] top-[62px] left-[71px] absolute object-cover"
            alt="Image"
            src="image-1.png"
          />
          <CardBlog
            className="!border-[#005959] !h-[653px] !border-[3px] !border-solid !shadow-[0px_4px_4px_#00000040] !absolute !left-[684px] !w-[477px] !top-[188px]"
            hasContent={false}
            mediaClassName="![position:unset] !left-[unset] !bg-[unset] !w-[unset] !top-[unset]"
            rectangleClassName="!left-[207px]"
          />
          <img
            className="absolute w-[477px] h-[270px] top-[188px] left-[684px] object-cover"
            alt="Screenshot"
            src="screenshot-2023-11-03-at-5-28-1.png"
          />
          <p className="absolute w-[281px] top-[477px] left-[782px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[28.1px]">
            Play games and view progress!
          </p>
          <div className="absolute w-[845px] h-[203px] top-0 left-[508px] [font-family:'Permanent_Marker-Regular',Helvetica] font-normal text-black text-[64px] text-center tracking-[0] leading-[86.2px]">
            Lets Learn!
          </div>
          <div className="absolute w-[145px] h-[35px] top-[538px] left-[858px] [font-family:'Permanent_Marker-Regular',Helvetica] font-normal text-black text-[24px] text-center tracking-[0] leading-[32.3px] whitespace-nowrap">
            Login
          </div>
          <ButtonSecondary
            className="!absolute !left-[831px] !top-[595px]"
            text="Username"
          />
          <ButtonSecondary
            className="!absolute !left-[832px] !top-[691px]"
            text="Password"
          />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ButtonPrimary } from './ButtonPrimary';
import { ButtonSecondary } from './ButtonSecondary';
import { CardBlog } from './CardBlog';

export default function Desktop() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1920px] h-[1080px] relative">
        <div className="absolute w-[1862px] h-[840px] top-[-15px] left-[29px]">
          <div className="w-[480px] h-[656px] top-[184px] left-[70px] absolute border-[3px] border-solid border-[#005959]">
            <div className="absolute w-[477px] h-[166px] top-[487px] left-0 bg-white" />
            <div className="absolute w-[477px] h-[270px] top-0 left-0 bg-black">
              <div className="relative w-[64px] h-[64px] top-[103px] left-[207px] bg-white rounded-[8px]" />
            </div>
          </div>
          <ButtonSecondary
            className="!h-[205px] !rounded-[6px] !absolute !left-[168px] !w-[284px] !top-[570px]"
            text="Parent"
            textClassName="!h-[87px] !text-[64px] ![font-family:'Permanent_Marker-Regular',Helvetica] !leading-[86.2px] !w-[251px] !top-[59px]"
          />
          <div className="absolute top-[83px] left-[951px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
            Phone: 614-502-1837
          </div>
          <div className="absolute w-[1862px] h-[93px] top-[47px] left-0 bg-white">
            <ButtonSecondary
              className="!h-[58px] !left-[1629px] !w-[181px] !top-[17px]"
              text="Sign up"
              textClassName="!w-[148px] !top-[16px]"
            />
          </div>
          <img
            className="w-[405px] h-[69px] top-[59px] left-[71px] absolute object-cover"
            alt="Image"
            src="image-1.png"
          />
          <CardBlog
            className="!border-[#005959] !h-[653px] !border-[3px] !border-solid !shadow-[0px_4px_4px_#00000040] !absolute !left-[684px] !w-[477px] !top-[185px]"
            hasContent={false}
            mediaClassName="![position:unset] !left-[unset] !bg-[unset] !w-[unset] !top-[unset]"
            rectangleClassName="!left-[207px]"
          />
          <ButtonSecondary
            className="!h-[205px] !rounded-[6px] !absolute !left-[789px] !w-[284px] !top-[570px]"
            text="Student"
            textClassName="!h-[87px] !text-[64px] ![font-family:'Permanent_Marker-Regular',Helvetica] !leading-[86.2px] !w-[251px] !top-[59px]"
          />
          <div className="absolute top-[474px] left-[241px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[27.2px] whitespace-nowrap">
            Find a provider!
          </div>
          <img
            className="absolute w-[477px] h-[270px] top-[185px] left-[684px] object-cover"
            alt="Screenshot"
            src="screenshot-2023-11-03-at-5-28-1.png"
          />
          <div className="w-[480px] h-[656px] top-[184px] left-[1284px] shadow-[0px_4px_4px_#00000040] absolute border-[3px] border-solid border-[#005959]">
            <div className="absolute w-[477px] h-[166px] top-[487px] left-0 bg-white" />
            <div className="absolute w-[477px] h-[270px] top-0 left-0 bg-black">
              <div className="relative w-[64px] h-[64px] top-[103px] left-[207px] bg-white rounded-[8px]" />
            </div>
          </div>
          <ButtonSecondary
            className="!h-[205px] !rounded-[6px] !absolute !left-[1376px] !w-[296px] !top-[570px]"
            text="provider"
            textClassName="!h-[87px] !text-[64px] ![font-family:'Permanent_Marker-Regular',Helvetica] !leading-[86.2px] !w-[263px] !top-[59px]"
          />
          <p className="absolute w-[281px] top-[474px] left-[782px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[28.1px]">
            Play games and view progress!
          </p>
          <div className="absolute w-[199px] top-[474px] left-[1425px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[28.1px] whitespace-nowrap">
            Create learning game!
          </div>
          <img
            className="absolute w-[477px] h-[270px] top-[185px] left-[71px] object-cover"
            alt="Screenshot"
            src="screenshot-2023-11-03-at-5-33-1.png"
          />
          <img
            className="absolute w-[477px] h-[270px] top-[185px] left-[1285px] object-cover"
            alt="Screenshot"
            src="screenshot-2023-11-03-at-5-34-1.png"
          />
          <div className="absolute w-[845px] h-[203px] top-0 left-[508px] [font-family:'Permanent_Marker-Regular',Helvetica] font-normal text-black text-[64px] text-center tracking-[0] leading-[86.2px]">
            Customize your learning!
          </div>
        </div>
        <ButtonPrimary
          className="!h-[618px] !absolute !left-[2375px] !w-[904px] !top-[1491px]"
          textClassName="!w-[855px] !top-[298px]"
        />
        <div className="absolute w-[647px] h-[205px] top-[855px] left-[2356px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[normal]">
          Hello World
        </div>
        <div className="absolute w-[1920px] h-[213px] top-[874px] left-0">
          <div className="absolute w-[1920px] h-[213px] top-0 left-0 bg-[#005959]">
            <p className="left-[713px] whitespace-nowrap absolute top-[69px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
              215 North Front St, Ste 620
            </p>
            <div className="absolute top-[94px] left-[713px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              Columbus, Ohio 43215
            </div>
            <div className="top-[114px] left-[713px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {''}
            </div>
            <div className="top-[135px] left-[713px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {''}
            </div>
            <div className="top-[94px] left-[1247px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {''}
            </div>
            <div className="top-[135px] left-[1247px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {''}
            </div>
            <div className="top-[135px] left-[1513px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.7px] whitespace-nowrap">
              {''}
            </div>
            <div className="left-[980px] whitespace-nowrap absolute top-[69px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
              Phone: 614-502-1837
            </div>
            <div className="left-[1247px] whitespace-nowrap absolute top-[69px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
              Email: info@futurereadyfive.org
            </div>
            <div className="left-[1513px] absolute top-[69px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[19.7px]">
              {''}
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
      </div>
    </div>
  );
}

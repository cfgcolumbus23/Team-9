import React from 'react';

export const CardBlog = () => {
  return (
    <div className="relative w-[270px] h-[436px]">
      <div className="absolute w-[274px] h-[166px] top-[270px] left-0">
        <div className="relative w-[270px] h-[166px] bg-white">
          <div className="absolute w-[222px] top-[24px] left-[24px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
            Special Feature
          </div>
          <div className="absolute top-[122px] left-[24px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[19.0px] whitespace-nowrap">
            See More ›
          </div>
        </div>
      </div>
      <div className="absolute w-[270px] h-[270px] top-0 left-0 bg-black">
        <div className="relative w-[64px] h-[64px] top-[103px] left-[103px] bg-white rounded-[8px]" />
      </div>
    </div>
  );
};

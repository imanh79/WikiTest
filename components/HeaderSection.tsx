import { ShareIcon } from "@/assets/IconSvg";
import React from "react";

const HeaderSection = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-4 py-2">
        <div className=" ">
          <h3 className=" font-[700] text-2xl">محاسبه گر اقساط</h3>
          <p className="text-[#707070] font-[450]">توضیحات محاسبه گر اقساط</p>
        </div>
        {ShareIcon}
      </div>
      <hr />
    </>
  );
};

export default HeaderSection;

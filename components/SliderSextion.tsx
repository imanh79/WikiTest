"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import {
  SherkatIcon,
  SherkatIcon2,
  SherkatIcon3,
  SherkatIcon4,
  SherkatIcon5,
} from "@/assets/IconSvg";

const SliderSection = () => {
  // وضعیت برای نگهداری آیندکس عکس انتخاب شده
  const [selectedIndex, setSelectedIndex] = useState<number | null>(2);

  // داده‌های عنوان و توضیحات برای هر عکس
  const data = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
  ];

  // تصاویر
  const images = [
    <SherkatIcon2 key="2" />,
    <SherkatIcon3 key="3" />,
    <SherkatIcon key="1" />,
    <SherkatIcon4 key="4" />,
    <SherkatIcon5 key="5" />,
  ];

  // تابع برای به‌روزرسانی وضعیت index
  const handleSlideChange = (swiper: any) => {
    setSelectedIndex(swiper.activeIndex);
  };

  return (
    <div className="flex justify-center items-center w-full max-w-[650px] mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={-40} // فاصله بین اسلایدها
        slidesPerView={3} // تعداد اسلایدهایی که در یک بار نمایش داده می‌شوند
        centeredSlides={true} // برای اینکه اسلایدها در وسط نمایش داده شوند
        navigation
        dir="ltr"
        initialSlide={2}
        onSlideChange={handleSlideChange} // ثبت رویداد تغییر اسلاید
        className="!w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="!flex !justify-center !items-center"
            onClick={() => setSelectedIndex(index)} // تنظیم وضعیت انتخاب شده
          >
            <div
              className={`flex flex-col gap-2 justify-center items-center !w-[120px] !h-[150px] rounded-[15px] border border-[#35313233] transform duration-[300ms] hover:border-[#5FED2F] hover:bg-[#5FED2F33] ${
                selectedIndex === index
                  ? " !border-[#0E5445] border-[3px] bg-[#5FED2F33]"
                  : ""
              }`}
            >
              <div
                className={`${
                  selectedIndex === index
                    ? "transform translate-y-[-4px]  "
                    : "transform translate-y-0"
                } transform duration-[300ms]`}
              >
                {image}
              </div>
              <div
                className={`transition-opacity duration-400ms ${
                  selectedIndex === index ? "block " : "hidden "
                }`}
              >
                <h2 className="text-center font-[700] text-[16px]">
                  {data[index].title}
                </h2>
                <p className="rounded-[30px] bg-[#0E5445] text-[white] px-2 text-center pt-1 font-[150] text-[10px]">
                  {data[index].description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;

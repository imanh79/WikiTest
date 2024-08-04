"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  arrowdown,
  arrowleft,
  brandlistsvg,
  searchinput,
} from "@/assets/IconSvg";

import { brands } from "@/data/data";

const CalculatorSection = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [bgbtn, setbgbtn] = useState<any>(null);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState(""); // اضافه کردن وضعیت جستجو

  const filterItems = (items: any[], searchTerm: string) => {
    return items.filter((item) =>
      (item.name || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleBrandClick = (brand: any) => {
    setSelectedBrand(brand);
    setSelectedModel(null); // Reset model when selecting a new brand
  };

  const handleModelClick = (model: any) => {
    setSelectedModel(model);
  };

  const handleBackClick = () => {
    if (selectedModel) {
      setSelectedModel(null);
    } else {
      setSelectedBrand(null);
    }
  };

  // فیلتر کردن برندها، مدل‌ها و تیپ‌ها بر اساس ورودی جستجو
  const filteredBrands = filterItems(brands, searchTerm);
  const filteredModels = selectedBrand
    ? filterItems(selectedBrand.models, searchTerm)
    : [];
  const filteredTypes = selectedModel
    ? filterItems(
        selectedModel.types.map((type:any) => ({ name: type })),
        searchTerm
      )
    : [];

  return (
    <div className="max-w-[580px] h-[320px] mx-auto mt-6 border border-[#35313233] rounded-[15px] ">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer p-2 h-[40px] border border-gray-300 text-gray-700 flex justify-between items-center mt-4 rounded-[10px] mb-4 mx-6"
      >
        انتخاب خودرو <span>{arrowdown}</span>
      </div>
      <hr />
      <div className="flex justify-between items-center mx-6 mt-4">
        <span className="text-sm font-[800]">پیش پرداخت:</span>
        <span className="text-sm font-[800]">1,200,576,000</span>
      </div>
      <div className="flex justify-center pt-2 mb-4">
        <input type="range" />
      </div>
      <hr />
      <div className="flex justify-between items-center mx-6 mt-4 mb-4">
        <span className="text-sm font-[800]">مدت زمان بازپرداخت:</span>
        <div className="flex justify-between items-center gap-2">
          <button
            type="button"
            className={`border border-[#0E5445] rounded-[33px] px-5 py-0.5 font-[600] ${
              bgbtn === 12 ? "bg-[#0E5445] text-[white]" : ""
            }`}
            onClick={() => setbgbtn(12)}
          >
            12 ماهه
          </button>
          <button
            type="button"
            className={`border border-[#0E5445] rounded-[33px] px-5 py-0.5 font-[600] ${
              bgbtn === 24 ? "bg-[#0E5445] text-[white]" : ""
            }`}
            onClick={() => setbgbtn(24)}
          >
            24 ماهه
          </button>
          <button
            type="button"
            className={`border border-[#0E5445] rounded-[33px] px-5 py-0.5 font-[600] ${
              bgbtn === 36 ? "bg-[#0E5445] text-[white]" : ""
            }`}
            onClick={() => setbgbtn(36)}
          >
            36 ماهه
          </button>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center mx-6 mt-4 mb-4">
        <span className="text-sm font-[800]">مدت زمان بازپرداخت:</span>
        <button
          type="button"
          className="border border-[#0E5445] rounded-[33px] px-5 py-0.5 font-[600] bg-[#0E5445] text-[white]"
        >
          ماهانه
        </button>
      </div>
      <hr />
      <div className="flex justify-center mt-3">
        <button
          type="button"
          className="border border-[#0E5445] rounded-[33px] px-5 py-0.5 font-[600] bg-[#0E5445] text-[white]"
        >
          محاسبه
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <motion.div
              className="fixed inset-0 bg-black/80 blurEffect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                className="max-w-lg bg-white rounded-[20px] shadow-lg p-6 space-y-4 h-[600px] w-[371px] relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <DialogPanel>
                  <DialogTitle className="text-lg font-semibold text-gray-900 pb-2">
                    انتخاب برند، مدل و تیپ
                  </DialogTitle>
                  <Description className="text-sm text-gray-600 font-[500] pb-2">
                    خودروی مورد نظر خود را از لیست زیر انتخاب کنید.
                  </Description>

                  <div className="flex relative items-center pb-2">
                    <input
                      type="text"
                      className="w-full rounded-[30px] bg-[#D9D9D933] border-none outline-none py-2 pr-12"
                      placeholder="جستجو بین برند، مدل و تیپ‌ها"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)} // به‌روزرسانی وضعیت جستجو
                    />
                    <span className="absolute top-2 right-4">
                      {searchinput}
                    </span>
                  </div>

                  <div className="">
                    {selectedBrand ? (
                      selectedModel ? (
                        <div>
                          <button onClick={handleBackClick}>
                            بازگشت به لیست مدل‌ها
                          </button>
                          <ul>
                            {filteredTypes.map((type: any, index: any) => (
                              <>
                                <div
                                  className="flex justify-between items-center py-2.5 cursor-pointer "
                                  key={index}
                                >
                                  <li>{type.name}</li>
                                  <label className="checkbox-container flex justify-center items-center">
                                    <input
                                      className="custom-checkbox  "
                                      type="checkbox"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>

                                <hr />
                              </>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div>
                          <button onClick={handleBackClick}>
                            بازگشت به لیست برندها
                          </button>
                          <ul>
                            {filteredModels.map((model: any, index: any) => (
                              <>
                                <div
                                  className="flex justify-between items-center py-2.5 cursor-pointer"
                                  key={index}
                                  onClick={() => handleModelClick(model)}
                                >
                                  <li>{model.model}</li>
                                  {arrowleft}
                                </div>
                                <hr />
                              </>
                            ))}
                          </ul>
                        </div>
                      )
                    ) : (
                      <ul>
                        {filteredBrands.map((brand, index) => (
                          <>
                            <div
                              className="flex justify-between items-center py-2.5 cursor-pointer"
                              key={index}
                              onClick={() => handleBrandClick(brand)}
                            >
                              <div className="flex gap-2 items-center">
                                {brandlistsvg}
                                <li>{brand.name}</li>
                              </div>
                              {arrowleft}
                            </div>
                            <hr />
                          </>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex w-full gap-4 absolute bottom-0 left-0 p-4">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-2 py-1 w-full text-[14px]  font-[700] text-white bg-[#707070] rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                    >
                      انتخاب
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-2 py-1 w-full text-[14px] font-[700] text-[#0E5445] border-[1px] border-[#0E5445] hover:bg-[#5FED2F] duration-300 rounded-full bg-white"
                    >
                      بستن
                    </button>
                  </div>
                </DialogPanel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalculatorSection;

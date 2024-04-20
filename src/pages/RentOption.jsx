import React, { useEffect, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import wallpaper7 from "../images/wallpapers/wallpaper7.jpg";

export default function RentOption() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state?.data || null;

  const [selectedTukQuantity, setSelectedTukQuantity] = useState({});
  const [selectedDriQuantity, setSelectedDriQuantity] = useState({});
  const [selectedLicOptions, setSelectedLicOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  //Rederect homepage without data
  useEffect(() => {
    if (!data) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    pickupCity,
    pickupDate,
    pickupTime,
    pickupFee,
    returnCity,
    returnDate,
    returnTime,
    returnFee,
    durationDays,
    vehicle,
    totalPrice,
    deposit,
    vehiPrice,
  } = data || {};

  const handleContinue = () => {
    const dataToSend = {
      pickupCity,
      pickupDate,
      pickupTime,
      pickupFee,
      returnCity,
      returnDate,
      returnTime,
      returnFee,
      durationDays,
      vehicle,
      vehiPrice,
      totalPrice,
      deposit,

      tukQuantity: selectedTukQuantity,
      driQuantity: selectedDriQuantity.quantity,
      driCost: selectedDriQuantity.cost,
      licences: selectedLicOptions,
      options: selectedOptions,
    };

    navigate("/RentCost", { state: { data: dataToSend } });
    window.scrollTo(0, 0);
  };

  // Navigate back using window.history
  const handlePrevious = () => {
    window.history.back();
  };

  const tukQuantity = [
    {
      tukQun: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
  ];
  const driQuantity = {
    driQun: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    driCost: `25.00`,
  };

  const option = [
    {
      item: `Camping Kit`,
      deposit: `Not Required`,
      cost: `5.00`,
      quantity: ["1", "2", "3", "4"],
    },
    {
      item: `Adventure Kit`,
      deposit: `Not Required`,
      cost: `5.00`,
      quantity: ["1", "2", "3", "4", "5", "6"],
    },
    {
      item: `Seat Belt`,
      deposit: `Not Required`,
      cost: `5.00`,
      quantity: ["1", "2", "3", "4"],
    },
    {
      item: `Big Bluetooth Speakers`,
      deposit: `Not Required`,
      cost: `5.00`,
      quantity: ["1", "2", "3"],
    },
    {
      item: `Baby Seat`,
      deposit: `Not Required`,
      cost: `5.00`,
      quantity: ["1", "2", "3", "4", "5", "6"],
    },
    {
      item: `Cooler / Esky`,
      deposit: `Not Required`,
      cost: `5.00`,
      quantity: ["1", "2", "3", "4", "5", "6", "7"],
    },
  ];

  const licence = [
    {
      licItem: `We'll arrange for your local license. It'll be prepared for you upon your arrival within a day.`,
      licAction: `You must choose at least one licensing option.`,
      licCost: `40.00`,
      licDeposit: `Not Required`,
      licQuantity: ["1", "2", "3", "4", "5"],
    },
    {
      licItem: `I need someone to transport my tuktuk between Kandy, Hatton, or Nanu Oya and Ella, or vice versa, to facilitate my train journey. Excluding fuel expenses.`,
      licAction: `Optional`,
      licCost: `45.00`,
      licDeposit: `Not Required`,
      licQuantity: ["1", "2", "3", "4", "5"],
    },
  ];

  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${wallpaper7})` }}
    >
      <Navbar />
      <div className="relative mb-10 pt-28">
        <div className="mx-0 md:mx-8 lg:mx-0">
          <div className="p-5 bg-gray-200 lg:mx-10 xl:mx-44 rounded-xl">
            {/* ===========================Reservation Details============================= */}
            <div>
              <h1 className="font-bold uppercase xl:text-3xl lg:text-2xl md:text-xl text-lg pt-5 ">
                Reservation Details
              </h1>
              <div className="justify-center grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4">
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 order-1 lg:order-none">
                  Period
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 order-5 lg:order-none">
                  Pick-Up
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 order-9 lg:order-none">
                  Return
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base order-2 lg:order-none">
                  Start Date:{" "}
                  <span className="font-bold text-red-500">{pickupDate}</span>{" "}
                  Time:{" "}
                  <span className="font-bold text-red-500">{pickupTime}</span>
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base order-6 lg:order-none">
                  Start Location:{" "}
                  <span className="font-bold text-red-500 ">{pickupCity} </span>
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base order-10 lg:order-none">
                  End Location:{" "}
                  <span className="font-bold text-red-500 ">{returnCity} </span>
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base pt-2 order-3 lg:order-none">
                  Return Date:{" "}
                  <span className="font-bold text-red-500 ">{returnDate}</span>{" "}
                  Time:{" "}
                  <span className="font-bold text-red-500 ">{returnTime} </span>
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base pt-2 order-7 lg:order-none">
                  Sri Lanka
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base pt-2 order-11 lg:order-none">
                  Sri Lanka
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base pt-2 order-4 lg:order-none">
                  Duration Days:{" "}
                  <span className="font-bold text-red-500 ">
                    {durationDays}
                  </span>
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base pt-2 order-8 lg:order-none">
                  Fee:{" "}
                  <span className="font-bold text-red-500">
                    {" "}
                    $ {pickupFee} USD
                  </span>
                </p>
                <p className="font-bold text-cyan-600 md:text-lg text-base pt-2 order-12 lg:order-none">
                  Fee:{" "}
                  <span className="font-bold text-red-500 ">
                    $ {returnFee} USD
                  </span>
                </p>
              </div>
            </div>
            {/* =============================Selected TukTuk=============================== */}
            <div>
              <h1 className="font-bold uppercase xl:text-3xl lg:text-2xl md:text-xl text-lg pt-10">
                Selected TukTuk
              </h1>
              <div className="justify-center grid lg:grid-cols-4 grid-cols-1 font-bold">
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Tuktuk Type
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Total
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Deposit
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Quantity
                </p>
                <p className="md:text-lg text-base text-center lg:text-left pt-5 lg:pt-0">
                  {" "}
                  <span className="text-cyan-600 lg:text-black">{vehicle}</span>
                </p>
                <p className="md:text-lg text-base text-center pt-5 lg:pt-0">
                  {" "}
                  <span className="lg:hidden">Total: </span>$ {totalPrice}{" "}
                  <span className="lg:hidden">USD</span>
                </p>
                <p className="md:text-lg text-base text-center">
                  {" "}
                  <span className="lg:hidden">Deposit</span> $ {deposit}
                </p>
                <div className="flex justify-center items-center lg:items-baseline pt-5 lg:pt-0">
                  <span className="lg:hidden">Quantity:</span>&nbsp;
                  <select
                    name="tukQuantity"
                    id="tukQuantity"
                    className="h-8 w-28 text-center rounded-lg"
                    value={selectedTukQuantity || ""}
                    onChange={(e) => setSelectedTukQuantity(e.target.value)}
                  >
                    <option value="">Select</option>
                    {tukQuantity[0].tukQun.map((quantity, index) => (
                      <option key={index} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                </div>
                <hr className="h-0.5 bg-black my-8 lg:hidden" />
                <p className="md:text-lg text-base text-center lg:text-left pt-5 lg:pt-4">
                  <span className="text-cyan-600 lg:text-black">
                    Driver (If you Need)
                  </span>
                </p>
                <div>
                  <p className="md:text-lg text-base text-center pt-5 lg:pt-4">
                    {" "}
                    $ {driQuantity.driCost} / Per Driver
                  </p>
                </div>
                <p className="text-center md:text-lg text-base pt-0 lg:pt-4">
                  Not Requird
                </p>
                <div className="flex justify-center items-center pt-5 lg:pt-4">
                  <span className="lg:hidden">Quantity:</span>&nbsp;
                  <select
                    name="driQuantity"
                    id="driQuantity"
                    className="h-8 w-28 text-center rounded-lg"
                    value={selectedDriQuantity.quantity || ""}
                    onChange={(e) =>
                      setSelectedDriQuantity({
                        quantity: e.target.value,
                        cost: driQuantity.driCost,
                      })
                    }
                  >
                    <option value="">Select</option>
                    {driQuantity.driQun.map((quantity, index) => (
                      <option key={index} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* =============================licence and tuktuk deliver=============================== */}
            <div>
              <h1 className="font-bold uppercase xl:text-3xl lg:text-2xl md:text-xl text-lg pt-10">
                licence and tuktuk deliver
              </h1>
              <div className="justify-center grid lg:grid-cols-4 grid-cols-1 font-bold">
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Action
                </p>
                <p className="bg-[#54B435] text-right text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Deposit
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Cost
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Quantity
                </p>
                {licence.map((l, index) => (
                  <>
                    <div className="flex lg:justify-start lg:mb-5 mt-5 lg:mt-0 justify-center md:text-lg text-base xl:w-[400px] lg:w-[320px] text-justify lg:pr-2">
                      <span className="text-black">
                        {l.licItem}{" "}
                        <span className="text-red-500">{l.licAction}</span>
                      </span>
                    </div>

                    <div className="flex lg:justify-end justify-center md:text-lg text-base lg:mt-0 mt-5">
                      {" "}
                      <span className="lg:hidden">Deposit:</span>
                      &nbsp;
                      {l.licDeposit}
                    </div>
                    <div className="flex lg:justify-center justify-center md:text-lg text-base">
                      {" "}
                      <span className="lg:hidden">Cost:</span>
                      &nbsp;
                      {l.licCost} USD
                    </div>
                    <div className="flex justify-center mt-10 lg:mt-0">
                      <span className="lg:hidden">Quantity:</span>&nbsp;
                      <div key={index} className="">
                        <select
                          name={`licQuantity-${index}`}
                          id={`licQuantity-${index}`}
                          className="h-8 text-center rounded-lg w-28"
                          value={selectedLicOptions[index]?.quantity || ""}
                          onChange={(e) => {
                            const updatedOptions = [...selectedLicOptions];
                            updatedOptions[index] = {
                              ...updatedOptions[index],
                              quantity: e.target.value,
                              cost: l.licCost,
                              item: l.licItem,
                            };
                            setSelectedLicOptions(updatedOptions);
                          }}
                        >
                          <option value="">Select</option>
                          {l.licQuantity.map((quantity, qIndex) => (
                            <option key={qIndex} value={quantity}>
                              {quantity}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <hr className="h-0.5 bg-black mt-5 lg:hidden" />
                  </>
                ))}
              </div>
            </div>
            {/* ==============================Rental Options=============================== */}
            <div>
              <h1 className="font-bold uppercase xl:text-3xl lg:text-2xl md:text-xl text-lg pt-10">
                Rental Options
              </h1>
              <div className="justify-center grid lg:grid-cols-4 grid-cols-1 font-bold">
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Extra
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Deposit
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Cost
                </p>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Quantity
                </p>
                {option.map((p, index) => (
                  <>
                    <div className="flex lg:justify-start lg:mb-10 mt-5 lg:mt-0 justify-center md:text-lg text-base">
                      <span className="text-cyan-600 lg:hidden">Item:</span>
                      &nbsp;
                      <span className="text-cyan-600 lg:text-black">
                        {p.item}
                      </span>
                    </div>
                    <div className="flex justify-center md:text-lg text-base">
                      <span className="lg:hidden">Deposit:</span>
                      &nbsp;{p.deposit}
                    </div>
                    <div className="flex justify-center md:text-lg text-base">
                      {" "}
                      <span className="lg:hidden">Cost:</span>
                      &nbsp;
                      {p.cost} USD
                    </div>
                    <div className="flex justify-center mt-10 lg:mt-0">
                      <span className="lg:hidden">Quantity:</span>&nbsp;
                      <div key={index} className="">
                        <select
                          name={`quantity-${index}`}
                          id={`quantity-${index}`}
                          className="h-8 text-center rounded-lg w-28"
                          value={selectedOptions[index]?.quantity || ""}
                          onChange={(e) => {
                            const updatedOptions = [...selectedOptions];
                            updatedOptions[index] = {
                              ...updatedOptions[index],
                              quantity: e.target.value,
                              cost: p.cost,
                              item: p.item,
                              deposit: p.deposit,
                            };
                            setSelectedOptions(updatedOptions);
                          }}
                        >
                          <option value="">Select</option>
                          {p.quantity.map((quantity, qIndex) => (
                            <option key={qIndex} value={quantity}>
                              {quantity}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <hr className="h-0.5 bg-black mt-5 lg:hidden" />
                  </>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-5 xl:mt-0 gap-x-16">
              <button
                onClick={handlePrevious}
                className="bg-[#54B435] hover:bg-[#F0FF42] transition-colors duration-300  py-2 px-4 font-bold md:text-xl text-base text-white hover:text-black rounded-xl"
              >
                Previous
              </button>
              <button
                onClick={handleContinue}
                className="bg-[#54B435] hover:bg-[#F0FF42] transition-colors duration-300  py-2 px-4 font-bold md:text-xl text-base text-white hover:text-black rounded-xl"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

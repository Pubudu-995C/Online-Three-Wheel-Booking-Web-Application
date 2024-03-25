import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import wallpaper7 from "../images/wallpapers/wallpaper7.jpg";

export default function RentOption() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState({});

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
  } = data || {};

  const handleContinue = () => {
    const selectedTukQuantity = selectedQuantities["tukQuantity"];
    const selectedDriQuantity = selectedQuantities["driQuantity"];
    const selectedDriCost = selectedDrivers["driCost"];

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
      totalPrice,
      deposit,
      tukQuantity: selectedTukQuantity,
      driQuantity: selectedDriQuantity,
      driCost: selectedDriCost,
      options: selectedOptions,
    };

    navigate("/RentCost", { state: { data: dataToSend } });
    window.scrollTo(0, 0);
  };

  const handleQuantityChange = (index, value, item, cost) => {
    if (index === "driQuantity") {
      setSelectedQuantities({ ...selectedQuantities, [index]: value });
      setSelectedDrivers({ driCost: cost });
    } else {
      setSelectedQuantities({ ...selectedQuantities, [index]: value });
      if (value !== "") {
        if (index !== "tukQuantity") {
          const existingOptionIndex = selectedOptions.findIndex(
            (option) => option.item === item,
          );

          if (existingOptionIndex !== -1) {
            const updatedOptions = [...selectedOptions];
            updatedOptions[existingOptionIndex] = {
              ...updatedOptions[existingOptionIndex],
              quantity: value,
            };
            setSelectedOptions(updatedOptions);
          } else {
            setSelectedOptions([
              ...selectedOptions,
              { item, cost, quantity: value },
            ]);
          }
        }
      } else {
        setSelectedOptions(
          selectedOptions.filter((option) => option.item !== item),
        );
      }
    }
  };

  const tukQuantity = [
    {
      tukQun: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
  ];
  const driQuantity = [
    {
      driQun: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      driCost: `25.00`,
    },
  ];

  const option = [
    {
      item: `Camping Kit`,
      deposit: `Not Required`,
      cost: `2.00`,
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
      cost: `8.00`,
      quantity: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    {
      item: `Big Bluetooth Speakers`,
      deposit: `Not Required`,
      cost: `10.00`,
      quantity: ["1", "2", "3"],
    },
    {
      item: `Baby Seat`,
      deposit: `Not Required`,
      cost: `12.00`,
      quantity: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      item: `Cooler / Esky`,
      deposit: `Not Required`,
      cost: `10.00`,
      quantity: ["1", "2", "3", "4", "5", "6", "7"],
    },
    {
      item: `Train Transfer`,
      deposit: `Not Required`,
      cost: `20.00`,
      quantity: ["1", "2", "3", "4", "5"],
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
          <div className="p-5 bg-gray-200 lg:mx-20 xl:mx-52 rounded-xl">
            {/* ===========================Reservation Details============================= */}
            <div>
              <h1 className="mt-5 md:text-xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg">
                Reservation Details
              </h1>
              <div className="justify-center grid-cols-3 lg:grid lg:space-x-10">
                <div>
                  <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 ">
                    Period
                  </p>
                  <div className="space-y-2 md:text-lg text-base xl:w-[350px] lg:w-[200px]">
                    <p className="font-bold text-cyan-600">
                      Start Date:{" "}
                      <span className="font-bold text-red-500 ">
                        {pickupDate}
                      </span>{" "}
                      Time:{" "}
                      <span className="font-bold text-red-500 ">
                        {pickupTime}
                      </span>
                    </p>
                    <p className="font-bold text-cyan-600">
                      Return Date:{" "}
                      <span className="font-bold text-red-500 ">
                        {returnDate}
                      </span>{" "}
                      Time:{" "}
                      <span className="font-bold text-red-500 ">
                        {returnTime}{" "}
                      </span>
                    </p>
                    <p className="font-bold text-cyan-600">
                      Duration Days:{" "}
                      <span className="font-bold text-red-500 ">
                        {durationDays}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5">
                    Pick-Up
                  </p>
                  <div className="space-y-2 md:text-lg text-base xl:w-[300px] lg:w-[200px]">
                    <p className="font-bold text-cyan-600">
                      Start Location:{" "}
                      <span className="font-bold text-red-500 ">
                        {pickupCity}{" "}
                      </span>
                    </p>
                    <p className="font-bold text-cyan-600">Sri Lanka</p>
                    <p className="font-bold text-cyan-600">
                      Fee:{" "}
                      <span className="font-bold text-red-500 ">
                        {" "}
                        ${pickupFee}{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5">
                    Return
                  </p>
                  <div className="space-y-2 md:text-lg text-base xl:w-[300px] lg:w-[200px]">
                    <p className="font-bold text-cyan-600">
                      End Location:{" "}
                      <span className="font-bold text-red-500 ">
                        {returnCity}{" "}
                      </span>
                    </p>
                    <p className="font-bold text-cyan-600">Sri Lanka</p>
                    <p className="font-bold text-cyan-600">
                      Fee:{" "}
                      <span className="font-bold text-red-500 ">
                        ${returnFee}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ===========================Selected TukTuk============================= */}
            <div>
              <h1 className="md:text-xl font-bold text-left uppercase xl:text-3xl lg:text-2xl text-lg pt-14">
                Selected TukTuk
              </h1>
              <div className="justify-center grid-cols-4 text-lg font-bold lg:grid">
                <div className="xl:w-[300px] lg:w-[450px]">
                  <p className="hidden lg:block bg-[#54B435] text-center lg:text-left lg:pl-12 text-white font-bold xl:text-2xl lg:text-xl  py-2 my-5">
                    Tuktuk Type
                  </p>
                  <div>
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                      <div className="pb-10 mt-5 lg:flex lg:mt-0 xl:mt-0">
                        <div>
                          <p className="hidden lg:block pb-8 lg:pb-0 xl:pb-0 md:text-lg text-base">
                            {vehicle}
                          </p>
                          <p className="lg:hidden block pb-8 lg:pb-0 xl:pb-0 md:text-lg text-base text-cyan-600">
                            {vehicle}
                          </p>
                          <p className="hidden pb-8 mt-5 lg:block lg:pb-0 xl:pb-0">
                            Driver (If you Need)
                          </p>
                          <p className="lg:hidden md:text-lg text-base">
                            Total: ${totalPrice} USD
                          </p>
                          <p className="lg:hidden md:text-lg text-base pb-5">
                            Deposit: ${deposit}
                          </p>
                          <p className="lg:hidden md:text-lg text-base">
                            Quantity:{" "}
                            <select
                              name="tukQuantity"
                              id="tukQuantity"
                              className="md:h-8 text-center rounded-lg w-28"
                              value={selectedQuantities["tukQuantity"] || ""}
                              onChange={(e) =>
                                handleQuantityChange(
                                  "tukQuantity",
                                  e.target.value,
                                )
                              }
                            >
                              <option value="">Select</option>
                              {tukQuantity[0].tukQun.map((quantity, index) => (
                                <option key={index} value={quantity}>
                                  {quantity}
                                </option>
                              ))}
                            </select>
                          </p>
                        </div>
                        <hr className="h-0.5 bg-black my-8" />
                        <p className="pb-8 mt-10 lg:hidden md:text-lg text-base text-cyan-600">
                          Driver (If you Need)
                        </p>
                        {driQuantity.map((d) => (
                          <div>
                            <p className="lg:hidden md:text-lg text-base">
                              {" "}
                              $ {d.driCost} / Per Driver
                            </p>
                          </div>
                        ))}
                        <p className="lg:hidden md:text-lg text-base pb-5">
                          Not Requird
                        </p>
                        {/* Driver Mobile===================== */}
                        <div className="lg:hidden md:text-lg text-base">
                          Quantity:{" "}
                          <select
                            name="driQuantity"
                            id="driQuantity"
                            className="md:h-8 text-center rounded-lg w-28"
                            value={selectedQuantities["driQuantity"] || ""}
                            onChange={(e) =>
                              handleQuantityChange(
                                "driQuantity",
                                e.target.value,
                                "driver",
                                driQuantity[0].driCost,
                              )
                            }
                          >
                            <option value="">Select</option>
                            {driQuantity[0].driQun.map((quantity, index) => (
                              <option key={index} value={quantity}>
                                {quantity}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-right text-white font-bold xl:text-2xl lg:text-xl py-2 my-5">
                    Total
                  </p>
                  <div>
                    <p className="text-right"> $ {totalPrice}</p>
                    {driQuantity.map((d) => (
                      <div>
                        <p className="mt-5 text-right">
                          {" "}
                          $ {d.driCost} / Per Driver
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl py-2 my-5">
                    Deposit
                  </p>
                  <div>
                    <p className="text-center">$ {deposit}</p>
                    <p className="mt-5 text-center">Not Requird</p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl py-2 my-5">
                    Quantity
                  </p>
                  <div>
                    <div className="flex flex-col items-center gap-y-4">
                      <select
                        name="tukQuantity"
                        id="tukQuantity"
                        className="h-8 text-center rounded-lg w-28"
                        value={selectedQuantities["tukQuantity"] || ""}
                        onChange={(e) =>
                          handleQuantityChange("tukQuantity", e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        {tukQuantity[0].tukQun.map((quantity, index) => (
                          <option key={index} value={quantity}>
                            {quantity}
                          </option>
                        ))}
                      </select>
                      {/* Driver===================== */}
                      <select
                        name="driQuantity"
                        id="driQuantity"
                        className="h-8 text-center rounded-lg w-28"
                        value={selectedQuantities["driQuantity"] || ""}
                        onChange={(e) =>
                          handleQuantityChange(
                            "driQuantity",
                            e.target.value,
                            "driver",
                            driQuantity[0].driCost,
                          )
                        }
                      >
                        <option value="">Select</option>
                        {driQuantity[0].driQun.map((quantity, index) => (
                          <option key={index} value={quantity}>
                            {quantity}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===========================Rental Options============================= */}
            <div>
              <h1 className="pt-0 md:text-xl font-bold text-left uppercase xl:text-3xl lg:text-2xl text-lg">
                Rental Options
              </h1>
              <div className="justify-center grid-cols-4 text-lg font-bold lg:grid">
                <div>
                  <p className="hidden lg:block bg-[#54B435] text-center  text-white font-bold xl:text-2xl lg:text-xl py-2 my-5">
                    Extra
                  </p>
                  {option.map((p, index) => (
                    <div>
                      <div className="flex flex-col text-center lg:items-start lg:text-left">
                        <div className="hidden lg:block">
                          <div className="justify-center pb-10 mt-5 lg:flex xl:mt-0">
                            {p.item}
                          </div>
                        </div>
                        <div className="flex justify-center mt-5 lg:hidden md:text-lg text-base text-cyan-600">
                          Item: {p.item}
                        </div>
                        <div className="flex justify-center lg:hidden md:text-lg text-base">
                          Deposit: {p.deposit}
                        </div>
                        <div className="flex justify-center pb-5 lg:hidden md:text-lg text-base">
                          Cost: {p.cost} USD
                        </div>
                        <div className="justify-center pb-2 lg:hidden xl:mt-0">
                          <div className="flex justify-center mt-5 pb-9 xl:mt-0">
                            <div key={index} className="md:text-lg text-base ">
                              Quantity:{" "}
                              <select
                                name={`quantity-${index}`}
                                id={`quantity-${index}`}
                                className="md:h-8 text-center rounded-lg w-28"
                                value={selectedQuantities[index] || ""}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    index,
                                    e.target.value,
                                    p.item,
                                    p.cost,
                                  )
                                }
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
                        </div>
                        <hr className="h-0.5 bg-black" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-center  text-white font-bold xl:text-2xl lg:text-xl py-2 my-5">
                    Deposit
                  </p>
                  {option.map((p) => (
                    <div>
                      <div className="justify-center pb-10 mt-5 lg:flex xl:mt-0 ">
                        {p.deposit}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <p className=" bg-[#54B435] text-center  text-white font-bold xl:text-2xl lg:text-xl py-2 my-5">
                    Cost
                  </p>
                  {option.map((p) => (
                    <div>
                      <div className="justify-center pb-10 mt-5 lg:flex xl:mt-0 ">
                        {p.cost} USD
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-center  text-white font-bold xl:text-2xl lg:text-xl py-2 my-5 ">
                    Quantity
                  </p>
                  {option.map((p, index) => (
                    <div className="justify-center mt-5 lg:flex pb-9 xl:mt-0">
                      <div key={index}>
                        <select
                          name={`quantity-${index}`}
                          id={`quantity-${index}`}
                          className="h-8 text-center rounded-lg w-28"
                          value={selectedQuantities[index] || ""}
                          onChange={(e) =>
                            handleQuantityChange(
                              index,
                              e.target.value,
                              p.item,
                              p.cost,
                            )
                          }
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
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5 xl:justify-end xl:mt-0">
              <button
                onClick={handleContinue}
                className="bg-[#54B435] py-2 px-4 font-bold md:text-xl text-base text-white rounded-full mx-10"
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

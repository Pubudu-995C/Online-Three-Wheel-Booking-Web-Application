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
      options: selectedOptions,
    };

    navigate("/RentCost", { state: { data: dataToSend } });
  };

  const handleQuantityChange = (index, value, item, cost) => {
    setSelectedQuantities({ ...selectedQuantities, [index]: value });

    if (value !== "") {
      if (index !== "tukQuantity") {
        const existingOptionIndex = selectedOptions.findIndex(
          (option) => option.item === item,
        );

        if (existingOptionIndex !== -1) {
          // If the option already exists, update its quantity
          const updatedOptions = [...selectedOptions];
          updatedOptions[existingOptionIndex] = {
            ...updatedOptions[existingOptionIndex],
            quantity: value,
          };
          setSelectedOptions(updatedOptions);
        } else {
          // If the option doesn't exist, add it to selectedOptions
          setSelectedOptions([
            ...selectedOptions,
            { item, cost, quantity: value },
          ]);
        }
      }
    } else {
      // Remove the option if the quantity is deselected
      setSelectedOptions(
        selectedOptions.filter((option) => option.item !== item),
      );
    }
  };

  const tukQuantity = [
    {
      tukQun: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
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
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${wallpaper7})` }}
    >
      <Navbar />
      <div className="relative pt-28 mb-10">
        <div className="mx-8 lg:mx-0">
          <div className=" bg-gray-200 mx-full lg:mx-20 xl:mx-52 p-5 rounded-xl">
            <div>
              <h1 className="text-4xl font-bold uppercase mt-5">
                Reservation Details
              </h1>
              <div className="lg:grid grid-cols-3 lg:space-x-10 justify-center">
                <div>
                  <p className="bg-[#54B435] text-center text-white font-bold text-2xl py-2 my-5">
                    Period
                  </p>
                  <div className="space-y-2 text-lg xl:w-[350px] lg:w-[200px]">
                    <p className="font-semibold text-cyan-600">
                      Start Date:{" "}
                      <span className=" text-red-500 font-bold">
                        {pickupDate}
                      </span>{" "}
                      Time:{" "}
                      <span className=" text-red-500 font-bold">
                        {pickupTime}
                      </span>
                    </p>
                    <p className="font-semibold text-cyan-600">
                      Return Date:{" "}
                      <span className=" text-red-500 font-bold">
                        {returnDate}
                      </span>{" "}
                      Time:{" "}
                      <span className=" text-red-500 font-bold">
                        {returnTime}{" "}
                      </span>
                    </p>
                    <p className="font-semibold text-cyan-600">
                      Duration Days:{" "}
                      <span className=" text-red-500 font-bold">
                        {durationDays}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bg-[#54B435] text-center text-white font-bold text-2xl py-2 my-5">
                    Pick-Up
                  </p>
                  <div className="space-y-2 text-lg xl:w-[300px] lg:w-[200px]">
                    <p className="font-semibold text-cyan-600">
                      Start Location:{" "}
                      <span className=" text-red-500 font-bold">
                        {pickupCity}{" "}
                      </span>
                    </p>
                    <p className="font-semibold text-cyan-600">Sri Lanka</p>
                    <p className="font-semibold text-cyan-600">
                      Fee:{" "}
                      <span className=" text-red-500 font-bold">
                        {" "}
                        ${pickupFee}{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bg-[#54B435] text-center text-white font-bold text-2xl py-2 my-5">
                    Return
                  </p>
                  <div className="space-y-2 text-lg xl:w-[300px] lg:w-[200px]">
                    <p className="font-semibold text-cyan-600">
                      End Location:{" "}
                      <span className=" text-red-500 font-bold">
                        {returnCity}{" "}
                      </span>
                    </p>
                    <p className="font-semibold text-cyan-600">Sri Lanka</p>
                    <p className="font-semibold text-cyan-600">
                      Fee:{" "}
                      <span className=" text-red-500 font-bold">
                        ${returnFee}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-left pt-14 uppercase">
                Selected TukTuk
              </h1>
              <div className="lg:grid grid-cols-4 justify-center font-bold text-lg">
                <div className="xl:w-[300px] lg:w-[450px]">
                  <p className="hidden lg:block bg-[#54B435] text-center text-white font-bold text-2xl py-2 my-5">
                    Tuktuk Type
                  </p>
                  <div>
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                      <div className="lg:flex pb-10 mt-5 xl:mt-0">
                        <div>
                          <p className="pb-8">{vehicle}</p>
                          <p className="lg:hidden">Total: ${totalPrice} USD</p>
                          <p className="lg:hidden">Deposit: ${deposit}</p>
                          <p className="lg:hidden ">
                            Quantity:{" "}
                            <select
                              name="tukQuantity"
                              id="tukQuantity"
                              className="rounded-lg text-center h-8 w-28"
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-right text-white font-bold text-2xl py-2 my-5">
                    Total
                  </p>
                  <div>
                    <p className="text-right"> $ {totalPrice}</p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-center text-white font-bold text-2xl py-2 my-5">
                    Deposit
                  </p>
                  <div>
                    <p className="text-center">{deposit}</p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-center text-white font-bold text-2xl py-2 my-5">
                    Quantity
                  </p>
                  <div>
                    <div className="flex justify-center">
                      <select
                        name="tukQuantity"
                        id="tukQuantity"
                        className="rounded-lg text-center h-8 w-28"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-left pt-0 uppercase">
                Rental Options
              </h1>
              <div className="lg:grid grid-cols-4 justify-center font-bold text-lg">
                <div>
                  <p className="hidden lg:block bg-[#54B435] text-center  text-white font-bold text-2xl py-2 my-5">
                    Extra
                  </p>
                  {option.map((p, index) => (
                    <div>
                      <div className="flex flex-col lg:items-start text-center lg:text-left">
                        <div className="hidden lg:flex justify-center pb-10 mt-5 xl:mt-0">
                          {p.item}
                        </div>
                        <div className="lg:hidden flex justify-center mt-5">
                          Item: {p.item}
                        </div>
                        <div className="lg:hidden flex justify-center xl:mt-0">
                          Deposit: {p.deposit}
                        </div>
                        <div className="lg:hidden flex justify-center pb-5 xl:mt-0">
                          Cost: {p.cost} USD
                        </div>
                        <div className="lg:hidden justify-center pb-5 xl:mt-0">
                          <div className="flex pb-9 mt-5 xl:mt-0 justify-center">
                            <div key={index}>
                              Quantity:{" "}
                              <select
                                name={`quantity-${index}`}
                                id={`quantity-${index}`}
                                className="rounded-lg text-center h-8 w-28"
                                value={selectedQuantities[index] || ""}
                                onChange={(e) =>
                                  handleQuantityChange(index, e.target.value)
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
                <div>
                  <p className="hidden lg:block bg-[#54B435] text-center  text-white font-bold text-2xl py-2 my-5">
                    Deposit
                  </p>
                  {option.map((p) => (
                    <div>
                      <div className="hidden lg:flex justify-center pb-10 mt-5 xl:mt-0 ">
                        {p.deposit}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="hidden lg:block bg-[#54B435] text-center  text-white font-bold text-2xl py-2 my-5">
                    Cost
                  </p>
                  {option.map((p) => (
                    <div>
                      <div className="hidden lg:flex justify-center pb-10 mt-5 xl:mt-0 ">
                        {p.cost} USD
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="hidden lg:block bg-[#54B435] text-center  text-white font-bold text-2xl py-2 my-5">
                    Quantity
                  </p>
                  {option.map((p, index) => (
                    <div className="hidden lg:flex pb-9 mt-5 xl:mt-0 justify-center">
                      <div key={index}>
                        <select
                          name={`quantity-${index}`}
                          id={`quantity-${index}`}
                          className="rounded-lg text-center h-8 w-28"
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
            <div className="flex xl:justify-end justify-center xl:mt-0 mt-5">
              <button
                onClick={handleContinue}
                className="bg-[#54B435] py-2 px-4 font-bold text-xl text-white rounded-full mx-10"
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

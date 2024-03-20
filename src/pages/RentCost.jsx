import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import wallpaper7 from "../images/wallpapers/wallpaper7.jpg";

export default function RentCost() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};

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
    tukQuantity,
    options,
  } = data || {};

  const [formData, setFormData] = useState({
    title: "",
    lastName: "",
    address: "",
    state: "",
    country: "",
    email: "",
    firstName: "",
    dob: "",
    city: "",
    zipCode: "",
    phone: "",
    comments: "",
    agreeTerms: false,
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
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
      total,
      options,
      grandTotal,
      result,
      payNowPickUp,
      customerDetails: formData,
    };

    navigate("/ContactUs", { state: { data: dataToSend } });
  };

  // Convert totalPrice and deposit to numbers
  const parsedTotalPrice = parseFloat(totalPrice);
  const parsedDeposit = parseFloat(deposit);

  // Calculate the total price if tukQuantity is available, otherwise use totalPrice
  const total = tukQuantity ? parsedTotalPrice * tukQuantity : parsedTotalPrice;
  const result = tukQuantity ? parsedDeposit * tukQuantity : parsedDeposit;

  // Calculate the total cost of options
  let optionsTotal = 0;
  if (options && options.length > 0) {
    optionsTotal = options.reduce((acc, option) => {
      if (option.quantity) {
        acc += parseFloat(option.cost) * parseInt(option.quantity);
      }
      return acc;
    }, 0);
  }
  // Calculate the grand total
  const grandTotal = total + optionsTotal;

  // Calculate the "Pay Now / at Pick-up" amount
  const payNowPickUp = grandTotal + result;

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${wallpaper7})` }}
    >
      <Navbar />
      <div className="relative pt-28 mb-10">
        <div className="mx-8 lg:mx-0">
          {/* =========================RENTAL DETAILS============================= */}
          <div className=" bg-gray-200 mx-full lg:mx-20 xl:mx-52 p-5 rounded-xl">
            <div>
              <div>
                <h1 className="text-3xl font-bold uppercase mt-5">
                  Rental Details
                </h1>
              </div>
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:text-left text-center">
                <div className="mt-8">
                  <div>
                    <p className="text-2xl font-bold">Pick-up Location</p>
                    <p className="text-lg font-bold mt-4 text-red-500">
                      {pickupCity}
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="text-2xl font-bold">Pick-up Date & Time</p>
                    <p className="text-lg font-bold mt-4 text-red-500">
                      <span className="text-blue-600">Date: </span>
                      {pickupDate}{" "}
                      <span className=" text-blue-600">Time: </span>{" "}
                      {pickupTime}
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="text-2xl font-bold">Selected Cars</p>
                    <p className="text-lg font-bold mt-4 text-red-500">
                      {vehicle}
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <div>
                    <p className="text-2xl font-bold">Return Location</p>
                    <p className="text-lg font-bold mt-4 text-red-500">
                      {returnCity}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-2xl font-bold">Return Date & Time</p>
                    <p className="text-lg font-bold mt-4 text-red-500">
                      <span className="text-blue-600">Date: </span>
                      {returnDate} <span className="text-blue-600">Time: </span>{" "}
                      {returnTime}
                    </p>
                  </div>

                  <div className="mt-5 xl:text-right">
                    <p className="text-2xl font-bold">Price</p>
                    <p className="text-lg font-bold mt-4 text-red-500">
                      {tukQuantity
                        ? `$ ${totalPrice} x ${tukQuantity}`
                        : `$ ${totalPrice}`}
                    </p>
                  </div>
                </div>

                <div className="grid grid-rows-1 mt-8 xl:text-right">
                  <div className="">
                    <p className="text-2xl font-bold">Period</p>
                    <p className="text-lg font-bold mt-4 text-red-500">
                      {durationDays} Days
                    </p>
                  </div>
                  <div />
                  <div className="mt-5">
                    <p className="text-2xl font-bold">Total</p>
                    <p className="text-lg font-bold mt-4 text-red-500">
                      {total} USD
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-[#379237] h-3 mt-5 rounded-full" />
            {/* ==============================PICK DETAILS=============================== */}

            <div>
              <div className="grid xl:grid-cols-3 xl:text-left text-center mt-8">
                <p className="text-lg font-bold">Pick up fee</p>
                <p className="text-lg font-bold text-red-500 xl:text-right text-center">
                  $ {pickupFee}
                </p>
                <p className="text-lg font-bold text-red-500 flex xl:justify-end justify-center">
                  {pickupFee} USD
                </p>
              </div>
              <div className="grid xl:grid-cols-3 xl:text-left text-center mt-4">
                <p className="text-lg font-bold">Return fee</p>
                <p className="text-lg font-bold text-red-500 xl:text-right text-center">
                  $ {returnFee}
                </p>
                <p className="text-lg font-bold text-red-500 flex xl:justify-end justify-center">
                  {returnFee} USD
                </p>
              </div>
            </div>
            <hr className="bg-[#379237] h-3 mt-5 rounded-full" />
            {/* ===============================Extra Options============================= */}
            <div>
              {options && options.length > 0 && (
                <div>
                  <h1 className="text-3xl font-bold uppercase my-5">
                    Extra Options
                  </h1>
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="grid xl:grid-cols-3 grid-cols-1 text-center xl:text-left font-bold text-lg mt-5"
                    >
                      <p>{option.item}</p>
                      {option.quantity && (
                        <p className="text-red-500 xl:text-right text-center">
                          $ {option.cost}{" "}
                          {option.quantity ? `x ${option.quantity}` : ""}
                        </p>
                      )}
                      <p className="xl:text-right text-red-500 text-center">
                        {option.quantity
                          ? ` ${
                              parseFloat(option.cost) *
                              parseInt(option.quantity)
                            }`
                          : ""}{" "}
                        USD
                      </p>
                    </div>
                  ))}
                  <hr className="bg-[#379237] h-3 mt-5 rounded-full" />
                </div>
              )}
            </div>
            {/* ===============================TOTAL================================== */}
            <div>
              <h1 className="text-3xl font-bold uppercase mt-5">Total</h1>
              <div className="grid xl:grid-cols-3">
                <div />
                <div className="grid grid-rows-4 gap-y-2 xl:gap-x-0 text-xl font-bold text-center xl:text-left">
                  <p>Grand Total:</p>
                  <p className="xl:hidden text-lg font-bold text-red-500">
                    {grandTotal.toFixed(2)} USD
                  </p>
                  <p className="flex gap-x-5 xl:justify-between justify-center">
                    <p>Deposit:</p>
                    <p className="text-lg text-red-500">
                      {tukQuantity
                        ? `$ ${deposit} x ${tukQuantity}`
                        : `$ ${deposit}`}
                    </p>
                  </p>
                  <p className="xl:hidden text-lg font-bold text-red-500">
                    {result.toFixed(2)} USD
                  </p>
                  <p>Pay Now / at Pick-up:</p>
                  <p className="xl:hidden text-lg font-bold text-red-500">
                    {payNowPickUp.toFixed(2)} USD
                  </p>
                  <p>Pay Later:</p>
                  <p className="xl:hidden text-lg font-bold text-red-500">
                    USD
                  </p>
                </div>
                <div className="hidden xl:block">
                  <div className="grid grid-rows-4 gap-y-2 text-lg font-bold text-red-500 text-right">
                    <p>{grandTotal.toFixed(2)} USD</p>
                    <p>{result.toFixed(2)} USD</p>
                    <p>{payNowPickUp.toFixed(2)} USD</p>
                    <p>USD</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-[#379237] h-3 mt-5 rounded-full" />
            {/* =======================================CUSTOMER DETAILS========================================== */}
            <div>
              <h1 className="text-3xl font-bold uppercase mt-5">
                Customer Details
              </h1>
            </div>
            <div className="mt-10">
              <form action="" method="post">
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-x-10 xl:mx-10">
                  <div className="font-bold space-y-5">
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="title">Title</label>
                      <select
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      >
                        <option value=""></option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Miss.">Miss.</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof.">Prof.</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                  </div>
                  <div className="font-bold space-y-5">
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="dob">Date of Birth:</label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={formData.dob}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="city">City:</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="zipCode">Zip Code:</label>
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="p-2 rounded-full mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="comments">Additional Comments:</label>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        cols="60"
                        value={formData.comments}
                        onChange={handleFormChange}
                        className="p-4 mt-2 rounded-3xl resize-none"
                      ></textarea>
                    </div>
                    <div className="space-x-2 flex xl:justify-center items-center">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleFormChange}
                        className="w-6 h-5"
                      />
                      <label htmlFor="">
                        I agree with the terms & conditions
                      </label>
                    </div>
                  </div>
                  <div className="font-bold">
                    <div className="space-y-5">
                      <label htmlFor="">Pay by</label>
                      <p>
                        Pay for your tuktuk using our secure credit card payment
                        gateway.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center xl:mt-0 mt-10">
                  <input
                    type="submit"
                    value="Confirm"
                    onClick={handleConfirm}
                    className="bg-[#379237] hover:bg-[#F0FF42] transition-colors duration-300 py-2 px-5 text-2xl text-white hover:text-black font-bold rounded-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

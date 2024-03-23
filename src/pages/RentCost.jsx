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
    driQuantity,
    driCost,
    options,
  } = data || {};
  console.log(data);

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

  // Calculate total driver cost
  const totalDriverCost = driQuantity
    ? driQuantity * driCost * durationDays
    : 0;

  // Calculate the grand total
  const grandTotal = total + optionsTotal + totalDriverCost;

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
      driQuantity,
      driCost,
      totalDriverCost,
    };

    navigate("/ContactUs", { state: { data: dataToSend } });
  };

  // Calculate the "Pay Now / at Pick-up" amount
  const payNowPickUp = grandTotal + result;

  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${wallpaper7})` }}
    >
      <Navbar />
      <div className="relative mb-10 pt-28">
        <div className="md:mx-8 lg:mx-0">
          {/* =========================RENTAL DETAILS============================= */}
          <div className="p-5 bg-gray-200 mx-full lg:mx-20 xl:mx-52 rounded-xl">
            <div>
              <div>
                <h1 className="mt-5 md:text-xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg">
                  Rental Details
                </h1>
              </div>
              <div className="grid grid-cols-1 text-center xl:grid-cols-3 lg:grid-cols-2 xl:text-left">
                <div className="mt-8">
                  <div>
                    <p className="md:text-2xl text-xl font-bold">
                      Pick-up Location
                    </p>
                    <p className="hidden lg:block mt-4 text-lg font-bold text-red-500">
                      {pickupCity}
                    </p>
                    {/* ==============Mobile Response========== */}
                    <p className="lg:hidden mb-4 text-lg font-bold text-red-500">
                      {pickupCity}
                    </p>
                    <div className="lg:hidden">
                      <p className="md:text-2xl text-xl font-bold">
                        Pick-up Date & Time
                      </p>
                      <p className="mb-4 text-lg font-bold text-red-500">
                        <span className="text-blue-600">Date: </span>
                        {pickupDate}{" "}
                        <span className="text-blue-600 ">Time: </span>{" "}
                        {pickupTime}
                      </p>
                      <hr className="h-2 bg-[#54B435] rounded-full my-5" />
                      <p className="md:text-2xl text-xl font-bold">
                        Return Location
                      </p>
                      <p className="mb-4 text-lg font-bold text-red-500">
                        {returnCity}
                      </p>
                      <p className="md:text-2xl text-xl font-bold">
                        Return Date & Time
                      </p>
                      <p className="mb-4 text-lg font-bold text-red-500">
                        <span className="text-blue-600">Date: </span>
                        {returnDate}{" "}
                        <span className="text-blue-600">Time: </span>{" "}
                        {returnTime}
                      </p>
                      <hr className="h-2 bg-[#54B435] rounded-full my-5" />
                      <p className="md:text-2xl text-xl font-bold">Period</p>
                      <p className="mb-4 text-lg font-bold text-red-500">
                        {durationDays} Days
                      </p>
                      <hr className="h-2 bg-[#54B435] rounded-full my-5" />
                      <p className="md:text-2xl text-xl font-bold">
                        Selected Cars
                      </p>
                      <p className="mb-4 text-lg font-bold text-red-500">
                        {vehicle}
                      </p>
                      <p className="md:text-2xl text-xl font-bold">Price</p>
                      <p className="mb-4 text-lg font-bold text-red-500">
                        {tukQuantity
                          ? `$ ${totalPrice} x ${tukQuantity}`
                          : `$ ${totalPrice}`}
                      </p>
                      <p className="md:text-2xl text-xl font-bold">Total</p>
                      <p className="mb-4 text-lg font-bold text-red-500">
                        {total} USD
                      </p>
                      <hr className="h-2 bg-[#54B435] rounded-full my-5" />
                      {driQuantity && (
                        <div>
                          <p className="md:text-2xl text-xl font-bold">
                            Selected Driver(s)
                          </p>
                          <p className="mb-4 text-lg font-bold text-red-500">
                            {driQuantity} Driver(s)
                          </p>
                          <p className="md:text-2xl text-xl font-bold">
                            Driver Price
                          </p>
                          <p className="mb-4 text-lg font-bold text-red-500">
                            {`${driQuantity} Driver(s) x ${driCost} USD x ${durationDays} Days`}
                          </p>
                          <p className="md:text-2xl text-xl font-bold">
                            Driver Total
                          </p>
                          <p className="mb-4 text-lg font-bold text-red-500">
                            {totalDriverCost} USD
                          </p>
                        </div>
                      )}
                    </div>
                    {/* ==============End of Mobile Response ========== */}
                  </div>
                  <div className="hidden mt-5 lg:block">
                    <p className="text-2xl font-bold">Pick-up Date & Time</p>
                    <p className="mt-4 text-lg font-bold text-red-500">
                      <span className="text-blue-600">Date: </span>
                      {pickupDate}{" "}
                      <span className="text-blue-600 ">Time: </span>{" "}
                      {pickupTime}
                    </p>
                  </div>
                  <div className="hidden mt-5 lg:block">
                    <p className="text-2xl font-bold">Selected Cars</p>
                    <p className="mt-4 text-lg font-bold text-red-500">
                      {vehicle}
                    </p>
                  </div>
                  {driQuantity && (
                    <div className="hidden mt-5 lg:block">
                      <p className="text-2xl font-bold">Selected Driver(s)</p>
                      <p className="mt-4 text-lg font-bold text-red-500">
                        {driQuantity} Driver(s)
                      </p>
                    </div>
                  )}
                </div>
                <div className="hidden mt-8 lg:block">
                  <div>
                    <p className="text-2xl font-bold">Return Location</p>
                    <p className="mt-4 text-lg font-bold text-red-500">
                      {returnCity}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-2xl font-bold">Return Date & Time</p>
                    <p className="mt-4 text-lg font-bold text-red-500">
                      <span className="text-blue-600">Date: </span>
                      {returnDate} <span className="text-blue-600">Time: </span>{" "}
                      {returnTime}
                    </p>
                  </div>

                  <div className="mt-5 xl:text-right ">
                    <p className="text-2xl font-bold">Price</p>
                    <p className="mt-4 text-lg font-bold text-red-500">
                      {tukQuantity
                        ? `$ ${totalPrice} x ${tukQuantity}`
                        : `$ ${totalPrice}`}
                    </p>
                  </div>
                  {driQuantity && (
                    <div className="mt-5 xl:text-right ">
                      <p className="text-2xl font-bold">Driver Price</p>
                      <p className="mt-4 text-lg font-bold text-red-500">
                        {`${driQuantity} Driver(s) x ${driCost} USD x ${durationDays} Days`}
                      </p>
                    </div>
                  )}
                </div>

                <div className="hidden lg:block">
                  <div className="grid mt-8 xl:grid-rows-3 xl:text-right">
                    <div>
                      <p className="text-2xl font-bold">Period</p>
                      <p className="mt-4 text-lg font-bold text-red-500">
                        {durationDays} Days
                      </p>
                    </div>
                    <div />
                    <div className="mb-5">
                      <p className="text-2xl font-bold">Total</p>
                      <p className="mt-4 text-lg font-bold text-red-500">
                        {total} USD
                      </p>
                    </div>
                    {driQuantity && (
                      <div>
                        <p className="text-2xl font-bold">Driver Total</p>
                        <p className="mt-4 text-lg font-bold text-red-500">
                          {totalDriverCost} USD
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-[#379237] h-3 mt-5 rounded-full" />
            {/* ==============================PICK DETAILS=============================== */}

            <div>
              <div className="grid mt-8 text-center xl:grid-cols-3 xl:text-left">
                <p className="text-lg font-bold">Pick up fee</p>
                <p className="text-lg font-bold text-center text-red-500 xl:text-right">
                  $ {pickupFee}
                </p>
                <p className="flex justify-center text-lg font-bold text-red-500 xl:justify-end">
                  {pickupFee} USD
                </p>
              </div>
              <div className="grid mt-4 text-center xl:grid-cols-3 xl:text-left">
                <p className="text-lg font-bold">Return fee</p>
                <p className="text-lg font-bold text-center text-red-500 xl:text-right">
                  $ {returnFee}
                </p>
                <p className="flex justify-center text-lg font-bold text-red-500 xl:justify-end">
                  {returnFee} USD
                </p>
              </div>
            </div>
            <hr className="bg-[#379237] h-3 mt-5 rounded-full" />
            {/* ===============================Extra Options============================= */}
            <div>
              {options && options.length > 0 && (
                <div>
                  <h1 className="my-5 md:text-xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg">
                    Extra Options
                  </h1>
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 mt-5 text-lg font-bold text-center xl:grid-cols-3 xl:text-left"
                    >
                      <p>{option.item}</p>
                      {option.quantity && (
                        <p className="text-center text-red-500 xl:text-right">
                          $ {option.cost}{" "}
                          {option.quantity ? `x ${option.quantity}` : ""}
                        </p>
                      )}
                      <p className="text-center text-red-500 xl:text-right">
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
              <h1 className="mt-5 md:text-xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg">
                Total
              </h1>
              <div className="grid xl:grid-cols-3">
                <div />
                <div className="grid grid-rows-4 text-xl font-bold text-center gap-y-2 xl:gap-x-0 xl:text-left">
                  <p>Grand Total:</p>
                  <p className="text-lg font-bold text-red-500 xl:hidden">
                    {grandTotal.toFixed(2)} USD
                  </p>
                  <p className="flex justify-center gap-x-5 xl:justify-between">
                    <p>Deposit:</p>
                    <p className="text-lg text-red-500">
                      {tukQuantity
                        ? `$ ${deposit} x ${tukQuantity}`
                        : `$ ${deposit}`}
                    </p>
                  </p>
                  <p className="text-lg font-bold text-red-500 xl:hidden">
                    {result.toFixed(2)} USD
                  </p>
                  <p>Pay Now / at Pick-up:</p>
                  <p className="text-lg font-bold text-red-500 xl:hidden">
                    {payNowPickUp.toFixed(2)} USD
                  </p>
                  <p>Pay Later:</p>
                  <p className="text-lg font-bold text-red-500 xl:hidden">
                    USD
                  </p>
                </div>
                <div className="hidden xl:block">
                  <div className="grid grid-rows-4 text-lg font-bold text-right text-red-500 gap-y-2">
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
              <div>
                <h1 className="mt-5 md:text-xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg">
                  Customer Details
                </h1>
              </div>
              <div className="mt-10">
                <form action="" method="post">
                  <div className="hidden md:block">
                    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-x-3 xl:gap-x-10 xl:mx-10">
                      <div className="space-y-5 font-bold">
                        <div className="grid grid-cols-1 ">
                          <label htmlFor="title">Title</label>
                          <select
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleFormChange}
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="space-y-5 font-bold">
                        <div className="grid grid-cols-1 ">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleFormChange}
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
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
                            className="p-2 mt-2 rounded-full"
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
                            className="p-4 mt-2 resize-none rounded-3xl"
                          ></textarea>
                        </div>
                        <div className="flex items-center space-x-2 xl:justify-center">
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
                            Pay for your tuktuk using our secure credit card
                            payment gateway.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ==========================Mobile Response========================= */}
                  <div className="md:hidden">
                    <div className="grid grid-cols-1 font-bold text-sm space-y-5">
                      <div className="grid grid-cols-1 ">
                        <label htmlFor="title">Title</label>
                        <select
                          name="title"
                          id="title"
                          value={formData.title}
                          onChange={handleFormChange}
                          className="p-2 mt-2 rounded-full"
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
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleFormChange}
                          className="p-2 mt-2 rounded-full"
                        />
                      </div>
                      <div className="grid grid-cols-1 ">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleFormChange}
                          className="p-2 mt-2 rounded-full"
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
                          className="p-2 mt-2 rounded-full"
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
                          className="p-2 mt-2 rounded-full"
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
                          className="p-2 mt-2 rounded-full"
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
                          className="p-2 mt-2 rounded-full"
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
                          className="p-2 mt-2 rounded-full"
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
                          className="p-2 mt-2 rounded-full"
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
                          className="p-2 mt-2 rounded-full"
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
                          className="p-2 mt-2 rounded-full"
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
                          className="p-4 mt-2 resize-none rounded-3xl"
                        ></textarea>
                      </div>
                      <div className="flex items-center space-x-2 xl:justify-center my-5">
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
                      <div>
                        <div className="space-y-5">
                          <label htmlFor="">Pay by</label>
                          <p>
                            Pay for your tuktuk using our secure credit card
                            payment gateway.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ==========================End of Mobile Response========================= */}
                  <div className="flex justify-center mt-10 xl:mt-0">
                    <input
                      type="submit"
                      value="Confirm"
                      onClick={handleConfirm}
                      className="bg-[#379237] hover:bg-[#F0FF42] transition-colors duration-300 py-2 px-5 lg:text-2xl text-white hover:text-black font-bold rounded-full"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

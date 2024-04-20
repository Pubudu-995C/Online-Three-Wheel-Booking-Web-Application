import React, { useEffect, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import wallpaper7 from "../images/wallpapers/wallpaper7.jpg";

export default function RentCost() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data || null;

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
    vehiPrice,
    totalPrice,
    deposit,
    tukQuantity,
    driQuantity,
    driCost,
    options,
  } = data || {};

  // Convert totalPrice and deposit to numbers
  const parsedTotalPrice = parseFloat(totalPrice);
  const parsedDeposit = parseFloat(deposit);

  const parsedTotalPickup = parseFloat(pickupFee);
  const parsedTotalReturn = parseFloat(returnFee);

  // Calculate the total price if tukQuantity is available, otherwise use totalPrice
  const totVehicle = tukQuantity
    ? parsedTotalPrice * tukQuantity
    : parsedTotalPrice;

  const totDeposit = tukQuantity ? parsedDeposit * tukQuantity : parsedDeposit;

  // Calculate the total cost of options
  let optionsTotal = 0;
  if (options && options.length !== 0) {
    options.forEach((option) => {
      if (option) {
        optionsTotal =
          optionsTotal +
          parseFloat(option.cost) * parseInt(option.quantity) * durationDays;
      }
    });
  }

  // Calculate total driver cost
  const totalDriverCost = driQuantity
    ? driQuantity * driCost * durationDays
    : 0;

  //pick up and return fee
  const totpickupFee = !isNaN(parsedTotalPickup)
    ? tukQuantity
      ? parsedTotalPickup * tukQuantity
      : parsedTotalPickup
    : 0;

  const totreturnFee = !isNaN(parsedTotalReturn)
    ? tukQuantity
      ? parsedTotalReturn * tukQuantity
      : parsedTotalReturn
    : 0;

  const totalTransport = totpickupFee + totreturnFee;

  // Calculate the grand total
  const grandTotal =
    totVehicle + optionsTotal + totalDriverCost + totalTransport;

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

  const handleConfirm = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const requiredFields = [
      "title",
      "firstName",
      "lastName",
      "email",
      "phone",
      "agreeTerms",
      "dob",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }
    const dataToSend = {
      pickupCity,
      pickupDate,
      pickupTime,
      returnCity,
      returnDate,
      returnTime,
      durationDays,
      vehicle,
      totVehicle,
      options,
      optionsTotal,
      grandTotal,
      totDeposit,
      payNowPickUp,
      customerDetails: formData,
      driQuantity,
      driCost,
      totalDriverCost,
    };

    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/rent_vehicle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to insert data into database");
      }
      // send data for Success page Redirect
      const dataTo = {
        pickupCity,
        pickupDate,
        pickupTime,
        pickupFee,
      };
      // ===============
      navigate("/Success", { state: { data: dataTo } });
    } catch (error) {
      console.error("Error inserting data into database:", error);
    }
  };

  // Calculate the "Pay Now / at Pick-up" amount
  const payNowPickUp = grandTotal + totDeposit;

  // Navigate back using window.history
  const handlePrevious = () => {
    window.history.back();
  };

  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${wallpaper7})` }}
    >
      <Navbar />
      <div className="relative mb-10 pt-28">
        <div className="mx-0 md:mx-8 lg:mx-0">
          {/* =========================RENTAL DETAILS============================= */}
          <div className="p-5 bg-gray-200 mx-full lg:mx-10 xl:mx-44 rounded-xl">
            <div>
              <div>
                <h1 className="my-5 md:text-xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg">
                  Rental Details
                </h1>
              </div>
              <div className="grid grid-cols-1 text-center xl:grid-cols-3 lg:grid-cols-3 xl:text-left lg:text-left">
                <div className="mt-5 order-1 lg:order-none">
                  <p className="lg:text-xl xl:text-2xl font-bold">
                    Pick-up Location
                  </p>
                  <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                    {pickupCity}
                  </p>
                </div>
                <div className="mt-5 order-3 lg:order-none">
                  <p className="lg:text-xl xl:text-2xl font-bold">
                    Return Location
                  </p>
                  <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                    {returnCity}
                  </p>
                </div>
                <div className="mt-5 lg:text-right order-5 lg:order-none">
                  <p className="lg:text-xl xl:text-2xl font-bold">Period</p>
                  <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                    {durationDays} Days
                  </p>
                  <hr className="h-2 bg-[#54B435] rounded-full mt-5 lg:hidden" />
                </div>
                <div className="mt-5 order-2 lg:order-none">
                  <p className="lg:text-xl xl:text-2xl font-bold">
                    Pick-up Date & Time
                  </p>
                  <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                    <span className="text-blue-600">Date: </span>
                    {pickupDate} <span className="text-blue-600 ">Time: </span>{" "}
                    {pickupTime}
                  </p>
                  <hr className="h-2 bg-[#54B435] rounded-full mt-5 lg:hidden" />
                </div>
                <div className="mt-5 order-4 lg:order-none">
                  <p className="lg:text-xl xl:text-2xl font-bold">
                    Return Date & Time
                  </p>
                  <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                    <span className="text-blue-600">Date: </span>
                    {returnDate} <span className="text-blue-600">Time: </span>{" "}
                    {returnTime}
                  </p>
                  <hr className="h-2 bg-[#54B435] rounded-full mt-5 lg:hidden" />
                </div>
                <div />
                <div className="mt-5 order-6 lg:order-none">
                  <p className="lg:text-xl xl:text-2xl font-bold">
                    Selected Cars
                  </p>
                  <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                    {vehicle}
                  </p>
                </div>
                <div className="mt-5 lg:text-right order-7 lg:order-none">
                  <p className="lg:text-xl xl:text-2xl font-bold">Price</p>
                  <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-blue-600">
                    {tukQuantity
                      ? `$ ${vehiPrice} (Tuk-cost) x ${durationDays} Day(s) x ${tukQuantity} Tuk(s)`
                      : `$ ${totalPrice}`}
                  </p>
                </div>
                <div className="mt-5 lg:text-right order-8 lg:order-none">
                  <p className="lg:text-xl xl:text-2xl font-bold">Total</p>
                  <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                    {totVehicle} USD
                  </p>
                </div>

                {driQuantity && (
                  <div className="mt-5 order-9 lg:order-none">
                    <hr className="h-2 bg-[#54B435] rounded-full mb-5 lg:hidden" />
                    <p className="lg:text-xl xl:text-2xl font-bold">
                      Selected Driver(s)
                    </p>
                    <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                      {driQuantity} Driver(s)
                    </p>
                  </div>
                )}

                {driQuantity && (
                  <div className="mt-5 lg:text-right order-10 lg:order-none">
                    <p className="lg:text-xl xl:text-2xl font-bold">
                      Driver Price
                    </p>
                    <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-blue-600">
                      {`${driQuantity} Driver(s) x $${driCost} (Driver) x ${durationDays} Day(s)`}
                    </p>
                  </div>
                )}

                {driQuantity && (
                  <div className="mt-5 lg:text-right order-11 lg:order-none">
                    <p className="lg:text-xl xl:text-2xl font-bold">
                      Driver Total
                    </p>
                    <p className="lg:mt-4 xl:text-lg lg:text-base font-bold text-red-500">
                      {totalDriverCost} USD
                    </p>
                  </div>
                )}
              </div>
            </div>
            <hr className="bg-[#379237] h-3 mt-5 rounded-full" />
            {/* ==============================PICK DETAILS=============================== */}
            <div>
              <div className="grid md:grid-cols-3 text-center lg:text-left">
                <p className="lg:text-xl xl:text-2xl font-bold mt-5">
                  Pick up fee
                </p>
                <p className="xl:text-lg lg:text-base font-bold text-center text-blue-600 lg:text-right md:mt-5">
                  {tukQuantity
                    ? `$ ${pickupFee} (Per-tuk) x ${tukQuantity} Tuk(s)`
                    : `$ ${pickupFee}`}
                </p>
                <p className="flex justify-center xl:text-lg lg:text-base font-bold text-red-500 lg:justify-end md:mt-5">
                  {totpickupFee} USD
                </p>
                <p className="lg:text-xl xl:text-2xl font-bold mt-5">
                  Return fee
                </p>
                <p className="xl:text-lg lg:text-base font-bold text-center text-blue-600 lg:text-right md:mt-5">
                  {tukQuantity
                    ? `$ ${returnFee} (Per-tuk) x ${tukQuantity} Tuk(s)`
                    : `$ ${returnFee}`}
                </p>
                <p className="flex justify-center xl:text-lg lg:text-base font-bold text-red-500 lg:justify-end md:mt-5">
                  {totreturnFee} USD
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
                    <>
                      {option && (
                        <div
                          key={index}
                          className="grid grid-cols-1 mt-5 font-bold text-center lg:grid-cols-3 lg:text-left"
                        >
                          <p className="xl:text-lg lg:text-base">
                            {option.item}
                          </p>
                          {option.quantity && (
                            <p className="text-center text-blue-600 xl:text-right xl:text-lg lg:text-base">
                              $ {option.cost}{" "}
                              {option.quantity
                                ? `x ${option.quantity} (Qty) x ${durationDays} Day(s)`
                                : ""}
                            </p>
                          )}
                          <p className="text-center text-red-500 lg:text-right">
                            {option.quantity
                              ? ` ${
                                  parseFloat(option.cost) *
                                  parseInt(option.quantity) *
                                  durationDays
                                }`
                              : ""}{" "}
                            USD
                          </p>
                        </div>
                      )}
                    </>
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
              <div className="grid lg:grid-cols-3">
                <div />
                <div className="grid grid-rows-4 font-bold text-center gap-y-2 xl:gap-x-0 lg:text-left">
                  <p className="text-lg">Grand Total:</p>
                  <p className="text-base font-bold text-red-500 lg:hidden">
                    {grandTotal.toFixed(2)} USD
                  </p>
                  <p className="flex justify-center gap-x-5 lg:justify-between">
                    <p className="text-lg">Deposit:</p>
                    <p className="lg:text-lg text-base text-blue-600">
                      {tukQuantity
                        ? `$ ${deposit} x ${tukQuantity} Tuk(s)`
                        : `$ ${deposit}`}
                    </p>
                  </p>
                  <p className="text-base font-bold text-red-500 lg:hidden">
                    {totDeposit.toFixed(2)} USD
                  </p>
                  <p className="text-lg">Pay Now / at Pick-up:</p>
                  <p className="text-base font-bold text-red-500 lg:hidden">
                    {payNowPickUp.toFixed(2)} USD
                  </p>
                  <p className="text-lg">Pay Later:</p>
                  <p className="text-base font-bold text-red-500 lg:hidden">
                    USD
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="grid grid-rows-4 text-lg font-bold text-right text-red-500 gap-y-2">
                    <p>{grandTotal.toFixed(2)} USD</p>
                    <p>{totDeposit.toFixed(2)} USD</p>
                    <p>{payNowPickUp.toFixed(2)} USD</p>
                    <p>USD</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-[#379237] h-3 mt-5 rounded-full" />
            {/* ============================CUSTOMER DETAILS=============================== */}
            <div>
              <div>
                <h1 className="mt-5 md:text-xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg">
                  Customer Details
                </h1>
              </div>
              <div className="lg:mt-5">
                <form action="" method="post">
                  <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-x-3 lg:gap-x-5 xl:gap-x-10 xl:mx-10 space-y-5 font-bold lg:text-base text-sm">
                    <div className="grid grid-cols-1 pt-5 ">
                      <label htmlFor="title">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        className="p-2 mt-2 rounded-xl"
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
                      <label htmlFor="firstName">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleFormChange}
                        className="p-2 mt-2 rounded-xl"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleFormChange}
                        className="p-2 mt-2 rounded-xl"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="dob">
                        Date of Birth: <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        required
                        value={formData.dob}
                        onChange={handleFormChange}
                        className="p-2 mt-2 rounded-xl"
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
                        className="p-2 mt-2 rounded-xl"
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
                        className="p-2 mt-2 rounded-xl"
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
                        className="p-2 mt-2 rounded-xl"
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
                        className="p-2 mt-2 rounded-xl"
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
                        className="p-2 mt-2 rounded-xl"
                      />
                    </div>
                    <div className="grid grid-cols-1 ">
                      <label htmlFor="phone">
                        Phone: <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="p-2 mt-2 rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label htmlFor="email">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="p-2 mt-2 rounded-xl"
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
                        className="p-4 mt-2 resize-none rounded-xl"
                      ></textarea>
                      <div className="flex items-center space-x-2 xl:justify-center mt-2">
                        <span className="text-red-500">*</span>
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className="w-6 h-5"
                        />
                        <label
                          htmlFor=""
                          className=" hover:text-blue-600 cursor-pointer"
                        >
                          <a href> I agree with the terms & conditions</a>
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
                  <div className="flex justify-center mt-4 md:mt-5 xl:mt-0 gap-x-16">
                    <input
                      type="button"
                      value="Previous"
                      onClick={handlePrevious}
                      className="bg-[#379237] hover:bg-[#F0FF42] transition-colors duration-300 py-2 px-5 lg:text-2xl text-white hover:text-black font-bold rounded-xl cursor-pointer"
                    />
                    <input
                      type="submit"
                      value="Confirm"
                      onClick={handleConfirm}
                      className="bg-[#379237] hover:bg-[#F0FF42] transition-colors duration-300 py-2 px-5 lg:text-2xl text-white hover:text-black font-bold rounded-xl cursor-pointer"
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

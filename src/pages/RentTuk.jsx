import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import wallpaper7 from "../images/wallpapers/wallpaper7.jpg";
import vehicles from "../temporary/vehicles.json";

// Define a map of city fees
const cityFees = {
  "1. Negombo": 0,
  "2. Sigiriya": 80,
  "3. Dambulla": 70,
  "4. Anuradhapura": 80,
  "5. Polonnaruwa": 90,
  "6. Kandy": 50,
  "7. Kitulgala": 60,
  "8. Ella": 50,
  "9. Nuwara Eliya": 90,
  "10. Galle": 170,
  "11. Mirissa": 80,
  "12. Trincomalee": 120,
  "13. Nilaveli": 130,
  "14. Arugam Bay": 150,
  "15. Jaffna": 170,
};

export default function RentTuk() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || null;

  //Rederect homepage without data
  useEffect(() => {
    if (!formData) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [detail, setDetail] = useState([]);

  const vehicle = () => {
    setDetail(vehicles);
  };

  useEffect(() => {
    vehicle();
  }, []);

  if (!formData) {
    // Handle case where formData is not available
    return <div>No reservation details found.</div>;
  }

  const {
    pickupCity,
    pickupDate,
    pickupTime,
    returnCity,
    returnDate,
    returnTime,
  } = formData;

  // Calculate duration in days
  const startDate = new Date(pickupDate + " " + pickupTime);
  const endDate = new Date(returnDate + " " + returnTime);
  const durationDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

  // Get fees for the selected cities
  const pickupFee = cityFees[pickupCity];
  const returnFee = cityFees[returnCity];

  const handleChoose = (v) => {
    const dataToSend = {
      pickupCity,
      pickupDate,
      pickupTime,
      pickupFee,
      returnCity,
      returnDate,
      returnFee,
      returnTime,
      durationDays,
      vehicle: v.vehicle,
      totalPrice: durationDays * v.price,
      deposit: v.deposit,
      vehiPrice: v.price,
    };

    navigate("/RentOption", { state: { data: dataToSend } });
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${wallpaper7})` }}
    >
      <Navbar />
      <div className="relative mb-10 pt-28">
        <div className="mx-0 md:mx-8 lg:mx-0">
          <div className="p-5 bg-gray-200 mx-full lg:mx-10 xl:mx-44 rounded-xl">
            <h1 className="mt-5 md:text-2xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg">
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
                <span className="font-bold text-red-500 ">{durationDays}</span>
              </p>
              <p className="font-bold text-cyan-600 md:text-lg text-base pt-2 order-8 lg:order-none">
                Fee:{" "}
                <span className="font-bold text-red-500">
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
            {/* =======================Search Results=================== */}
            <div>
              <h1 className="md:text-2xl font-bold text-left uppercase xl:text-3xl lg:text-2xl text-lg pt-14">
                Search Results
              </h1>
              <div className="justify-center grid lg:grid-cols-3 grid-cols-1">
                <div className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5">
                  Class
                </div>
                <div className="bg-[#54B435] text-right text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Total
                </div>
                <div className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl md:text-xl text-lg md:py-2 my-5 hidden lg:block">
                  Deposit
                </div>

                {detail.length !== 0 &&
                  detail.map((v) => (
                    <>
                      <div className="lg:pb-10 lg:flex lg:w-[500px]">
                        <div>
                          <img
                            src={v.img}
                            alt=""
                            className="h-28 m-auto xl:h-38 lg:h-32 md:h-40"
                          />
                        </div>
                        <div>
                          <p className="pb-8 md:text-2xl font-bold xl:text-2xl lg:text-xl text-lg text-center">
                            {v.vehicle}
                          </p>
                          <p className="text-base font-bold lg:text-xl md:text-lg text-center lg:text-left">
                            {v.passenger}
                          </p>
                          <p className="text-base font-bold lg:text-xl md:text-lg text-center lg:text-left">
                            {v.fuel}
                          </p>
                          <p className="text-base font-bold lg:text-xl md:text-lg text-center lg:text-left">
                            {v.gear}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col text-right justify-center">
                        <p className="text-base font-bold lg:text-xl md:text-lg text-center lg:text-end">
                          Total Price: $ {durationDays * v.price}
                        </p>
                        <p className="text-base font-bold text-cyan-600 lg:text-xl md:text-lg text-center lg:text-end">
                          $ {v.price} /per day
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-y-5 lg:pb-0 pb-10">
                        <p className="text-base font-bold lg:text-xl md:text-lg">
                          {" "}
                          <span className="lg:hidden">Deposit: </span>${" "}
                          {v.deposit}
                        </p>
                        <button
                          onClick={() => handleChoose(v)}
                          className="bg-[#54B435] hover:bg-[#F0FF42] transition-colors duration-300 text-white hover:text-black xl:text-xl py-2 xl:px-8 lg:px-6 px-14 font-bold rounded-full"
                        >
                          Choose
                        </button>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

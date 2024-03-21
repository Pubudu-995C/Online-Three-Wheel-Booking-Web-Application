import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper7 from "../images/wallpapers/wallpaper7.jpg";
import vehicles from "../temporary/vehicles.json";

// Define a map of city fees
const cityFees = {
  "1. Colombo Bandaranaike International Airport / Katunayaka Office (+$0)": 0,
  "2. Negombo Main Office (+$0)": 0,
  "3. Colombo (+$15)": 15,
  "4. Mirissa (+$89)": 89,
  "5. Weligama (+$89)": 89,
  "6. Ella (+$40)": 40,
  "7. Hikkaduwa (+$59)": 59,
  "8. Galle / Unawatuna (+$70)": 70,
  "9. Kandy (+$59)": 59,
  "10. Arugam Bay (+$170)": 170,
  "11. Sigiriya / Dambulla (+$90)": 90,
  "12. Kalpitiya (+$60)": 60,
  "13. Trincomalee / Uppaveli / Nilaveli (+$150)": 150,
  "14. Tangalle (+$99)": 99,
  "15. Hiriketiya / Dickwella (+$80)": 80,
  "16. Anuradhapura (+$90)": 90,
  "17. Kataragama (+$133)": 133,
  "18. Matara (+$92)": 92,
  "19. Udawalawe (+$72)": 72,
  "20. Tissamaharama (+$110)": 110,
  "21. Jaffna (+$186)": 186,
  "22. Batticoala (+$160)": 160,
  "23. Bentota (+$46)": 46,
  "24. Nuwara Eliya (+$96)": 96,
  "25. Polonnaruwa (+$114)": 114,
  "26. Ahangama (+$80)": 80,
};

export default function RentTuk() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || {};

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
    };

    navigate("/RentOption", { state: { data: dataToSend } });
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${wallpaper7})` }}
    >
      <Navbar />
      <div className="relative mb-10 pt-28">
        <div className="mx-8 lg:mx-0">
          <div className=" bg-gray-200 mx-full lg:mx-20 xl:mx-52 p-5 rounded-xl">
            <h1 className="xl:text-3xl lg:text-2xl text-2xl font-bold uppercase mt-5">
              Reservation Details
            </h1>
            <div className="lg:grid grid-cols-3 lg:space-x-10 justify-center">
              <div>
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl text-xl py-2 my-5">
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
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl text-xl py-2 my-5">
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
                <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl text-xl py-2 my-5">
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
            <div>
              <h1 className="xl:text-3xl lg:text-2xl text-2xl font-bold text-left pt-14 uppercase">
                Search Results
              </h1>
              <div className="lg:grid grid-cols-3 justify-center">
                <div className="xl:w-[600px] lg:w-[450px]">
                  <p className="bg-[#54B435] text-center  text-white font-bold xl:text-2xl lg:text-xl text-xl py-2 my-5">
                    Class
                  </p>
                  <div>
                    {detail.length !== 0 && (
                      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        {detail.map((v) => (
                          <div className="lg:flex pb-10">
                            <div>
                              <img
                                src={v.img}
                                alt=""
                                className="h-40 xl:h-40 lg:h-32 m-auto"
                              />
                            </div>
                            <div>
                              <p className="text-2xl xl:text-2xl lg:text-xl font-bold pb-8">
                                {v.vehicle}
                              </p>
                              <p className="text-lg xl:text-lg lg:text-base font-bold">
                                {v.passenger}
                              </p>
                              <p className="text-lg xl:text-lg lg:text-base font-bold">
                                {v.fuel}
                              </p>
                              <p className="text-lg xl:text-lg lg:text-base font-bold">
                                {v.gear}
                              </p>
                              <p className="lg:hidden text-lg font-bold">
                                Total Price: $ {durationDays * v.price}
                              </p>
                              <p className="lg:hidden text-lg font-bold">
                                $ {v.price} / Day
                              </p>
                              <p className="lg:hidden text-lg font-bold">
                                Deposit: $ {v.deposit}
                              </p>
                              <button
                                onClick={() => handleChoose(v)}
                                className="lg:hidden bg-[#54B435] text-white text-xl py-2 px-14 mt-5 font-bold rounded-full"
                              >
                                Choose
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-right text-white font-bold xl:text-2xl lg:text-xl text-xl py-2 my-5">
                    Total
                  </p>

                  <div>
                    {detail.length !== 0 && (
                      <div>
                        {detail.map((v) => (
                          <div className=" justify-end mt-28 xl:h-[90px]">
                            <div></div>
                            <div>
                              <p className="text-right text-lg xl:text-lg lg:text-base font-bold">
                                {" "}
                                Total Price: $ {durationDays * v.price}
                              </p>
                              <p className="text-right">${v.price} / Day</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="bg-[#54B435] text-center text-white font-bold xl:text-2xl lg:text-xl text-xl py-2 my-5">
                    Deposit
                  </p>

                  <div>
                    {detail.length !== 0 && (
                      <div>
                        {detail.map((v) => (
                          <div className="mt-28 xl:h-[90px] lg:h-[50px] flex justify-between xl:space-x-2 items-center">
                            <div>
                              <p className="ml-20 font-bold xl:text-2xl">
                               $ {v.deposit}
                              </p>
                            </div>
                            <div className="justify-end">
                              <button
                                onClick={() => handleChoose(v)}
                                className="bg-[#54B435] hover:bg-[#F0FF42] transition-colors duration-300 text-white hover:text-black xl:text-xl xl:py-3 lg:py-2 xl:px-6 lg:px-4 font-bold rounded-full"
                              >
                                Choose
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

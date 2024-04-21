import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Driver() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    owner_firstName: "",
    owner_lastName: "",
    owner_p_number: "",
    vehicle_manufacturer: "",
    manufacture_year: "",
    vehicle_number: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirm = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const requiredFields = [
      "owner_firstName",
      "owner_lastName",
      "owner_p_number",
      "vehicle_manufacturer",
      "manufacture_year",
      "vehicle_number",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/tuktuk_register",
        {
          // Change this to your backend endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to insert data into database");
      } else {
        // Data insertion successful
        console.log("Data inserted successfully");
        // Redirect to success page
        const dataTo = {
          owner_firstName: formData,
        };

        navigate("/jobSuccess", { state: { data: dataTo } });
      }
    } catch (error) {
      console.error("Error inserting data into database:", error);
    }
  };

  return (
    <div className="grid h-screen items-center 2xl:px-72 xl:px-34 lg:px-20 px-5">
      <div className="bg-gray-200">
        <div>
          <h1 className="mt-5 md:text-xl font-bold uppercase xl:text-3xl lg:text-2xl text-lg text-center pt-5">
            tuktuk Registration
          </h1>
        </div>
        <div className="xl:mt-10 lg:mt-5">
          <form action="" method="post">
            <div className="">
              <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-x-3 lg:gap-x-10 lg:mx-10 mx-5 md:mx-5 space-y-5 font-bold">
                <div className="grid grid-cols-1 pt-5">
                  <label htmlFor="owner_firstName">
                    Vehicle Owner - First Name
                  </label>
                  <input
                    type="text"
                    name="owner_firstName"
                    id="owner_firstName"
                    required
                    value={formData.owner_firstName}
                    onChange={handleFormChange}
                    className="p-2 mt-2 "
                  />
                </div>
                <div className="grid grid-cols-1 ">
                  <label htmlFor="owner_lastName">
                    Vehicle Owner - Last Name
                  </label>
                  <input
                    type="text"
                    name="owner_lastName"
                    id="owner_lastName"
                    required
                    value={formData.owner_lastName}
                    onChange={handleFormChange}
                    className="p-2 mt-2"
                  />
                </div>
                <div className="grid grid-cols-1 ">
                  <label htmlFor="owner_p_number">
                    Vehicle Owner - Phone Number
                  </label>
                  <input
                    type="number"
                    name="owner_p_number"
                    id="owner_p_number"
                    required
                    value={formData.owner_p_number}
                    onChange={handleFormChange}
                    className="p-2 mt-2"
                  />
                </div>
                <div className="grid grid-cols-1 ">
                  <label htmlFor="vehicle_manufacturer">
                    Vehicle Manufacturer
                  </label>
                  <input
                    type="text"
                    name="vehicle_manufacturer"
                    id="vehicle_manufacturer"
                    required
                    placeholder="ex: bajaj, TVS, Piaggio"
                    value={formData.vehicle_manufacturer}
                    onChange={handleFormChange}
                    className="p-2 mt-2"
                  />
                </div>
                <div className="grid grid-cols-1 ">
                  <label htmlFor="manufacture_year">Year of Manufacture</label>
                  <input
                    type="number"
                    name="manufacture_year"
                    id="manufacture_year"
                    required
                    placeholder="ex: 2019"
                    value={formData.manufacture_year}
                    onChange={handleFormChange}
                    className="p-2 mt-2"
                  />
                </div>
                <div className="grid grid-cols-1 ">
                  <label htmlFor="vehicle_number">Vehicle Plate Number</label>
                  <input
                    type="text"
                    name="vehicle_number"
                    id="vehicle_number"
                    required
                    placeholder="ex: XYZ - 0101"
                    value={formData.vehicle_number}
                    onChange={handleFormChange}
                    className="p-2 mt-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center py-5 xl:py-10">
              <input
                type="submit"
                value="Register"
                onClick={handleConfirm}
                className="bg-[#379237] hover:bg-[#F0FF42] transition-colors duration-300 py-2 px-5 lg:text-2xl text-white hover:text-black font-bold cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

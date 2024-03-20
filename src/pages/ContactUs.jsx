import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function ContactUs() {
  const location = useLocation();
  const { data } = location.state || {};

  const {
    pickupCity,
    pickupDate,
    pickupTime,
    returnCity,
    returnDate,
    returnTime,
    durationDays,
    vehicle,
    total,
    options,
    grandTotal,
    result,
    payNowPickUp,
    customerDetails: formData,
  } = data || {};
  console.log(data);

  return (
    <div>
      <Navbar />
      <div>
        <h2>Rental Details</h2>
        <p>
          <strong>Pickup City:</strong> {pickupCity}
        </p>
        <p>
          <strong>Pickup Date:</strong> {pickupDate}
        </p>
        <p>
          <strong>Pickup Time:</strong> {pickupTime}
        </p>
        <p>
          <strong>Return City:</strong> {returnCity}
        </p>
        <p>
          <strong>Return Date:</strong> {returnDate}
        </p>
        <p>
          <strong>Return Time:</strong> {returnTime}
        </p>
        <p>
          <strong>Duration (Days):</strong> {durationDays}
        </p>
        <p>
          <strong>Vehicle:</strong> {vehicle}
        </p>
        <p>
          <strong>Total:</strong> {total}
        </p>

        <h2>Options</h2>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <strong>{option.item}:</strong> {option.cost} (Quantity:{" "}
              {option.quantity})
            </li>
          ))}
        </ul>

        <p>
          <strong>Grand Total:</strong> {grandTotal}
        </p>
        <p>
          <strong>Deposit:</strong> {result}
        </p>
        <p>
          <strong>Pay Now at Pickup:</strong> {payNowPickUp}
        </p>
        <h2>Customer Details</h2>
        <p>
          <strong>Title:</strong> {formData.title}
        </p>
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Date of Birth:</strong> {formData.dob}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>State:</strong> {formData.state}
        </p>
        <p>
          <strong>Zip Code:</strong> {formData.zipCode}
        </p>
        <p>
          <strong>Country:</strong> {formData.country}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
        <p>
          <strong>Comments:</strong> {formData.comments}
        </p>
        <p>
          <strong>Agree to Terms:</strong> {formData.agreeTerms ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

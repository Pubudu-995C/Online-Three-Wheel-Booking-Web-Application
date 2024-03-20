import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper8 from "../images/wallpapers/wallpaper8.jpg";

export default function Faq() {
  const navigate = useNavigate();
  const homePageClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="h-[500px]">
        <img
          src={wallpaper8}
          className="object-cover w-full h-full brightness-50"
          alt="Wallpaper"
        />
        <div className="absolute mt-56 top-0 left-0 w-full justify-center">
          <h1 className="text-center font-bold lg:text-6xl text-3xl mt-0 text-white uppercase">
            FAQ
          </h1>
        </div>
      </div>

      <div>
        <div className="m-0 pt-20">
          <h2 className="text-center font-mono font text-3xl text-[#54B435] uppercase">
            have inquiries on your mind? discover solutions to your questions
            right here!
          </h2>
          <h1 className="text-center font-serif font lg:text-6xl text-3xl font-bold mt-3 mx-20">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="xl:mx-40 lg:mx-20 mx-8">
          <p className="mt-12 text-2xl font-bold py-5 text-[#379237]">
            What does your insurance cover?
          </p>
          <p className="text-xl text-justify">
            Hey there! Our tuktuks come with complete insurance, ensuring
            protection for both the tuktuk and any other vehicles involved in
            case of any mishaps. This coverage extends to personal injuries for
            you, your fellow passengers, and even third parties (check out the
            handy diagram for details). Still, we recommend getting your own
            Travel Insurance, especially for situations like needing to be taken
            back to your home country for medical reasons, as that's not covered
            by our insurance.
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            Can I drop the tuktuk to a different location?
          </p>
          <p className="text-xl text-justify">
            Certainly! Feel free to give us a heads-up at least two days before
            you want to return the tuktuk, and our driver will swing by your
            hotel to pick it up. Just a heads-up, there are some location
            charges to keep in mind. Let us know if you have any questions or
            need more details!
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            Can I pick up the tuktuk from a different location?
          </p>
          <p className="text-xl text-justify">
            Sure thing! In this case, one of our driving instructors will take
            the wheel of the tuktuk, armed with your license and all the
            required paperwork. They'll zip over to your hotel at the designated
            pick-up spot, and that's where you'll get your driving instructions.
            We're here to make it as convenient and smooth for you as possible!
            Let us know if you have any other questions or if there's anything
            else we can assist you with.
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            What is included in the rental price?
          </p>
          <ul className="list-disc px-10 text-xl">
            <li>Quality tuktuks sourced from locals to support their income</li>
            <li>Comprehensive third-party insurance for peace of mind</li>
            <li>Locally approved license provided if applicable (Sri Lanka)</li>
            <li>Optional International Drivers Permit</li>
            <li>Comprehensive driving lesson included</li>
            <li>Unlimited kilometers for your journey</li>
            <li>Flexible pick-up, drop-off locations, and extensions</li>
            <li>Wear and tear repairs covered while on the road</li>
            <li>Enjoy a comprehensive road kit for added comfort</li>
            <li>
              Membership at the Automobile Association of Ceylon (Sri Lanka)
            </li>
            <li>
              Integrated digital map with over 1000 locations for a unique trip
              experience!
            </li>
          </ul>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            Why do you have different prices for less than 4 days?
          </p>
          <p className="text-xl text-justify">
            Our pricing is tied to how long you want to rent with us – the
            longer you book, the more budget-friendly it becomes! For shorter
            rentals, the rates are a bit higher because they might not be as
            appealing to our awesome tuktuk owners. We want to make sure they're
            happy too, so the slightly higher prices for shorter rentals go
            straight to them.
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            What happens if my tuktuk gets stolen?
          </p>
          <p className="text-xl text-justify">
            Tuktuk theft is exceptionally uncommon in Sri Lanka and India. In
            the unlikely event that your tuktuk is stolen, rest assured that our
            insurance has got you covered – as long as it wasn't taken using
            your set of keys. Your peace of mind is our priority!
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            What happens if my accessories get stolen?
          </p>
          <p className="text-xl text-justify">
            If any accessories go missing or are stolen, we'll kindly request
            you to cover the replacement cost. Most accessories aren't too
            pricey, except for the tuktuk documents, which amount to US$90 for a
            replacement. We appreciate your understanding!
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            Do I need to pay in advance to secure my booking?
          </p>
          <p className="text-xl text-justify">
            Absolutely! Following our social business model, we kindly request
            confirmation of your payment before we can secure the rental of your
            tuktuk from one of our amazing local suppliers. Your support makes a
            positive impact in the community!
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            Do I get a refund if I need to cancel?
          </p>
          <p className="text-xl text-justify">
            For details regarding cancellations, please take a look at our
            RENTAL TERMS SUMMARY. It provides comprehensive information to guide
            you through the cancellation process.
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            Do you accept credit cards?
          </p>
          <p className="text-xl text-justify">
            Certainly! We offer two secure payment options for your convenience.
            You can make payments through our credit card payment gateway
            (Stripe) or via PayPal. If you opt for credit card payment through
            PayPal, simply navigate to the PayPal payment page and choose 'Pay
            by Credit Card' at the bottom (refer to the image below). Please
            note that this feature may not be available in all countries. Your
            flexibility in payment methods is appreciated!
          </p>
          <p className="text-2xl font-bold py-5 text-[#379237]">
            I want to take the train between Kandy and Nuwara Eliya. Is this
            possible with my tuktuk?
          </p>
          <p className="text-xl text-justify">
            Absolutely! We've got you covered. If you're looking to enjoy the
            renowned train journey between Kandy and Nuwara Eliya, we have a
            contact who can expertly drive your tuktuk in either direction. Just
            reach out to us when you make your booking, and we'll coordinate the
            details. Also, keep in mind that train tickets tend to sell out
            quickly, so it's a good idea to secure yours well in advance for a
            seamless experience!
          </p>
          <div className="flex flex-col items-center my-10">
            <button
              onClick={homePageClick}
              className="font-bold text-xl bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
            >
              RESERVE YOUR TUKTUK!
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

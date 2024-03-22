import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import wallpaper3 from "../images/wallpapers/wallpaper3.jpg";
import wallpaper4 from "../images/wallpapers/wallpaper4.jpg";
import wallpaper5 from "../images/wallpapers/wallpaper5.jpg";

export default function HowWork() {
  const navigate = useNavigate();
  const homePageClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const enjoy = [
    {
      img: `/wallpapers/wallpaper.jpg`,
      topic: `Book Your Tuk`,
      details: `Begin by choosing the dates and locations for the start and end of your journey, along with your preferred tuktuk, to finalize your travel plans.`,
      btn: `Book Now`,
    },
    {
      img: `/wallpapers/wallpaper2.jpg`,
      topic: `Pick Your Extras`,
      details: `Ready to catch some waves? Bringing along some precious cargo?
                Take your pick from our awesome selection of add-ons, featuring
                surf racks, baby seats, Bluetooth speakers, coolers, and more!`,
      btn: `Browse Extras`,
    },
    {
      img: `/wallpapers/wallpaper3.jpg`,
      topic: `Get Your Local Licence`,
      details: `To cruise around Sri Lanka hassle-free, you'll need a local
                permit, but fret not! We've got your back. Once you've booked,
                just shoot over a photo of your driver's license and passport,
                and we'll take care of the permit arrangements before you even
                touch down. Easy peasy!`,
      btn: `Read More`,
    },
    {
      img: `/wallpapers/wallpaper4.jpg`,
      topic: `Plan Your Trip`,
      details: ` If you've got just a short stint in Sri Lanka, it's a great idea
                to plan ahead to squeeze the most out of your time there. Need a
                hand? Go ahead and schedule a complimentary trip planning
                session with our friendly and knowledgeable team!`,
      btn: `Get Start`,
    },
    {
      img: `/wallpapers/wallpaper5.jpg`,
      topic: `Take Your Driving Lesson`,
      details: ` Upon your arrival, one of our friendly instructors will provide
                you with a customized tuk-tuk driving lesson to help you feel
                comfortable behind the wheel. If you're a quick learner, it
                won't take much time at all. However, if you prefer to take your
                time, our instructors are available all day to assist you at
                your own pace. We're here to make your tuk-tuk driving
                experience enjoyable and stress-free!`,
      btn: `Read More`,
    },
    {
      img: `/wallpapers/wallpaper6.jpg`,
      topic: `Hit The Road`,
      details: `Once you've wrapped up your driving lesson, you're all set to
                hit the road and embark on your exciting journey. We're here for
                you around the clock if you ever need assistance, but for the
                most part, it's your turn to create those unforgettable
                memories!`,
      btn: `Read More`,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="h-[500px]">
        <img
          src={wallpaper3}
          className="object-cover w-full h-full"
          alt="Wallpaper"
        />
        <div className="absolute top-0 left-0 justify-center w-full mt-56">
          <h1 className="mt-0 text-3xl font-bold text-center text-white uppercase lg:text-6xl">
            How It Works​
          </h1>
        </div>
      </div>
      {/* ============================================================= */}
      <div className="bg-gradient-to-br from-slate-50 to-lime-200">
        <div className="pt-20 m-0">
          <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435]">
            HOW IT WORKS
          </h2>
          <h1 className="mt-3 font-serif text-3xl font-bold text-center font lg:text-6xl">
            Let’s Get You Driving a Tuktuk!
          </h1>

          <p className="px-5 mt-12 lg:text-xl text-lg text-center">
            Driving your own tuktuk in Sri Lanka is easy with{" "}
            <span className="font-bold">
              tuktuk<span className="text-[#54B435]">mango</span>.com
            </span>
            .
            <br />
            Here’s how anyone with a valid drivers licence can do it.
          </p>
        </div>

        <div className="p-10">
          {enjoy.map((j) => (
            <div className="items-center justify-center space-y-5 text-center lg:flex gap-x-4 lg:text-justify">
              <div className="lg:p-5 lg:w-3/6">
                <p className="lg:text-2xl text-xl font-bold py-4 lg:py-0">
                  {j.topic}
                </p>
                <p className="lg:text-xl text-base text-justify ">
                  {j.details}
                </p>
                <div className="text-center ">
                  <button className=" bg-[#82CD47] hover:bg-[#379237] transition-colors duration-300 hover:text-white px-10 py-2 rounded-full font-bold mt-5 text-sm lg:text-base">
                    {j.btn}
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={j.img} className="w-[500px]" alt="Wallpaper" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ======================================================== */}

      <div className="relative xl:h-[850px] lg:h-[950px] md:h-[860px] h-[1300px]">
        <img
          src={wallpaper4}
          className="object-cover w-full h-full brightness-50"
          alt="Wallpaper"
        />
        <div className="absolute top-0 w-full mt-20 md:px-5">
          <h2 className="text-center font-mono font lg:text-3xl text-xl mx-8 text-[#54B435]">
            OUR COMPANY HAS GROWN EXPONENTIALLY
          </h2>
          <h1 className="mt-3 font-serif text-2xl font-bold text-center text-white font lg:text-6xl">
            How Does <br /> TukTuk<span className="text-[#54B435]">Mango</span>
            .com Work?
          </h1>

          <p className="mx-8 mt-12 lg:text-xl text-base text-justify text-white lg:text-center lg:mx-20">
            TukTukMango.com is all about creating a unique and enjoyable
            experience for travelers exploring Sri Lanka. As a social business,
            we connect you with local tuktuk drivers, ensuring they benefit from
            fair opportunities. While we don't own any tuktuks ourselves, we
            take care of all the details from your arrival to departure, so your
            only concern is having a great time exploring the beauty of Sri
            Lanka in a whole new way!
          </p>

          <p className="py-5 mx-8 text-xl font-bold text-white lg:mx-28">
            Every tuktukmango.com booking includes
          </p>

          <div class="lg:mx-40 mx-8 text-white">
            <ul class="list-disc">
              <li>
                Quality tuktuk provided by locals to support their livelihood
              </li>
              <li>
                Comprehensive on-the-road manual including driving tips, basic
                tuktuk maintenance, traveler info, and island-wide accommodation
                discounts
              </li>
              <li>
                Exclusive digital map for your phone featuring hundreds of
                hidden gems sourced from thousands of previous tuktuk travelers
              </li>
              <li>Comprehensive vehicle insurance included</li>
              <li>Valid Sri Lankan driving permit provided</li>
              <li>Comprehensive driving lesson offered</li>
              <li>On-the-road travel kit included</li>
              <li>100% carbon neutral - we offset all kilometers driven</li>
              <li>
                Repair costs covered by tuktukmango.com during your journey
              </li>
              <li>Unlimited kilometers</li>
              <li>
                Pickup and drop-off available at locations all across the island
              </li>
              <li>
                Easy online payment options and digital deposit refund via
                credit card or bank transfer
              </li>
              <li>24/7 on-the-road support available</li>
              <li>Pre-trip advice and planning assistance provided</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ============================================== */}
      <div>
        <div className="pt-20 m-0 md:px-5">
          <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435]">
            TUK TUK DRIVING IN SRI LANKA
          </h2>
          <h1 className="mx-8 mt-3 font-serif text-3xl font-bold text-center font lg:text-6xl lg:mx-20">
            Can you drive a Tuktuk in Sri Lanka without any legal issues?
          </h1>

          <div className="mx-8 lg:mx-20 xl:mx-32">
            <p className="mt-12 xl:text-xl md:text-lg text-base text-justify">
              Sure thing! If you've got a valid driver's license back home,
              you're good to roll with a tuktuk in Sri Lanka. Just a couple of
              must-haves before you embark on your road adventure:
            </p>
            <ul className="px-10 py-5 xl:text-xl md:text-lg text-base list-disc">
              <li>A Sri Lankan driving permit</li>
              <li>Valid vehicle insurance</li>
            </ul>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              For a smooth and enjoyable experience navigating a tuktuk in Sri
              Lanka, we suggest a few friendly tips to ensure your safety,
              ethical conduct, and a hassle-free ride:
            </p>
            <ul className="px-10 py-5 xl:text-xl md:text-lg text-base list-disc">
              <li>Use a safe and reliable tuktuk</li>
              <li>Take a comprehensive and personal driving lesson</li>
              <li>Have an on board travel and repair kit</li>
              <li>Have access to 24/7 on-the-road support and assistance</li>
              <li>Rent from a social business</li>
              <li>Offset your emissions</li>
            </ul>
            <p className="xl:text-xl md:text-lg text-base text-left">
              Tuktukmango.com offers all of these services conveniently on its
              user-friendly online platform, making booking a breeze!
            </p>
            <p className="py-5 xl:text-2xl text-xl font-bold">Sri Lankan Driving Permit</p>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              To cruise around in a tuktuk or any vehicle in Sri Lanka, you'll
              need a special local license. Unlike many countries, Sri Lanka
              doesn't acknowledge international or foreign driving licenses. So,
              to hit the road legally here, you'll need to snag a local
              Recognition Permit. Rolling without one could land you in hot
              water with fines or even a stint in jail. Stay on the right side
              of the law and make sure you've got that local permit in your
              pocket! 🚗🇱🇰
            </p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              🌟 If you're a tuktukmango.com customer, we've got your back!
              We'll take care of arranging your local driving permit in advance,
              so you don't have to worry about it upon your arrival. If you have
              more than one driver, just let us know how many permits you need
              in the extras section – it's as easy as that! 🚗
            </p>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              You can definitely obtain this information directly from the
              Automobile Association of Ceylon. However, it's advisable to set
              aside about half a day for the process, taking into account
              potential queues, their business hours, and the usual traffic in
              Colombo.
            </p>
            <p className="py-5 xl:text-2xl text-xl font-bold">Valid Vehicle Insurance</p>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              🚗 When driving any vehicle in Sri Lanka, it's essential to have
              insurance that covers the person behind the wheel. Keep in mind
              that typical vehicle insurance might not protect you as a
              third-party driver. However, if you choose to book your tuktuk
              with tuktukmango.com, you can relax because all our vehicles come
              with comprehensive insurance. This means you're covered as a
              foreign driver without any extra hassle. Drive worry-free with
              tuktukmango.com! 🌴
            </p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              Our insurance has everyone covered – that means you as the driver,
              your passengers, your vehicle, and even folks in other vehicles
              you might be involved with. It's a standard feature on all our
              vehicles, and it's already factored into our pricing. So, you can
              hit the road with peace of mind knowing that protection extends to
              everyone and everything involved.
            </p>
            <p className="xl:text-2xl text-xl font-bold">Personal Travel Insurance</p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              🌟 While our insurance has got you covered legally, it's crucial
              to consider having your own travel insurance just in case the
              unexpected happens, like a serious injury requiring a medical
              evacuation back to your home country. Thankfully, no
              tuktukmango.com customer has ever faced a serious injury, but it's
              always wise to take this precaution for added peace of mind. 🤞
            </p>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              When you're searching for insurance coverage, it's important to
              ensure that you're protected for both car and motorcycle usage.
            </p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              If you're in search of travel insurance that's tailored to cover
              tuktuks, we suggest checking out SafetyWing. Their rates begin at
              $37 for a four-week period and cover a variety of benefits, making
              sure you're well-protected during your adventures.
            </p>
            <ul className="px-10 xl:text-xl md:text-lg text-base text-justify list-disc">
              <li>
                Stay worry-free on your travels with our travel medical
                coverage! Gain access to a reliable global network of hospitals
                and doctors to handle any unexpected medical issues or
                accidents. Our comprehensive package covers everything from
                doctors and hospitals to emergency medical evacuation.
              </li>
              <li className="py-5">
                And that's not all – our travel coverage has you covered for
                various situations. Whether it's a travel delay, lost checked
                luggage, emergency response during natural disasters, or
                personal liability, we've got your back. Travel with confidence,
                knowing you're protected every step of the way!
              </li>
            </ul>
            <p className="xl:text-2xl text-xl font-bold">Comprehensive Driving Lesson</p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              🚗 Before you venture out on your own, we organize a session with
              a skilled tuktuk driver who will guide you through a thorough
              driving lesson and provide insights into basic vehicle upkeep. Our
              goal is to ensure you feel confident behind the wheel of a tuktuk
              and are all set to navigate the streets like a seasoned pro! 🌟
            </p>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              Typically, this process takes about an hour. However, if you need
              a bit more time to get the hang of the controls, our instructors
              are more than happy to invest as much time as necessary to ensure
              you feel confident behind the wheel.
            </p>
            <div className="lg:flex lg:space-x-20">
              <div>
                <p className="py-5 xl:text-2xl text-xl font-bold">
                  On the Road Travel Kit
                </p>
                <p className="xl:text-xl md:text-lg text-base text-justify">
                  We offer a handy travel package to get you on your way quickly
                  and ensure you have everything you need for an extended
                  journey. Our package comprises:
                </p>
                <ul className="px-10 py-5 xl:text-xl md:text-lg text-base list-disc">
                  <li>Spare Tyre</li>
                  <li>Basic Toolset</li>
                  <li>Reserve Fuel Tank</li>
                  <li>Lockable Storage Box</li>
                  <li>USB Charging Port</li>
                  <li>Phone Holder</li>
                </ul>
              </div>
              <div>
                <p className="py-5 xl:text-2xl text-xl font-bold">Optional Extras</p>
                <p className="xl:text-xl md:text-lg text-base text-justify">
                  In addition to the basic travel essentials, you have the
                  option to add some extra goodies to enhance your journey.
                  Choose from the following delightful add-ons:
                </p>
                <ul className="px-10 py-5 xl:text-xl md:text-lg text-base list-disc">
                  <li>Big Bluetooth Speakers</li>
                  <li>Surfboard roof racks</li>
                  <li>Baby-seats</li>
                  <li>Cooler / Esky</li>
                  <li>USB Charging Port</li>
                  <li>
                    Train transfer (we deliver your tuktuk while you enjoy some
                    of Sri Lanka’s famous rail journeys).
                  </li>
                </ul>
              </div>
            </div>
            <p className="xl:text-2xl text-xl font-bold">100% Carbon Neutral</p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              In the fight against climate change, it's important for each of us
              to play a role. When you drive with us, we take care of offsetting
              the carbon footprint of every kilometer you travel by supporting
              UN-approved carbon projects worldwide. And guess what? It's all
              part of the rental package - no extra charge! 😉 Let's make a
              positive impact together! 🌍✨
            </p>
            <p className="xl:text-2xl text-xl font-bold">Repair Costs Covered</p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              🚗 Cruise worry-free on the open road with us! We've got you
              covered for wear and tear, ensuring a smooth ride. If something
              unexpectedly gives out while you're driving responsibly (no beach
              burnouts, promise! 😄), we'll take care of the costs. Rent with
              us, and rest assured, there are no hidden charges lurking around!
              🌟 #DriveWithPeaceOfMind
            </p>
            <p className="xl:text-2xl text-xl font-bold">Unlimited Kilometres</p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              Whether you're dreaming of quick beach getaways or embarking on an
              epic journey around the globe 🌍, there's no need to stress about
              keeping track of kilometers. At tuktukmango.com, every booking
              comes with limitless kilometers as part of the package! 🚗✨
            </p>
            <p className="xl:text-2xl text-xl font-bold">
              Pick up or drop-off your tuktuk anywhere in Sri Lanka!
            </p>
            <p className="py-5 xl:text-xl md:text-lg text-base text-justify">
              Absolutely no worries! 🚗 Exciting news – we've got you covered
              for a pickup in charming Kandy and a drop-off in the sunny
              paradise of Arugam Bay! 🌴 We've sprinkled 27 fabulous locations
              all across the island for your convenience. 🗺️ When you're making
              your reservation, feel free to choose the spot that suits you
              best. And hey, if there's a special place you have in mind that's
              not on our list, just give us a shout, and we'll work our magic to
              make it happen! 🌟 Let's make your journey as smooth as a beach
              breeze! 🏖️✨
            </p>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              Sit back, relax, and leave the driving to our seasoned
              instructors! 🚗🌟 They'll skillfully whisk your tuktuk to your
              desired spot, bringing along your Sri Lankan driving license. 🇱🇰✨
              Once you're there, get ready for a personalized driving lesson
              that's as enjoyable as a joyride! 🚦🤩 Our instructors are here to
              make sure you hit the road with confidence and a big smile! 😊🛣️
              Let's turn those driving dreams into a reality! 🚀🌈
            </p>
            <p className="py-5 xl:text-2xl text-xl font-bold">
              Transparent and Secure Online Payment
            </p>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              Hey there! 🌟 Exciting news – we're totally cashless! 🚖 When you
              snag a ride with us, just breeze through payment with your trusty
              credit or debit card. We'll ask for a $150 deposit upfront, but
              guess what? That's just a temporary high-five! 🙌 At the end of
              your awesome tuktuk adventure, we'll zip that deposit right back
              to your card (or any account you fancy). Easy peasy, super safe,
              and crystal clear. Let the good times roll! 🌈💳
              #CashlessAdventures
            </p>
            <p className="py-5 xl:text-2xl text-xl font-bold">Alright, let’s do this!</p>
            <p className="xl:text-xl md:text-lg text-base text-justify">
              If you've managed to stick with me until now, it's high time to
              snag your fancy lawnmower and gear up for an adventure that will
              leave a lasting impression! 🚀✨
            </p>
          </div>
        </div>
      </div>
      {/* ================================================= */}
      <div className="relative mt-10 h-[500px]">
        <img
          src={wallpaper5}
          className="object-cover w-full h-full  opacity-20"
          alt="Wallpaper"
        />
        <div className="absolute top-0 w-full mt-20">
          <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435]">
            STILL READING? BOOK NOW...
          </h2>
          <h1 className="mt-3 font-serif text-2xl font-bold text-center font lg:text-6xl">
            Sure, let's Get Started!
          </h1>

          <p className="mx-8 mt-12 lg:text-xl text-lg text-center lg:mx-20">
            If you're still with us at this point, then it's high time to secure
            your fancy lawnmower and gear up for an adventure that will stay
            with you forever!
          </p>
          <div className="mt-10 space-y-4 text-center lg:space-x-40 md:space-x-20 lg:space-y-0 lg:mt-20">
            <button
              onClick={homePageClick}
              className=" font-bold lg:text-xl text-base text-black hover:text-white bg-[#F0FF42] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#82CD47]"
            >
              RESERVE A TUKTUK
            </button>
            <button className=" font-bold lg:text-xl text-base text-black hover:text-white bg-[#F0FF42] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#82CD47]">
              BOOK MEETING
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

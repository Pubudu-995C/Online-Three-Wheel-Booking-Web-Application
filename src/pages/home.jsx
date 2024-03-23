import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
// =================================================
import wallpaper from "../images/wallpapers/wallpaper.jpg";
import wallpaper2 from "../images/wallpapers/wallpaper2.jpg";
import srilanka from "../videos/srilanka.mp4";

export default function Home() {
  const [formData, setFormData] = useState({
    pickupCity: "0",
    pickupDate: "",
    pickupTime: "",
    returnCity: "0",
    returnDate: "",
    returnTime: "",
  });

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();
  const faqPageClick = () => {
    navigate("/faq");
    window.scrollTo(0, 0);
  };

  const handleSearch = () => {
    if (
      !formData.pickupCity ||
      !formData.pickupDate ||
      !formData.pickupTime ||
      !formData.returnCity ||
      !formData.returnDate ||
      !formData.returnTime
    ) {
      alert("Please fill in all the required fields before searching.");
      return;
    }

    navigate("/rentTuk", { state: { formData } });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // =================================================================

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isPlaying) {
            playVideoFromTime(30); // Start video time seconds
            setIsPlaying(true);
          }
        } else {
          if (isPlaying) {
            videoElement.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => observer.disconnect();
  }, [isPlaying]);

  const playVideoFromTime = (startTime) => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  };

  // ================================================

  const [expandedItem, setExpandedItem] = useState(1);

  const toggleExpand = (faqId) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === faqId ? null : faqId,
    );
  };

  // ===================================================
  const drive = [
    {
      img: `/images/Freedom.jpg`,
      topic: `Embrace the Liberty to Discover`,
      details: `Embark on a charming tuktuk journey that leads you off the beaten path, unveiling the captivating secrets of Sri Lanka beyond the typical tourist destinations. Seize the opportunity to be your own navigator, savoring the liberty to uncover hidden treasures at your leisure.`,
    },
    {
      img: `/images/Hassle.jpeg`,
      topic: `Experience a Seamless and Effortless Journey`,
      details: `Whether you're off to the serene mountains or cruising down the beach at sunset, our tuktuks ensure your travel is seamlessly enjoyable. Say goodbye to worries about transportation and relish the delight of a carefree journey.`,
    },
    {
      img: `/images/Social.jpg`,
      topic: `Making a Positive Difference in Society`,
      details: `At Tuktuk Rental, our focus is on lifting up our community and fostering sustainable income opportunities in the lively tourism industry.`,
    },
  ];
  // ====================================================
  const extras = [
    {
      img: `/extras/Camping.png`,
      topic: `Camping Kit`,
      details: `Strap your precious surfboards or a baby stroller.`,
    },
    {
      img: `/extras/Adventure.png`,
      topic: `Adventure Kit`,
      details: `Strap your precious surfboards or a baby stroller.`,
    },
    {
      img: `/extras/Seat.png`,
      topic: `Seat Belt`,
      details: `Strap your precious surfboards or a baby stroller.`,
    },
    {
      img: `/extras/Bluetooth.png`,
      topic: `Big Bluetooth Speakers`,
      details: `Strap your precious surfboards or a baby stroller.`,
    },
    {
      img: `/extras/Baby.png`,
      topic: `Baby Seat`,
      details: `Strap your precious surfboards or a baby stroller.`,
    },
    {
      img: `/extras/Cooler.png`,
      topic: `Cooler / Esky`,
      details: `Strap your precious surfboards or a baby stroller.`,
    },
    {
      img: `/extras/Train.png`,
      topic: `Train Transfer`,
      details: `Strap your precious surfboards or a baby stroller.`,
    },
  ];
  // ==============================================
  const carousel = [
    {
      name: `REGULAR TUKTUK`,
      img: `/tuktuk/Regular.png`,
      review: `You can't go wrong with a timeless favorite! Our standard tuktuk is powered by a dependable four-stroke Bajaj RE engine, making it a reliable choice for your travels. It's a familiar sight on the roads, adding a touch of familiarity to your journey.`,
    },
    {
      name: `CONVERTIBLE TUKTUK`,
      img: `/tuktuk/Convertible.png`,
      review: `Craving that wind-in-your-hair feeling? Choose our exclusive custom convertible tuk-tuk from tutukmango.com for an enhanced view and a more laid-back travel experience.`,
    },
    {
      name: `CAMPER TUKTUK`,
      img: `/tuktuk/Camping.png`,
      review: `Ready for an adventure in the great outdoors? Introducing our Camping Tuk-Tuk – the perfect companion for your outdoor escapades. With rugged charm and all the essentials, it's your ticket to a cozy and memorable camping experience on the road.`,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  const mobileSettings = {
    ...settings,
    slidesToShow: 1,
  };

  const tabletSettings = {
    ...settings,
    slidesToShow: 2,
  };

  const tabletLargeSettings = {
    ...settings,
    slidesToShow: 1,
  };

  const desktopSettings = {
    ...settings,
    slidesToShow: 2,
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ================================================

  const team = [
    {
      img: `/team/person (2).png`,
      name: `Pubudu`,
      details: `Frontend Developer`,
    },
    {
      img: `/team/person (1).png`,
      name: `Oshani`,
      details: `Backend Developer`,
    },
    {
      img: `/team/person (3).png`,
      name: `Sanjaya`,
      details: `Digital Marketing Analyst`,
    },
    {
      img: `/team/person (4).png`,
      name: `Hasitha`,
      details: `Web Designer`,
    },
  ];

  const benifits = [
    {
      img: `/icon/tuktuk.png`,
      details: `Reliable tuktuks`,
    },
    {
      img: `/icon/hours.png`,
      details: `24/7 support`,
    },
    {
      img: `/icon/social.png`,
      details: `Social impact`,
    },
    {
      img: `/icon/kms.png`,
      details: `Unlimited kms`,
    },
    {
      img: `/icon/insurance.png`,
      details: `Comprehensive insurance`,
    },
    {
      img: `/icon/license.png`,
      details: `Valid local driver's licence`,
    },
    {
      img: `/icon/lesson.png`,
      details: `Driving lesson & itinerary advice`,
    },
    {
      img: `/icon/more.png`,
      details: `Phone chargers, speakers, & more`,
    },
  ];

  const faqData = [
    {
      id: 1,
      question: `What does our insurance cover?`,
      answer: `Hey there! Our tuktuks come with complete insurance, ensuring protection for both the tuktuk and any other vehicles involved in case of any mishaps. This coverage extends to personal injuries for you, your fellow passengers, and even third parties (check out the handy diagram for details). Still, we recommend getting your own Travel Insurance, especially for situations like needing to be taken back to your home country for medical reasons, as that's not covered by our insurance.`,
    },
    {
      id: 2,
      question: `Can I drop the tuktuk to a different location?`,
      answer: `Certainly! Feel free to give us a heads-up at least two days before you want to return the tuktuk, and our driver will swing by your hotel to pick it up. Just a heads-up, there are some location charges to keep in mind. Let us know if you have any questions or need more details!`,
    },
    {
      id: 3,
      question: `Can I pick-up the tuktuk from a different location?`,
      answer: `Sure thing! In this case, one of our driving instructors will take the wheel of the tuktuk, armed with your license and all the required paperwork. They'll zip over to your hotel at the designated pick-up spot, and that's where you'll get your driving instructions. We're here to make it as convenient and smooth for you as possible! Let us know if you have any other questions or if there's anything else we can assist you with.`,
    },
    {
      id: 4,
      question: `Why do you have different prices for less than 4 days?`,
      answer: `Our pricing is tied to how long you want to rent with us – the longer you book, the more budget-friendly it becomes! For shorter rentals, the rates are a bit higher because they might not be as appealing to our awesome tuktuk owners. We want to make sure they're happy too, so the slightly higher prices for shorter rentals go straight to them.`,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="xl:h-[850px] lg:h-[900px] md:h-[1000px] h-[1200px]">
        <img
          src={wallpaper}
          className="object-cover w-full h-full brightness-[70%]"
          alt="Wallpaper"
        />

        <div className="absolute top-0 w-full mt-10 xl:mt-24 md:mt-12">
          <h1 className="mt-20 text-3xl font-bold text-center text-white uppercase xl:text-6xl lg:text-5xl lg:leading-normal">
            Explore Sri Lanka with Tuktuk rentals
          </h1>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 xl:mx-32 lg:mx-10 lg:justify-center md:justify-center">
            <div class="flex flex-col max-w-md rounded-lg p-4 bg-[#82CD47] mx-4 md:mx-auto md:w-full lg:mx-0 mt-10 md:mt-20">
              <h1 class="font-bold text-xl mb-2">Start Your Trip Here</h1>
              <div class="flex flex-col mb-4">
                <select
                  id="pickupCity"
                  value={formData.pickupCity}
                  onChange={handleInputChange}
                  class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                >
                  <option value="0" selected="selected">
                    Pick-Up City &amp; Location:
                  </option>
                  <option value="1. Negombo">1. Negombo</option>
                  <option value="2. Sigiriya">2. Sigiriya</option>
                  <option value="3. Dambulla">3. Dambulla</option>
                  <option value="4. Anuradhapura">4. Anuradhapura</option>
                  <option value="5. Polonnaruwa">5. Polonnaruwa</option>
                  <option value="6. Kandy">6. Kandy</option>
                  <option value="7. Kitulgala">7. Kitulgala</option>
                  <option value="8. Ella">8. Ella</option>
                  <option value="9. Nuwara Eliya">9. Nuwara Eliya</option>
                  <option value="10. Galle">10. Galle</option>
                  <option value="11. Mirissa">11. Mirissa</option>
                  <option value="12. Trincomalee">12. Trincomalee</option>
                  <option value="13. Nilaveli">13. Nilaveli</option>
                  <option value="14. Arugam Bay">14. Arugam Bay</option>
                  <option value="15. Jaffna">15. Jaffna</option>
                </select>
              </div>

              <div class="md:flex mb-4 md:space-x-4">
                <div className="flex flex-col w-full lg:w-full">
                  <label for="date" class="text-sm font-medium">
                    Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    id="pickupDate"
                    value={formData.pickupDate}
                    min={currentDate}
                    onChange={handleInputChange}
                    class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-full">
                  <label for="time" class="text-sm font-medium">
                    Time
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    id="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                  />
                </div>
              </div>

              <div class="flex items-center mb-4">
                <input
                  type="text"
                  id="return-city"
                  class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                  placeholder="I have coupon code: "
                />
              </div>

              <h1 class="font-bold text-xl mb-2">End Your Trip Here</h1>

              <div class="flex flex-col mb-4">
                <div class="flex flex-col">
                  <select
                    id="returnCity"
                    value={formData.returnCity}
                    onChange={handleInputChange}
                    class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                  >
                    <option value="0" selected="selected">
                      Return City & Location:
                    </option>
                    <option value="1. Negombo">1. Negombo</option>
                    <option value="2. Sigiriya">2. Sigiriya</option>
                    <option value="3. Dambulla">3. Dambulla</option>
                    <option value="4. Anuradhapura">4. Anuradhapura</option>
                    <option value="5. Polonnaruwa">5. Polonnaruwa</option>
                    <option value="6. Kandy">6. Kandy</option>
                    <option value="7. Kitulgala">7. Kitulgala</option>
                    <option value="8. Ella">8. Ella</option>
                    <option value="9. Nuwara Eliya">9. Nuwara Eliya</option>
                    <option value="10. Galle">10. Galle</option>
                    <option value="11. Mirissa">11. Mirissa</option>
                    <option value="12. Trincomalee">12. Trincomalee</option>
                    <option value="13. Nilaveli">13. Nilaveli</option>
                    <option value="14. Arugam Bay">14. Arugam Bay</option>
                    <option value="15. Jaffna">15. Jaffna</option>
                  </select>
                </div>
              </div>

              <div class="md:flex mb-4 md:space-x-4">
                <div className="flex flex-col w-full">
                  <label for="endDate" class="text-sm font-medium">
                    Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    id="returnDate"
                    value={formData.returnDate}
                    min={currentDate}
                    onChange={handleInputChange}
                    class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label for="endTime" class="text-sm font-medium">
                    Time
                  </label>
                  <input
                    type="time"
                    name="endTime"
                    id="returnTime"
                    value={formData.returnTime}
                    onChange={handleInputChange}
                    class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                  />
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="bg-[#379237] hover:bg-[#F0FF42] text-white hover:text-black transition-colors duration-300 font-bold py-2 px-4 rounded-lg"
              >
                Start
              </button>
            </div>
            <div className="flex items-center font-serif">
              <p class="lg:text-5xl text-3xl mx-5 mt-16 font-bold text-center py-10 border-4 border-white text-[#F0FF42]">
                Experience travel as a local and uplift the community.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===================================================================== */}

      <div className="px-5 py-10 bg-gradient-to-tl from-lime-300 to-yellow-100 lg:py-10 ">
        <div>
          <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435] uppercase">
            Set out on a remarkable journey that you'll always remember
          </h2>
          <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
            Drive your own Tuktuk in style!
          </h1>

          <p className="mt-12 text-lg text-center lg:text-xl">
            Hold on, you mean I get to cruise around in a three-wheeler in Sri
            Lanka? Absolutely! And trust me, you're going to have the time of
            your life!
          </p>

          <p className="mt-8 text-lg text-center lg:text-xl xl:px-40">
            We provide travelers with the opportunity to rent tuktuks, allowing
            them to experience the true essence of Sri Lanka through the joy of
            driving an authentic and dependable rickshaw! Break away from the
            usual tourist spots and discover the hidden gems that often go
            unnoticed by others.
          </p>
        </div>

        <div>
          <div className="mt-10 space-y-10 lg:flex lg:my-10 lg:space-y-0">
            {drive.map((d) => (
              <div class="xl:max-w-96 lg:max-w-[300px] md:max-w-[600px] mx-auto bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 duration-500 ease-in-out">
                <div>
                  <div>
                    <img
                      src={d.img}
                      className="object-cover w-full h-48 mx-auto"
                      alt="Freedom"
                    />
                  </div>
                  <div class="p-8">
                    <p className="text-xl font-bold text-center">{d.topic}</p>
                    <p class="mt-2 text-gray-500 text-center">{d.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ===================================================================== */}

      <div className="flex flex-col px-5 py-10 bg-gray-200 lg:px-20">
        <div>
          <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435] uppercase">
            Experience Traveling as a Local
          </h2>
          <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
            Our Vehicles
          </h1>
          <p className="mt-8 text-lg text-center lg:text-xl lg:px-28">
            Choose your own tuktuk and express your individuality with our wide
            array of choices, featuring the Classic Tuk, Transformable Tuk, and
            the Adventure Tuk.
          </p>
        </div>

        <div>
          <p className="mt-10 font-bold">CHOOSE YOUR EXTRAS</p>
          <div className="justify-between lg:flex">
            <div className="grid grid-cols-1 m-2 ml-0 gap-y-2 md:gap-x-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
              {extras.map((e) => (
                <div className="flex p-2 space-x-5 bg-white shadow-lg lg:w-full rounded-tl-2xl rounded-br-2xl">
                  <div className="p-2">
                    <img src={e.img} className="w-7" alt="" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold lg:text-base">
                      {e.topic}
                    </p>
                    <p className="text-sm lg:text-base">{e.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 xl:w-3/5 lg:w-2/5 lg:mt-20 xl:mt-0 lg:px-0">
              <div className="mt-10 lg:mt-0 xl:mt-0">
                <Slider
                  {...(windowWidth <= 640
                    ? mobileSettings
                    : windowWidth <= 768
                      ? tabletSettings
                      : windowWidth <= 1024
                        ? tabletLargeSettings
                        : desktopSettings)}
                >
                  {carousel.map((d) => (
                    <div
                      key={d.id}
                      className="bg-white xl:h-[500px] lg:h-[540px] h-[550px] md:h-[500px] text-black rounded-xl relative"
                    >
                      <div className="flex items-center justify-center h-56 bg-[#379237] rounded-t-xl">
                        <img src={d.img} alt="" className="h-44" />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-4 p-4">
                        <p className="text-xl font-semibold">{d.name}</p>
                        <p className="text-sm text-justify lg:text-base">
                          {d.review}
                        </p>
                        <button className="absolute px-6 py-1 text-lg text-black hover:text-white font-bold bg-[#F0FF42] hover:bg-[#82CD47] transition-colors duration-300 rounded-lg bottom-5">
                          Read More
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================================================================== */}

      <div>
        <div className="text-center">
          <div className="">
            <video
              ref={videoRef}
              width="full"
              height="315"
              controls
              controlsList="nodownload" // Hides the download button
              disablePictureInPicture // Disables PiP mode
              onContextMenu={(e) => e.preventDefault()} // Disables right-click context menu
            >
              <source src={srilanka} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* ===================================================================== */}

      <div className="px-5 pt-20 bg-gradient-to-tl from-lime-300 to-yellow-100">
        <div>
          <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435] uppercase">
            Travel Planning Assistance, Absolutely Free!
          </h2>
          <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
            Seeking Free Sri Lanka Travel Tips?
          </h1>

          <p className="mt-8 text-lg text-center lg:text-xl lg:mx-40">
            Our team specializing in tuktuk rentals is passionately dedicated to
            exploring the wonders of Sri Lanka. Regardless of whether you choose
            to rent a tuktuk or not, you have the option to schedule a
            complimentary travel consultation with our knowledgeable and
            enjoyable team.
          </p>
        </div>

        <div>
          <div class="mt-24 mx-auto md:px-6">
            <div class="text-center">
              <div class="lg:gap-xl-12 grid gap-x-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {team.map((t) => (
                  <div>
                    <img
                      class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                      src={t.img}
                      alt=""
                    />
                    <h5 class=" text-lg font-bold">{t.name}</h5>
                    <p class="mb-6 lg:mb-0">{t.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 my-10">
            <button className="font-bold lg:text-xl text-sm bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]">
              MEET THE WHOLE TEEM!
            </button>
          </div>
        </div>
      </div>
      {/* ===================================================================== */}

      <div>
        <div>
          <h2 className="text-center font-mono font lg:text-3xl text-xl px-5 text-[#54B435] uppercase">
            Everything is covered, including the TukTuk Mango experience
          </h2>
          <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
            Why Choose Us for Booking?
          </h1>
          <p className="px-5 mt-8 text-lg text-center lg:text-xl">
            When you book with{" "}
            <span className="font-bold">
              tuktuk<span className="text-[#54B435]">mango</span>.com
            </span>{" "}
            everything is included. Simply show up and we take care of the rest.
          </p>
        </div>

        <div className="px-5 mt-20 text-xl">
          <div className="text-center">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {benifits.map((b) => (
                <div>
                  <img
                    src={b.img}
                    className="w-16 mx-auto mb-4 lg:w-24"
                    alt=""
                  />
                  <p className="mb-10 text-base lg:px-20 lg:text-xl">
                    {b.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ===================================================================== */}

      <div className="relative mt-20 xl:h-[750px] lg:h-[800px] md:h-[850px] h-[1000px]">
        <img
          src={wallpaper2}
          className="object-cover w-full h-full opacity-30"
          alt="Wallpaper"
        />
        <div className="absolute top-0 w-full">
          <h2 className="text-center font-mono font lg:text-3xl text-xl mt-20 text-[#54B435] uppercase">
            Important details to understand
          </h2>
          <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="absolute px-5 pt-10 mt-20 lg:m-20 top-28">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`faq-container border rounded-md p-4 mb-4 bg-[#82CD47] mt-4`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(faq.id)}
              >
                <h2 className="text-sm font-semibold uppercase lg:text-lg">
                  {faq.question}
                </h2>
                <span
                  className={`text-xl transform transition-transform ${
                    expandedItem === faq.id ? "rotate-30" : "-rotate-45"
                  }`}
                  style={{ fontSize: "3rem" }}
                >
                  {expandedItem === faq.id ? "-" : "+"}
                </span>
              </div>
              <div
                className={`faq-answer mt-2 overflow-hidden transition-max-h ${
                  expandedItem === faq.id ? "max-h-96" : "max-h-0"
                } duration-500 ease-in-out`}
              >
                <p className="text-sm text-justify lg:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute flex flex-col items-center w-full lg:mt-0 bottom-10">
          <button
            onClick={faqPageClick}
            className="font-bold lg:text-xl text-sm bg-[#F0FF42] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#82CD47]"
          >
            MORE QUESTIONS
          </button>
        </div>
      </div>
      {/* ===================================================================== */}
      <Footer />
    </div>
  );
}

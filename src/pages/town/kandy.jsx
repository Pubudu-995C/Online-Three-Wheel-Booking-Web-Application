import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Kandy1 from "../../images/town/kandy1.jpg";
import Kandy2 from "../../images/town/kandy2.jpg";
import Kandy3 from "../../images/town/kandy3.jpg";
import GridLoader from "react-spinners/GridLoader";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import WhatsApp from "../../components/WhatsApp";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Kandy() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const navigate = useNavigate();
  const homePageClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  // ==========================================================

  const [expandedItem, setExpandedItem] = useState(1);
  const toggleExpand = (faqId) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === faqId ? null : faqId,
    );
  };
  const faqData = [
    {
      id: 1,
      question: `What do I need to consider when renting a tuk-tuk in Kandy?`,
      answer: `Renting a tuktuk in Kandy offers you the perfect opportunity to discover the city at your leisure. We can help you obtain a temporary local driving license, so you can hit the road hassle-free.`,
    },
    {
      id: 2,
      question: `Is it okay to drive a tuk-tuk in Kandy?`,
      answer: `Yeah, driving a tuktuk in Kandy is totally safe. We'll even give you a lesson to make sure you feel confident behind the wheel.`,
    },
    {
      id: 3,
      question: `What should I do if I encounter any problems while renting?`,
      answer: `We're here to help you out every step of the way during your rental period. If you encounter any problems, just reach out to our customer support team, and we'll take care of it for you.`,
    },
    {
      id: 4,
      question: `How can I obtain my license to drive to Kandy?`,
      answer: `On the day you're scheduled for pickup, one of our friendly driving instructors will arrive at your hotel with the tuktuk, complete with all the required permits and paperwork. They'll give you a thorough driving lesson, ensuring you're comfortable behind the wheel, and then you're ready to hit the road and discover paradise!`,
    },
    {
      id: 5,
      question: `Is it possible for me to leave the tuktuk in Kandy?`,
      answer: `Certainly! You're welcome to leave the tuktuk in Kandy. You can find information about the fees for both pick-up and drop-off right here!`,
    },
  ];
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <GridLoader color={"#379237"} loading={loading} size={20} />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="xl:h-[500px] lg:h-[400px] h-[300px]">
            <img
              src={Kandy1}
              className="object-cover w-full h-full"
              alt="Wallpaper"
            />
          </div>
          {/* ===========Breadcrumbs=========== */}
          <Breadcrumbs className="justify-center ">
            <a href="/" className="opacity-60">
              <i class="fa-solid fa-house"></i>
            </a>
            <a href="/Trip" className="opacity-60">
              <span>TRIP</span>
            </a>
            <a href="/kandy" className="opacity-60">
              <span>KANDY</span>
            </a>
          </Breadcrumbs>
          {/* ===========Breadcrumbs=========== */}
          <div className="2xl:px-72 xl:px-34 lg:px-20 mt-10">
            <div>
              <h2 className="font-mono font lg:text-3xl text-xl px-5 text-[#54B435] uppercase">
                A city brimming with culture and heritage
              </h2>
              <h1 className="px-4 pt-3 font-serif text-3xl font-bold font lg:text-5xl xl:text-6xl">
                Explore the beauty of Kandy with TukTuk Mango
              </h1>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                Immerse yourself in the enchanting beauty of Kandy, where lush
                tea plantations and majestic mountains create a stunning
                backdrop for exploration. Throughout the year, Kandy boasts
                temperatures ranging from a comfortable 19 to 28 degrees
                Celsius, making it ideal for outdoor adventures. As you wind
                your way along the roads, lined with verdant tea fields and
                ascend into the mountains, you'll be greeted by a refreshing
                breeze and the mystical touch of mist that blankets the
                landscape. Watch as the delicate breezes gently part the mist,
                revealing charming colorful homes nestled amidst Kandy's lush
                forest surroundings.
              </p>

              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                Experience the tranquility and allure of Kandy as you zip
                through its streets in a tuk-tuk, taking in the breathtaking
                vistas of tea-draped hills and towering peaks. The city's
                centerpiece, a beautiful lake, offers a peaceful haven, enhanced
                by the ethereal mist that creates a captivating ambiance. Let
                yourself be captivated by Kandy's unique charm and natural
                beauty at every turn.
              </p>

              <p className="px-5 py-5 lg:text-3xl text-2xl font-bold">
                Discover Exciting Activities in and Around Kandy!
              </p>

              <p className="px-5 py-5 lg:text-xl text-lg font-bold text-justify">
                It’s the second-largest city in Sri Lanka
              </p>

              <div className="flex justify-center ">
                <img
                  src={Kandy2}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="flex justify-center font-medium mt-2">
                Reference: &nbsp;
                <a
                  href="https://en.m.wikipedia.org/wiki/File:SL_Kandy_asv2020-01_img04_Queens_Hotel.jpg"
                  className="italic"
                  target="_blank"
                  rel="noreferrer"
                >
                  wikipedia
                </a>
              </p>
              <p className="px-5 pt-5 lg:text-3xl text-2xl font-bold">
                Explore Kandy hassle-free: Rent from Tuktuk
                <span className="text-[#54B435]">mango</span>.com!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                As a trusted TukTuk service, TukTuk Mango promises to provide
                the opportunity to rent TukTuks: if you love to drive your own
                TukTuk, yeah we can give it to you! If you select TukTuk Mango,
                you can also enjoy these mind-blowing benefits:
              </p>
              <ul className="pl-10 pr-5 pt-5 lg:text-xl md:text-lg text-base leading-relaxed list-disc space-y-3">
                <li>Trusted TukTuk service: your safety is our main thing.</li>
                <li>
                  You can select your own Tuk with our wide collection of
                  services including the Classic Tuk, Transformable Tuk, and the
                  Adventure Tuk.
                </li>
                <li>You can select your TukTuk booking dates.</li>
                <li>Do your payment easily with your Debit or Credit cards.</li>
                <li>24/7 unlimited customer support.</li>
                <li>Seamless Kms</li>
                <li>Comprehensive Insurance for users</li>
                <li>
                  To drive legally, we provide a valid local driver's license.
                </li>
                <li>We offer a driving lesson and itinerary advice for you</li>
                <li>
                  Extra benefits: Phone chargers, Bluetooth speakers, coolers,
                  and more
                </li>
              </ul>
              <div className="flex flex-col items-center my-10">
                <button
                  onClick={homePageClick}
                  className="font-bold lg:text-xl text-base text-white hover:text-black bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
                >
                  RESERVE YOUR TUKTUK!
                </button>
              </div>
              <p className="px-5 lg:text-2xl text-xl font-bold">
                Get Your Recognition Permit for Sri Lanka from Kandy Easily
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                To legally drive a tuktuk in Sri Lanka, you need a specific
                permit. There are two ways to obtain it: either through your
                International Driving Permit (IDP) or by having a Regular
                National Country License with a B/C endorsement (which indicates
                you're licensed to drive a car in your country).
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                You have two options for getting your recognition permit from
                the AAC (Automobile Association of Ceylon). Once you choose
                either, you'll get an email containing the license form. Just
                upload your documents there, and we'll have your permit ready
                for you to pick up in Kandy.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Make sure you're protected with our all-inclusive insurance
                coverage.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                All of our tuktuks are equipped with full insurance that not
                only protects your tuktuk and other vehicles in case of damage
                but also ensures coverage for any personal injuries to you, your
                passengers, and anyone else involved.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Become Proficient with Your Tuktuk: Feel at Ease Before
                Embarking on Your Adventure from Kandy
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                We'll give you an online session to run through all the
                last-minute plans, and we'll help you organize your schedule.
                Plus, you'll get thorough driving lessons before setting off to
                discover paradise on your very own tuktuk adventure from Kandy.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Why Pick Tuktukmango.com?
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Renting a tuktuk offers a thrilling and one-of-a-kind
                opportunity to explore the beautiful scenery and embrace the
                local vibe, particularly in areas like Kandy. When choosing a
                rental company, it's important to look into aspects like
                positive reviews, official registration, proper insurance
                coverage, safety measures, fair pricing, reliable customer
                service, license validation, training provision, and
                eco-friendly policies. These factors ensure a smooth and
                enjoyable experience while cruising around.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Ensuring your safety is our top concern. We've got you covered
                with comprehensive rental insurance, routine vehicle check-ups,
                and skilled mechanics for upkeep. Plus, if you ever find
                yourself in a bind on the road, our roadside assistance team is
                just a call away. We believe in fair pricing, no sneaky charges
                here! Our dedication to open communication guarantees top-notch
                customer service and speedy resolution of any concerns you may
                have. And hey, we're proud to say we've taken steps to offset
                all our carbon emissions, doing our part to promote eco-friendly
                tourism and make Sri Lanka greener for all.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                When you're picking out a tuktuk rental service, keep these
                points in mind. Get ready to embrace the freedom of cruising
                along the open roads and soaking in the beauty of Sri Lanka.
                Your adventure kicks off right from Kandy!
              </p>
              <p className="px-5 pt-5 text-3xl font-bold">
                Kandy's Must-See Attractions
              </p>

              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Temple of the Tooth Relic (Sri Dalada Maligawa)
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Come and immerse yourself in the serene atmosphere of this
                temple, where you can witness the sacred relic of Lord Buddha's
                tooth and experience the essence of Buddhism. Admire the
                intricate architecture, take part in traditional ceremonies, and
                bask in the peaceful ambiance. Getting to this temple is
                hassle-free with your own tuktuk ride. Find it{" "}
                <a
                  href="https://sridaladamaligawa.lk/"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Kandy Lake
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Take a leisurely walk around Kandy Lake, which is also
                affectionately called Kiri Muhuda or Milky Ocean. Marvel at the
                stunning reflections of the nearby hills on the tranquil water
                and relish the serene atmosphere. When you're exploring Kandy,
                think about renting a tuktuk to conveniently reach Kandy Lake
                and other interesting sights nearby.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Royal Botanical Gardens, Peradeniya
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Discover the enchanting allure of Peradeniya Botanical Gardens,
                where a rich tapestry of tropical flora awaits your exploration.
                Wander through verdant pathways, admiring the exotic beauty of
                rare orchids and the towering presence of a magnificent
                40-meter-tall Javan fig tree. For a picturesque journey to this
                botanical paradise, opt for a scenic tuktuk ride. Just outside
                Kandy lies the sprawling expanse of the Royal Botanical Gardens
                of Peradeniya, inviting you to meander through themed gardens
                such as the majestic avenue of royal palms and the fascinating
                medicinal plant garden. Accessing these botanical marvels is
                made easy with the option to rent a tuktuk for convenient
                transportation. Find it{" "}
                <a
                  href="https://www.botanicgardens.gov.lk/"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Udawatta Kele Sanctuary
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Take a leisurely walk through the serene Udawatta Kele
                Sanctuary, nestled amidst the natural beauty of Kandy. Discover
                the diverse plant and animal life, ancient cave temples, and
                stunning views that this city has to offer. Opt for a tuktuk
                rental for a hassle-free and environmentally conscious journey
                to the sanctuary. Find it{" "}
                <a
                  href="https://www.google.com/maps/place/Udawatta+Kele+Sanctuary/@7.2988835,80.6398284,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae367cd62a0e9bb:0x36fa6b55cd89eec3!8m2!3d7.2988782!4d80.6424033!16s%2Fm%2F06w5gq7?authuser=0&entry=ttu"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Kandy View Point
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Experience the breathtaking beauty of Kandy from the picturesque
                Kandy View Point. Take in the panoramic cityscape, marvel at the
                majestic Temple of the Tooth, and admire the lush green
                mountains in the backdrop. Enjoy a delightful tuktuk ride to the
                viewpoint and soak in the stunning scenery along the way.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Kandy Cultural Show
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Immerse yourself in the rich tapestry of Sri Lankan culture with
                a visit to the Kandy Cultural Show. Prepare to be dazzled by
                captivating performances that highlight the diverse cultural
                heritage of the country. For a convenient journey to the venue,
                why not consider renting a tuktuk? It's a fun and comfortable
                way to travel and adds to the overall experience.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Gadaladeniya Temple
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Explore the mesmerizing Gadaladeniya Temple, an exquisite
                Buddhist sanctuary renowned for its distinctive architectural
                design. Marvel at the intricate sculptures, serene ambiance, and
                awe-inspiring vistas of the picturesque surroundings. Opting for
                a tuktuk ride adds an extra charm to your journey to this
                memorable temple. Find it{" "}
                <a
                  href="https://www.google.com/maps/place/Gadaladeniya+Raja+maha+viharaya/@7.2491439,80.5385309,15z/data=!4m10!1m2!2m1!1sgadaladeniya+temple+map!3m6!1s0x3ae369d25e76adc5:0xc695c9a219c56f4d!8m2!3d7.25753!4d80.556011!15sChdnYWRhbGFkZW5peWEgdGVtcGxlIG1hcFoZIhdnYWRhbGFkZW5peWEgdGVtcGxlIG1hcJIBD2J1ZGRoaXN0X3RlbXBsZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VRdE5tVmxlazluRUFF4AEA!16s%2Fg%2F11j_p5pg9d?authuser=0&entry=ttu"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Tea Plantations
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Take a delightful journey to the farthest reaches of Kandy and
                explore the beautiful tea estates. Marvel at the breathtaking
                scenery of endless hills blanketed with tea bushes as you delve
                into the art of tea production and indulge in a sip of delicious
                freshly brewed Ceylon tea. Getting to the Ceylon Tea Museum is a
                breeze with a convenient tuktuk ride. Find it{" "}
                <a
                  href="https://www.google.com/maps/place/Ceylon+Tea+Museum/@7.2686647,80.6301589,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae368a77d5cbf91:0xba828c0e203b5306!8m2!3d7.2686594!4d80.6327338!16s%2Fg%2F11fj329wpr?authuser=0&entry=ttu"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </p>
              <div className="flex justify-center mt-10 ">
                <img
                  src={Kandy3}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="flex justify-center font-medium mt-2">
                Reference: &nbsp;
                <a
                  href="https://www.greatgardensoftheworld.com/gardens/peradeniya-botanic-gardens/"
                  className="italic"
                  target="_blank"
                  rel="noreferrer"
                >
                  greatgardensoftheworld
                </a>
              </p>
              <p className="px-5 pt-5 text-3xl font-bold">
                How to Get to Kandy from Colombo
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Train Ride to Kandy
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                If you're planning to journey from Colombo to Kandy by train,
                head straight to Colombo Fort Railway Station for a direct ride.
                Trains are available all day long, offering a speedy and scenic
                trip. Depending on the train you choose, the travel time
                typically ranges from 2 to 3 hours. Sit back, unwind, and soak
                in the breathtaking views as you make your way to Kandy, the
                vibrant cultural hub of Sri Lanka. Find the train time table{" "}
                <a
                  href="https://eservices.railway.gov.lk/schedule/searchTrain.action?lang=en"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Bus Ride to Kandy
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                You can catch a bus directly from Colombo to Kandy! Just head to
                either the Colombo Central Bus Stand (Pettah) or the Colombo
                Bastian Mawatha Bus Terminal. The journey typically lasts
                between 3 to 4 hours, but it could vary based on traffic. Enjoy
                the scenic route filled with lush green landscapes and rolling
                hills as you make your way to the picturesque city of Kandy. For
                more details on routes and bus schedules, you can visit the
                official website of the Sri Lanka{" "}
                <a
                  href="https://www.ntc.gov.lk/"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  National Transport Commission (NTC).
                </a>
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                By Taxi to Kandy
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                You also have the option to hire a private vehicle with a
                driver, either through a rental car service or by using apps
                like Uber or PickMe (a Sri Lankan app). While this is the
                quickest method of travel, it's also the priciest.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Rent a Tuktuk and Drive to Kandy !
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Traveling from Colombo to Kandy in your own tuktuk offers an
                incredible way to soak in the breathtaking scenery and uncover
                Sri Lanka's hidden treasures. Renting a tuktuk adds a thrilling
                element to your journey, granting you the liberty to explore
                intriguing paths and stop wherever catches your eye.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Ready to embark on this adventure? Simply visit our website,{" "}
                <a href="https://tuktukmango.com">
                  <span className="font-bold">
                    tuktuk<span className="text-[#54B435]">mango</span>.com
                  </span>
                </a>
                , and make your reservation online. Choose your preferred dates,
                select any extras you need, and fill in your information.
                Proceed to the payment stage, and get ready to hit the road and
                experience the joy of tuktuk travel in Sri Lanka.
              </p>
              <div className="flex flex-col items-center my-10">
                <button
                  onClick={homePageClick}
                  className="font-bold lg:text-xl text-base text-white hover:text-black bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
                >
                  RESERVE YOUR TUKTUK!
                </button>
              </div>
              <p className="px-5 pt-5 text-3xl font-bold">
                Frequently Asked Questions
              </p>
            </div>
            <div className="pt-5 px-5 relative">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-container border rounded-md p-4 mb-4 bg-[#82CD47] `}
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpand(faq.id)}
                  >
                    <h2 className="lg:text-lg text-sm font-semibold uppercase">
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
                    <p className="text-justify text-sm lg:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="px-5 pt-5 pb-10 text-3xl font-bold">Kandy Map</p>
              <div class="relative lg:mx-5 h-[500px]">
                <iframe
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.41806366728!2d80.58458147199792!3d7.29462857299631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1710668204588!5m2!1sen!2slk"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  title="Google Map of Kandy, Sri Lanka"
                ></iframe>
              </div>
              <div className="flex flex-col items-center my-10">
                <button
                  onClick={homePageClick}
                  className="font-bold lg:text-xl text-base text-white hover:text-black bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
                >
                  RESERVE YOUR TUKTUK!
                </button>
              </div>
            </div>
          </div>
          <WhatsApp />
          <Footer />
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
}

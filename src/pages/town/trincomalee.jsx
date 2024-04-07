import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Trincomalee1 from "../../images/town/trincomalee1.jpg";
import Trincomalee2 from "../../images/town/trincomalee2.jpg";
import Trincomalee3 from "../../images/town/trincomalee3.jpg";
import Trincomalee4 from "../../images/town/trincomalee4.jpg";
import GridLoader from "react-spinners/GridLoader";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import WhatsApp from "../../components/WhatsApp";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Trincomalee() {
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
      question: `Is it safe and legal to drive a TukTuk in Trincomalee?`,
      answer: `Yes, we prioritize your safety. We provide you with a local driving license to safely and legally drive in Sri Lanka.`,
    },
    {
      id: 2,
      question: `What can I do if I face any problems during my rental period?`,
      answer: `Yes, we provide 24/7 customer service throughout the rental period.`,
    },
    {
      id: 3,
      question: `What does your Insurance cover?`,
      answer: `Yes, TukTuk Mango provides complete Insurance that ensures both the TukTuk and any other vehicles involved in case of an accident. This Insurance increases personal injuries for you, other passengers, and even third parties. So, all the people are safe with our TukTuk service!`,
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
              src={Trincomalee1}
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
            <a href="/trincomalee" className="opacity-60">
              <span>TRINCOMALEE</span>
            </a>
          </Breadcrumbs>
          {/* ===========Breadcrumbs=========== */}
          <div className="mt-10 lg:mx-12 xl:mx-28">
            <div>
              <h2 className="font-mono font lg:text-3xl text-xl px-5 text-[#54B435] uppercase">
                Trincomalee: Crystal Seas, Marine Marvels, Tales of Splendor.
              </h2>
              <h1 className="mx-4 mt-3 font-serif text-3xl font-bold font lg:text-5xl xl:text-6xl">
                With TukTuk Mango, visit the beautiful places of Trincomalee
              </h1>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                Imagine this: if you get an unforgettable and exciting journey
                to discover the beauty of Trincomalee Sri Lanka! Isn’t it
                amazing? Trincomalee still wins the hearts of visitors around
                the globe because of its stunning beaches, ageless beauty, and
                high-spirited culture. As a visitor to Sri Lanka, you can spend
                your days peacefully lounging on the white sands of Marbel Beach
                or exploring the ancient ruins of Fort Frederick. What’s more?
                The beauty of Trinco is endless.
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                The best thing about this Trincomalee journey is that it
                promises to give you cherished memories for years to come
                whether you’re a nature lover, a researcher of history, or a
                person who is simply seeking relaxation for your busy life. But
                how do we make this journey more simple? With TukTuk Mango, now
                you can get a safe TukTuk journey to Trincomalee. But how?
                TukTuk Mango provides a safe TukTuk for you to visit all
                breathtaking places! With your favourite TukTuk, now you can
                enjoy all the beautiful places of Trinco.
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                So, get ready to dive yourself into the amazing beauty of
                Trincomalee like never before with TukTuk Mango leading the way.
              </p>
              <p className="px-5 py-5 lg:text-3xl text-2xl font-bold">
                Discover Exciting Activities in and Around Trincomalee!
              </p>
              <p className="px-5 py-5 lg:text-xl text-lg font-bold text-justify">
                Uncover Trincomalee's Hidden Charms Together
              </p>
              <div className="flex justify-center ">
                <img
                  src={Trincomalee2}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="px-5 pt-5 lg:text-3xl text-2xl font-bold">
                Explore Trincomalee hassle-free: Rent from Tuktuk
                <span className="text-[#54B435]">mango</span>.com!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                As a trusted TukTuk service, TukTuk Mango promises to provide
                the opportunity to rent TukTuks: if you love to drive your own
                TukTuk, yeah we can give it to you! If you select TukTuk Mango,
                you can also enjoy these mind-blowing benefits:
              </p>
              <ul className="px-10 pt-5 lg:text-xl md:text-lg text-base leading-relaxed list-disc space-y-3">
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
                Get Your Recognition Permit for Sri Lanka from Trincomalee
                Easily
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
                for you to pick up in Trincomalee.
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
                Embarking on Your Adventure from Trincomalee
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                We'll give you an online session to run through all the
                last-minute plans, and we'll help you organize your schedule.
                Plus, you'll get thorough driving lessons before setting off to
                discover paradise on your very own tuktuk adventure from
                Trincomalee.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Why Pick Tuktukmango.com?
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Renting a tuktuk offers a thrilling and one-of-a-kind
                opportunity to explore the beautiful scenery and embrace the
                local vibe, particularly in areas like Negombo. When choosing a
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
                Your adventure kicks off right from Trincomalee!
              </p>
              <p className="px-5 pt-5 text-3xl font-bold">
                Feel the stunning beauty of Trincomalee!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                It doesn’t matter whether you’re a beach lover, a history
                enthusiast, or an ordinary visitor, there are multiple exciting
                things to see and feel. For easier navigation, I will explore
                the best places below!
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                The most popular beaches
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Nilaveli beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Nilaveli Beach is the most popular beach in Sri Lanka currently
                a lot of visitors must visit and enjoy a lot of activities. Just
                off the shore, you will see Pigeon Island, it is an excellent
                place for snorkelling. Another great way is you can explore the
                waters of the Indian Ocean and spot dolphins and whales through
                the boat tours.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Marble beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Marble Beach is one of the most stunning beaches in Sri Lanka
                because of its white sand and amazing beauty. This white sand
                shows you how pure and clean this beach is. Yeah, this is one of
                the cleanest beaches in Sri Lanka which is grateful for Solo
                travellers. And, don’t forget it has a small island nestled here
                so the beach is also frequented by endemic bird and mammal
                species of birds and mammals.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Uppuveli beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Uppuveli Beach is a popular tourist spot. If you’re a Sri Lankan
                fresh food lover, this beach is popular for tasting a wide
                variety of local food options, especially seafood. Moreover,
                this crystal water provides many activities for visitors who
                want an enjoyable experience in Sri Lanka.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Dutch Bay Beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                As the name implies, Dutch Bay Beach is an attractive beach with
                golden colour pure sand, and turquoise water spread across
                several kilometres. What are the best experiences you can get at
                this Dutch Bay Beach? If you visit this beach you will see local
                fishing boats onshore waiting to go into the sea in the morning,
                you can go jogging and feel the fresh air, and you can taste the
                ice cream or seafood like barbecued crabs and lobsters.
              </p>
              <div className="flex justify-center mt-10 ">
                <img
                  src={Trincomalee3}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Diving and snorkeling
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Pigeon Island
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Pigeon Island is a popular place named after the Pigeons. This
                island is used as a breeding island. Now, this island is also
                home to a wide variety of rare and beautiful coral and fish
                species proving it is an amazing place for snorkeling. Pigeon
                Island is even a property for the Hawksbill Turtle, the Green
                Turtle, and the Blacktip Reef Shark. In addition to the rich
                underwater, visitors can see flocks of rock pigeons flying out
                of the rocks on the island.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Scuba diving
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Whether you’re a diving expert or a newbie, you can find
                something for yourself at Trincomalee City! While Swami Rock
                offers drift diving, Nilaveli is home to shallow reefs and
                vibrant aquatic life. If you’re a diver who loves to investigate
                the wreckage of H.M.S. Diomede and H.M.S. Hermes, yes, this
                place has some interesting things to find. And, it will be a
                great hope for divers. Plus, this is a beautiful place for
                photography because you will see octopi, nudibranchs, seahorses,
                frogfish, and various other species around this place.
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Temples
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Thirukonamalai Konesar Temple
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                The Konesar Temple is one of the main highlights of Trincomalee.
                If you visit this temple, in every corner, you will see
                breathtaking and historical views that you can’t believe your
                eyes. This is popularly known as “Kailasa”, a religious
                pilgrimage for the Hindus. Notably, the Koneswaram temple is
                built to worship Lord Shiva- the supreme God of Hinduism and it
                is one of the five “Pancha Ishwarams” (abodes of Shiva).
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Konesar temple has a widely spread history that goes back 400
                B.C.E., later to the 5th century, and finally to the 18th
                century. So, if you’re a researcher and want to explore the
                oldest architectural design, this is a great place to learn more
                about the history!
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Pathirakali Amman Temple
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Pathirakali Amman Temple is a Hindu temple of the goddess Kali
                located in Trincomalee. Hindu people believe that an incarnation
                of the goddess Kali Amman owns this temple. This temple is built
                in the classical Dravidian architecture style, similar to the
                South India Hindu Kowil. The best thing about Pathirakali Amman
                Temple is that it has a beautiful design and interior along with
                beautiful sculptures that are nothing short of excellence. So,
                now visitors can visit this place to see the Pathirakali Amman
                Temple to see the real beauty of Hindu temples.
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Hot spring
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Kanniya Hot Spring
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Kanniya Hot Spring is a highlighting spot that increases the
                brightness of Trincomalee. The Kanniya Hot Spring is located on
                the east coast of Sri Lanka in Trincomalee. It has seven wells
                that are square-shaped each has a four-foot depth. Sri Lankan
                people believe that the water from the well has healing
                properties. Yes, this is a great example of the purest of
                nature. The temperature of the water at these hot springs varies
                between wells, but the average temperature is warm to hot.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                So, if you visit Kanniya Hot Spring, you can feel the natural
                hot water without a technical water heating system.
              </p>
              <div className="flex justify-center mt-10">
                <img
                  src={Trincomalee4}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="px-5 pt-5 text-3xl font-bold">
                How to Get to Trincomalee from Colombo
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Train Ride to Trincomalee
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                You can catch a train from Colombo Fort to Trincomalee, and
                there are usually one to two trains running each day. The night
                mail train will get you there in about 8 hours and 15 minutes,
                while a regular train will take around 3 hours and 40 minutes.
                You can check the train timetable{" "}
                <a
                  href="https://eservices.railway.gov.lk/schedule/searchTrain.action?lang=en"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                for more details.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Bus Ride to Trincomalee
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                You can catch a bus from Colombo's Bastian Mawatha Bus Terminal
                to Trincomalee (route 49), which will take approximately 6 and a
                half hours to reach there. For planning your journey and
                checking bus schedules, visit the Sri Lanka{" "}
                <a
                  href="https://www.ntc.gov.lk/"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  National Transport Commission (NTC){" "}
                </a>
                official website.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                By Taxi to Trincomalee
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                If you prefer, you can hire a private car and driver to get to
                Trincomalee from Colombo. It's the quickest option but can be
                pricier. The journey typically takes about 5 and a half hours.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Rent a Tuktuk and Drive to Trincomalee!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Traveling from Colombo to Trincomalee in your own tuktuk offers
                an incredible way to soak in the breathtaking scenery and
                uncover Sri Lanka's hidden treasures. Renting a tuktuk adds a
                thrilling element to your journey, granting you the liberty to
                explore intriguing paths and stop wherever catches your eye.
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
            <div className="pt-5 px-5 relative xl:h-[350px] lg:h-[350px] md:h-[350px] h-[500px]">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-container border rounded-md p-4 mb-4 bg-[#82CD47] mt-4`}
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
              <p className="px-5 pt-5 text-3xl font-bold">
                Visit all the mind-blowing places of Trincomalee safely!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Experience the wonderful beauty of Trincomalee peacefully and
                safely by selecting TukTuk Mango as your partner! Whether it's
                exploring ancient sites, and beautiful beaches, or immersing
                yourself in local culture, our trusted TukTuk service promises
                you to make your journey unforgettable with your own TukTuk. So,
                choose TukTuk Mango and pick your own TukTuk to visit
                Trincomalee safely!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                So, don't miss out on any of the mesmerising attractions this
                beautiful destination has to offer- choose TukTuk Mango be your
                guide to unforgettable adventures in Trincomalee!
              </p>
            </div>
            <div>
              <p className="px-5 pt-5 pb-10 text-3xl font-bold">
                Trincomalee Map
              </p>
              <div class="relative mx-5 h-[500px]">
                <iframe
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63122.11417057675!2d81.17201672456065!3d8.583291985932245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbcb6902dbe27%3A0x7de76a7a331b0fbb!2sTrincomalee!5e0!3m2!1sen!2slk!4v1712083177681!5m2!1sen!2slk"
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

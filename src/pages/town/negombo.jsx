import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Negombo1 from "../../images/town/negombo/negombo1.jpg";
import Negombo2 from "../../images/town/negombo/negombo2.jpg";
import Negombo3 from "../../images/town/negombo/negombo3.jpg";
import GridLoader from "react-spinners/GridLoader";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import WhatsApp from "../../components/WhatsApp";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Negombo() {
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
      question: `Is it safe and legal to drive a TukTuk in Negombo?`,
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
              src={Negombo1}
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
            <a href="/negombo" className="opacity-60">
              <span>NEGOMBO</span>
            </a>
          </Breadcrumbs>
          {/* ===========Breadcrumbs=========== */}
          <div className="2xl:px-40 xl:px-34 lg:px-20 mt-10">
            <div>
              <h2 className="font-mono font lg:text-3xl text-xl px-5 text-[#54B435] uppercase">
                Negombo: The Starting and Ending Point of Tropical Adventures
              </h2>
              <h1 className="px-4 pt-3 font-serif text-3xl font-bold font lg:text-5xl xl:text-6xl">
                Explore the beauty of Negombo with TukTuk Mango
              </h1>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                Are you ready to unlock the beauty of Negombo? Negombo is a
                waterside paradise that has a mind-blowing beauty for waiting.
                When you step into this enchanting city, you’ll be greeted by
                fresh air from the sea and eye-catching colors, sounds, and
                flavors that will peace your mind. Imagine this: walk through
                the colorful and vibrant market stalls and enjoy fresh sea fish
                flavored with the spicy scent of local spices. Yes, if you visit
                Negombo, you can catch all these mind-blowing experiences!
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                The true magic of Negombo lies in its breathtaking natural
                beachside. While feeling the tunes of the ear-attractive waves,
                give the time to feel the softness of the sand to your toes when
                you walk through the historical natural beaches. Moreover, to
                refresh your memories and romanticize yourself, Negombo Beach is
                a great place for you!
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                And, what is the best method to experience the true beauty of
                Negombo than with TukTuk Mango? Just pick TukTuk Mango and
                unlock the Negombo beauty together! Our friendly service is
                ready to give you a safe and unforgettable adventure with a safe
                TukTuk. So, if you need to feel the Negombo beauty with a
                TukTuk, join hands with our best TukTuk service. With TukTuk
                Mango, it’s not just a ride, it is a friendship tour!
              </p>
              <p className="px-5 py-5 lg:text-3xl text-2xl font-bold">
                Discover Exciting Activities in and Around Negombo!
              </p>

              <p className="px-5 py-5 lg:text-xl text-lg font-bold text-justify">
                Discover the secrets hidden within Negombo
              </p>

              <div className="flex justify-center ">
                <img
                  src={Negombo2}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="flex justify-center font-medium mt-2">
                Reference: &nbsp;
                <a
                  href="https://www.colibri-reisen.de/touren/jewels-of-sri-lanka/"
                  className="italic"
                  target="_blank"
                  rel="noreferrer"
                >
                  colibri-reisen
                </a>
              </p>
              <p className="px-5 pt-5 lg:text-3xl text-2xl font-bold">
                Explore Negombo hassle-free: Rent from Tuktuk
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
                Get Your Recognition Permit for Sri Lanka from Negombo Easily
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
                for you to pick up in Negombo.
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
                Embarking on Your Adventure from Negombo
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                We'll give you an online session to run through all the
                last-minute plans, and we'll help you organize your schedule.
                Plus, you'll get thorough driving lessons before setting off to
                discover paradise on your very own tuktuk adventure from
                Negombo.
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
                Your adventure kicks off right from Negombo!
              </p>
              <p className="px-5 pt-5 text-3xl font-bold">
                Negombo's Must-See Attractions
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Beach
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Negombo Beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Negombo Beach is a well-maintained and attractive beach that has
                a wide expanse of natural golden sand. Negombo Beach is a great
                place for literal swimmers who love swimming, sunbathing, and
                multiple water sports. It provides a safe place for water
                activities such as kitesurfing, windsurfing, and sailing are
                popular. If you love to see the beauty of the sunset with your
                loved ones, Negombo Beach is a popular place. Yeah, that’s why
                this is a great place.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Also, Negombo Beach is a famous and highly recommended holiday
                destination stop that includes beautiful hotels, resorts, and
                luxury restaurants. This beach always remembers visitors to
                Italy because of its multiple historical churches and uncommon
                historical architectural designs. Still, this is a trendy
                tourist spot because of its amazing beauty!
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Browns Beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Browns Beach is an unspoiled private beach in Negombo that has
                wide popularity among tourists. This beach attracts millions of
                tourists' hearts because of its unique golden sands, turquoise
                blue water, and breathtaking palm trees.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Morawala Beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                In Negombo City, Morawala Beach is much discussed among
                visitors. It is popular to see the sunset in the evening!
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Church & Cathedral
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                St. Mary’s Church
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                In Sri Lanka, St. Mary’s Church, well known as Maha Veediya
                Palliya, is one of the largest cathedrals, located in the middle
                of Negombo. The most exciting thing about this church is that it
                is 140 years old and is popularly known for one painting of
                Jesus that was painted by Buddhist painter, N.S. Godamanne. Due
                to its numerous churches and Portuguese-Dutch influence, it was
                also introduced as a “Little Rome ''. So, if you visit Negombo,
                you can feel the beauty and old smell of this church.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                St. Sebastian’s Church
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Almost ruined by 2019’s suicide bomb, St. Sebastian’s church was
                reconsecrated three months after the attack. The most exciting
                fact about St. Sebastian’s Church is that it was designed in a
                unique Gothic Revival style and the creator used to make this
                church was the Reims Cathedral in France.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                St. Stephen’s Anglican Church
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                St. Stephen’s Anglican Church looks like an ancient Dutch Fort
                because it is located surrounded by lush green views. Similar to
                Sebastian Church, this is designed in the Gothic Revival style
                of architecture and we can see it features small stone crosses
                on each ridge tile on top.
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                National Park
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Wilpattu National Park
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                The Wilpattu National Park is the home for the elusive Sri
                Lankan leopard so it gained a wide popularity among visitors in
                Sri Lanka and other countries. And, it is specified by natural
                sand-rimmed water basins called “willus” that fill with
                rainwater. If you visit this amazing national park as a Safari,
                you will see a vast array of elephants, Sloth bears, spotted
                deer, a range of colorful uncommon birds, and various species of
                butterflies.
              </p>
              <div className="flex justify-center mt-10 ">
                <img
                  src={Negombo3}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="flex justify-center font-medium mt-2">
                Reference: &nbsp;
                <a
                  href="https://lankaescapes.com/destinations/wilpattu/"
                  className="italic"
                  target="_blank"
                  rel="noreferrer"
                >
                  lankaescapes
                </a>
              </p>

              <p className="px-5 pt-5 text-3xl font-bold">
                How to Get to Negombo from Airport
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Bus Ride to Negombo
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                If you're at the bus stop close to the airport, you can easily
                catch a bus headed to Negombo. Look out for buses numbered 187
                or 240.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                By Taxi to Negombo
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                The most convenient way to get from the airport to Negombo is by
                grabbing a taxi through services like Uber or Pickme. It
                typically runs between $8 to $15, and the ride lasts about 12
                minutes.
              </p>
              <p className="px-5 pt-5 text-3xl font-bold">
                How to Get from Colombo to Negombo
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Train Ride to Colombo
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                You can catch trains frequently from Negombo to Colombo, and the
                ride typically takes about an hour and a half.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Bus Ride to Colombo
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                You can catch a bus easily from Negombo's main bus station to
                Colombo (bus no. 240). The journey usually takes about 1.5
                hours, and there are plenty of buses running frequently.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                By Taxi to Colombo
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                If you prefer, you can also opt for a private car and driver
                service, which is the quickest but priciest option. This way,
                you can expect to reach Colombo from Negombo in about 30 to 40
                minutes.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Rent a Tuktuk and Drive to Negombo!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Traveling from Colombo to Negombo in your very own tuktuk is an
                incredible way to soak in the stunning sights and uncover the
                hidden treasures of Sri Lanka. Renting a tuktuk promises an
                adventure-filled journey, giving you the liberty to navigate
                through captivating paths and stop at any spot that catches your
                eye.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Hop onto our user-friendly online booking platform at{" "}
                <a href="https://tuktukmango.com">
                  <span className="font-bold">
                    tuktuk<span className="text-[#54B435]">mango</span>.com
                  </span>
                </a>
                . Simply pick your desired dates, select any extras you may
                need, and provide your details. Proceed to the payment section,
                and get ready to embark on an unforgettable tuktuk ride across
                Sri Lanka!
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
                  className={`faq-container border rounded-md p-4 mb-4 bg-[#82CD47]`}
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
                Experience a hassle-free Negombo journey!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Imagine this: traveling to Negombo in your own TikTok without
                any hassle will be one of the unforgettable moments of your life
                so you can add it to your travel diary as a mind-blowing
                journey. TukTuk Mango is ready to take you through the colorful
                cities of Negombo, fantastic beaches to feel the sunset and,
                pray in old churches, and more.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                So, why are you still waiting? Join with TukTuk Mango and feel
                the Negombo beauty!
              </p>
            </div>
            <div>
              <p className="px-5 pt-5 pb-10 text-3xl font-bold">Negombo Map</p>
              <div class="relative lg:mx-5 h-[500px]">
                <iframe
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126670.33644594673!2d79.77585073436786!3d7.189611414426807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c6bb2f73b%3A0xa51626e908186f3e!2sNegombo!5e0!3m2!1sen!2slk!4v1711380204387!5m2!1sen!2slk"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  title="Google Map of Negombo, Sri Lanka"
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

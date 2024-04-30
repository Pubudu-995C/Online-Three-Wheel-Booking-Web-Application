import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Dutch_Fort from "../../images/town/jaffna/Dutch_Fort.jpg";
import Jaffna_Library from "../../images/town/jaffna/Jaffna_Library.jpg";
import Casurina_Beach from "../../images/town/jaffna/Casurina_Beach.jpeg";
import Fort_Hammenheil from "../../images/town/jaffna/Fort_Hammenheil.jpg";
import GridLoader from "react-spinners/GridLoader";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import WhatsApp from "../../components/WhatsApp";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Jaffna() {
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
      question: `What do I need to consider when renting a tuk-tuk in Jaffna?`,
      answer: `Renting a tuktuk in Jaffna offers you the perfect opportunity to discover the city at your leisure. We can help you obtain a temporary local driving license, so you can hit the road hassle-free.`,
    },
    {
      id: 2,
      question: `Is it okay to drive a tuk-tuk in Jaffna?`,
      answer: `Yeah, driving a tuktuk in Jaffna is totally safe. We'll even give you a lesson to make sure you feel confident behind the wheel.`,
    },
    {
      id: 3,
      question: `What should I do if I encounter any problems while renting?`,
      answer: `We're here to help you out every step of the way during your rental period. If you encounter any problems, just reach out to our customer support team, and we'll take care of it for you.`,
    },
    {
      id: 4,
      question: `How can I obtain my license to drive to Jaffna?`,
      answer: `On the day you're scheduled for pickup, one of our friendly driving instructors will arrive at your hotel with the tuktuk, complete with all the required permits and paperwork. They'll give you a thorough driving lesson, ensuring you're comfortable behind the wheel, and then you're ready to hit the road and discover paradise!`,
    },
    {
      id: 5,
      question: `Is it possible for me to leave the tuktuk in Jaffna?`,
      answer: `Certainly! You're welcome to leave the tuktuk in Jaffna. You can find information about the fees for both pick-up and drop-off right here!`,
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
              src={Dutch_Fort}
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
            <a href="/jaffna" className="opacity-60">
              <span>JAFFNA</span>
            </a>
          </Breadcrumbs>
          {/* ===========Breadcrumbs=========== */}
          <div className="2xl:px-40 xl:px-34 lg:px-20 mt-10">
            <div>
              <h2 className="font-mono font lg:text-3xl text-xl px-5 text-[#54B435] uppercase">
                Jaffna: Where echoes of history softly murmur and secrets sway
                with the breeze.
              </h2>
              <h1 className="px-4 pt-3 font-serif text-3xl font-bold font lg:text-5xl xl:text-6xl">
                Journey into the wonders of Jaffna, Sri Lanka with the TukTuk
                Mango!
              </h1>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                Jaffna is a different kind of paradise that presents a different
                aspect of Sri Lanka’s unique beauty, so I can confidently say
                that this will be one of the most amazing adventurer experiences
                to add to your travel diary! So, let’s walk through the glamor
                of Jaffna! This is not a smoothie journey through tea
                plantations with beautiful waterfalls or mountains, but we can
                promise that this will be a fantastic journey with Jaffna’s
                unique blend of cultural richness and breathtaking landscapes.
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                The lovely city of Jaffna with the most gorgeous people with
                smiles, waiting for visitors to explore it. Jaffna is full of
                history and natural beauty that will make you stop and stare.
                So, if you’re a silent nature lover or a person who loves to
                explore the historical side of Sri Lanka, come and feel this
                amazing moment! Not only for historical things but Jaffna is
                famed for its delicious delights like crab curry, tasty Dosa,
                and string hoppers that have rejoiced your taste buds. So, enjoy
                Jaffna's excitement!
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                I must say about the fabulous night in Jaffna, this not will be
                an ordinary night as twilight descends upon the city, Jaffna
                painting a breathtaking backdrop to show its vibrant nightlife.
                From bustling street markets to tranquil temple ceremonies,
                Kowils glowing with light bulbs bring peace and blessing to your
                mind. According to Sri Lankan people, Jaffna is not a place, it
                is a holy place blessed by god. So, greatly welcome to you for
                Jaffna!
              </p>
              <p className="px-5 py-5 lg:text-3xl text-2xl font-bold">
                Discover Exciting Activities in and Around Jaffna!
              </p>
              <p className="px-5 py-5 lg:text-xl text-lg font-bold text-justify">
                Uncover Jaffna's Hidden Charms Together
              </p>
              <div className="flex justify-center ">
                <img
                  src={Jaffna_Library}
                  className="object-cover h-[500px] w-[900px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="px-5 pt-5 lg:text-3xl text-2xl font-bold">
                As a trusted TukTuk service, how does TukTuk{" "}
                <span className="text-[#54B435]">Mango</span> make your journey
                comfortable?
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                As a reliable TukTuk service, our main priority is to rent a
                safe and comfortable TukTuk to make your journey more enjoyable
                and comfortable! The best thing is that as a visitor to Sri
                Lanka, you can select your favorite TukTuk and you can use our
                TukTuk till the end of your ride. According to these benefits,
                we provide these extra benefits for you!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                As a reliable TukTuk service, TukTuk Mango ensures your journey
                is smooth and comfortable from start to finish. Here's how we
                make it happen:
                <ul className="list-disc md:ml-14 ml-8">
                  <li className="font-bold mt-5">Comfortable rides:</li>
                  <span>
                    Our TukTuks are well-maintained and we always provide
                    comfortable seating to make your ride pleasant and
                    home-like.{" "}
                  </span>
                  <li className="font-bold mt-5">
                    You can select your TukTuk:
                  </li>
                  <span>
                    TukTuk Mango does not limit you! If you use our service, we
                    allow you to select your favorite TukTuk to suit your
                    preferences and budget.
                  </span>
                  <li className="font-bold mt-5">Convenient booking:</li>
                  <span>
                    Booking a TukTuk with TukTuk Mango is easy and hassle-free.
                    Or, you can pay easily for our TukTuk service with your
                    Debit or Credit card.
                  </span>
                  <li className="font-bold mt-5">24/7 Customer Support:</li>
                  <span>
                    Our dedicated customer support team is always with you! We
                    are available around the clock to assist you with any
                    queries or concerns you may have during your journey
                  </span>
                  <li className="font-bold mt-5">Unlimited KMs:</li>
                  <span>
                    Just as I mentioned above, with TukTuk Mango you don’t need
                    to redirect from one vehicle to another. You can ride with
                    your selected TukTuk till the end of the ride!
                  </span>
                  <li className="font-bold mt-5">Extra features:</li>
                  <span>
                    In addition to these benefits, we provide Phone chargers,
                    Bluetooth speakers, coolers, and more for you! You can
                    select these features according to your budget
                  </span>
                  <li className="font-bold mt-5">Local driver's license:</li>
                  <span>
                    To drive safely and legally in Sri Lanka, we give you a
                    valid and local driver’s license for you.
                  </span>
                  <li className="font-bold mt-5">Comprehensive Insurance:</li>
                  <span>
                    All of our TukTuks are fully completed with full insurance.
                    Not only protects your TukTuk and other vehicles in case of
                    damage but also promises you to be protected from any
                    personal injuries to you, your passengers, and anyone else
                    involved.
                  </span>
                </ul>
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Yeah, Jaffna is a long ride but it will be an unforgettable
                moment for your long lifetime with our comfortable TukTuk
                service. So, let’s discover the splendors of Jaffna before a
                long ride to Jaffna! Then, immerse yourself in Jaffna!
              </p>
              <div className="flex flex-col items-center my-10">
                <button
                  onClick={homePageClick}
                  className="font-bold lg:text-xl text-base text-white hover:text-black bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
                >
                  RESERVE YOUR TUKTUK!
                </button>
              </div>
              <p className="px-5 lg:text-2xl text-xl font-bold">
                Get Your Recognition Permit for Sri Lanka from Jaffna Easily
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
                for you to pick up in Jaffna.
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
                Embarking on Your Adventure from Jaffna
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                We'll give you an online session to run through all the
                last-minute plans, and we'll help you organize your schedule.
                Plus, you'll get thorough driving lessons before setting off to
                discover paradise on your very own tuktuk adventure from Jaffna.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Why Pick Tuktukmango.com?
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Renting a tuktuk offers a thrilling and one-of-a-kind
                opportunity to explore the beautiful scenery and embrace the
                local vibe, particularly in areas like Jaffna. When choosing a
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
                Your adventure kicks off right from Jaffna!
              </p>
              <p className="px-5 pt-5 text-3xl font-bold">
                What are the places to visit in Jaffna to encounter the marvels?
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                To maximize the beauty of Jaffna, this place includes the most
                stunning beaches, forts and places, Buddhist temples, the most
                famous Delft Island, and more exciting places. Through this
                section, let’s explore the amazement of these places before
                starting your real Jaffna ride. Think, this is like an
                experiment!
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                The most stunning beaches
              </h2>
              <div className="flex justify-center mt-10 ">
                <img
                  src={Casurina_Beach}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Casuarina Beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Because of the abundance of Casuarina trees, Casuana's name was
                given to this stunning beach. If you visit Casuarina Beach, you
                will see how this beach doubles and triples the beauty and value
                of Jaffna. Casuarina Beach has an extraordinary beauty with its
                soft golden sand grains and refreshing and pure blue waters. One
                of the highlighted points that tons of visitors come to
                Casuarina Beach is the crystal clear water which is free of any
                sort of pollution.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                As a visitor, if you need to spend a calm and peaceful day,
                Casuarina will be a healing place for you. Because it is a
                blessing skill to bring peace to your mind with its
                tranquilizing waves and soothing sand. And, I’m sure you can’t
                find such a calm feeling in the city's hustle and bustle.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Casuarina Beach is free from shallow waters and the absence of
                strong waves, so, this is one of the safest beaches in Sri Lanka
                and it is highly recommended for any age. Also, you can do more
                joyful activities on this beach such as walking on the beach day
                or night, creating sand castles, riding bicycles, and more
                without any risk. And, this is a pleasant place to watch the
                sunset with your loved ones! If you visit Casuarina Beach, you
                will feel you live in heaven alive!
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Charty Beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                To reach this picturesque white-sand Charty Beach, you need to
                travel 15 Km from Jaffna. You surely think it is not a long ride
                when you see the amazing view of this beach. It always glows
                with its pure white sand. Also, you can spend a serene day
                amidst the coconut and palmyra trees while feeling the breeze.
                So, if you are a fan of alone, take a peaceful walk along the
                shore, or even finish reading your old book. Needless to say,
                this is a great place to calmly spend your day or night!
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Akkarai Beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Akkarai Beach is located in popular Thondamanaru city. This
                place is popular and people consider it a holy place because of
                the famous Lord Murugan Temple near the beach that offers a
                panoramic view of Akkarai Beach. The best part of Akkarai Beach
                is that the beach is pure, tranquil, and not crowded. This is a
                great place to spend a peaceful day with your families or
                friends or alone!
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Karainagar Beach
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                If you’re a bird lover and love bird watching, Karainagar Beach
                is a place of your own. Also, if you’re looking for a silent
                retreat to be alone with your loving aspects, this place should
                be included on your list!
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Royal Palace in Jaffna
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Sangiliyan Thoppu
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Among the must-visit places in Jaffna, this is definitely one
                for visitors. If you’re a researcher or need to get an idea
                about the history of Jaffna, Sangelian Thoopu can never be
                ignored. If you visit this place, you can see the view of the
                antique bathing pool and the remnants of the royal palace. This
                place still holds the memory of the last Tamil King who ruled
                the Yalpana Kingdom successfully. So, if you visit this place,
                you can get a great idea about Jaffna’s immortal history.
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                The most famous Kovils-like symbol of Jaffna
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Nallur Temple
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Nallur Temple is a widely popular place worldwide and pilgrims
                from all parts of the world visit Nallur Temple. Therefore,
                there is never a shortage of population here. Also, the old and
                cultural beauty will never diminish. Visitors from all over the
                world come to this place mainly because of the golden arch and
                the extended Gopuram. Also, this place is now considered the
                main place to hold any type of religious festival.
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Forts and places to visit
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Jaffna Fort
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Jaffna Fort is the second largest fort in Sri Lanka expanding an
                area of 55 acres. Jaffna Fort stands today as proof of a fact to
                the humans that war spares nothing and no one, not even a
                monument of paramount significance. When it comes to the history
                of Jaffna Fort, the Portuguese were the creators of this fort
                and the island was captured and ruled by the Dutch, the fort was
                rebuilt and used as a military and administrative building.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                From then till today, the Jaffna Fort stands tall, teaching Sri
                Lankans a lesson of history and brutal war that will never be
                forgotten. Fortified by limestone ramparts with a series of
                tunnels, and a moat, the highlight of the monument’s
                architecture is the star-shaped design. All these architectural
                designs show us how advanced architecture was in those days.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                During the Civil War, multiple buildings were made within Jaffna
                Fort such as the Queen’s House, the Kruys church, a hospital,
                and a prison. How amazing are these things? There is a spooky
                yet exciting structure at the fort. So, don’t you have the
                excitement to enjoy this spooky experience?
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Dutch Fort
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Dutch Fort is a monument that recalls memories such as 1618,
                under the rule of the Portuguese, once the Dutch fort of Asia,
                that took place ever since, and the role that the fort played.
                Dutch Fort proudly stands today with its immortal beauty and
                prowess and welcomes visitors warmly! Also, today, this
                magnificent Dutch Fort stands as a witness not only to the
                independence of the country but also how the country was passed
                on from one ruler to the other and then finally stood on its
                own.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                The Dutch Fort includes the Governor’s house or the King’s
                house, the Queen’s house, Kruys Church, The Garrison Parade
                Ground, The Police quarters, and various rooms and houses from
                the Portuguese era. So, this is a great place to visit with its
                stunning beauty and strange things. And, the best thing is that
                Dutch Fort is now a heritage hotel open for visitors to come and
                explore its walls and learn more about Sri Lanka’s proud
                history.
              </p>
              <div className="flex justify-center mt-10 ">
                <img
                  src={Fort_Hammenheil}
                  className="object-cover h-[500px] w-[900px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Fort Hammenhiel
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Hammenhiel is not a smooth or beautiful place to explore. It is
                popular as a prison, located in a beautiful location on the
                mesmerizing island between the Kayts and the Karaitivu Islands.
                This is the glamor of Fort Hammenhiel even if it is a prison.
                Also, Fort Hammenhiel is now a beautiful hotel open for visitors
                to explore history and ancient beauty through its walls.
                Landmark in Jaffna
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Quiet and peaceful Buddhist Temples
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Dambakola Patuna
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Fort of Jambukola well known as Dambakola Patuna is one of the
                most ancient venues of Sri Lanka. The best thing about Dambakola
                Patuna is that this monument has a rich and long-tale history
                and the port holds a lot of importance for the Buddhist
                community. This temple has a wealthy history in 249 BC, one of
                the saplings of the Bodhi tree, the tree under which Buddha was
                enlightened was brought to the country and planted, along with a
                stupa, but today, no such remains are found.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                For the Buddhist followers, the navy has built a replica of the
                stupa and has even planted the Bodhi tree. So, this place gains
                calm and peace for us!
              </p>
            </div>
            <div className="flex flex-col items-center my-10">
              <button
                onClick={homePageClick}
                className="font-bold lg:text-xl text-base text-white hover:text-black bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
              >
                RESERVE YOUR TUKTUK!
              </button>
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
            <p className="px-5 pt-5 text-3xl font-bold">
              Immerse yourself in Jaffna beauty!
            </p>
            <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
              Ride on an unforgettable adventure through the vibrant streets and
              rich culture of Jaffna, Sri Lanka, courtesy of TukTuk Mango! In
              this journey, let us be your guide and partners as you delve into
              the wonders of this enchanting city, immersing yourself in its
              immortal history, tasting delicious curries and Dosa, and
              connecting with its warm and welcoming people. With TukTuk Mango,
              every moment becomes a cherished memory, every experience a tale
              to be told with unlimited benefits and comfort.
            </p>
            <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
              So, get ready to explore, discover, and create lasting impressions
              as you journey through the wonders of Jaffna, one TukTuk ride at a
              time! We are sure this will be an unforgettable ride in your short
              lifetime!
            </p>
            <div>
              <p className="px-5 pt-5 pb-10 text-3xl font-bold">Jaffna Map</p>
              <div class="relative lg:mx-5 h-[500px]">
                <iframe
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.033713878074!2d80.00782710077868!3d9.669999242883318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!5e0!3m2!1sen!2slk!4v1714044241617!5m2!1sen!2slk"
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

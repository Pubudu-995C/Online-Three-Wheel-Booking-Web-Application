import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import NineArches from "../../images/town/ella/Nine_arches.jpeg";
import Kithal_ella from "../../images/town/ella/Kithal_Ella.jpeg";
import Little_Adam from "../../images/town/ella/Little_Adam.jpg";
import Bopath_ella from "../../images/town/ella/Bopath_ella.jpeg";
import GridLoader from "react-spinners/GridLoader";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import WhatsApp from "../../components/WhatsApp";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Ella() {
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
      question: `What do I need to consider when renting a tuk-tuk in Ella?`,
      answer: `Renting a tuktuk in Ella offers you the perfect opportunity to discover the city at your leisure. We can help you obtain a temporary local driving license, so you can hit the road hassle-free.`,
    },
    {
      id: 2,
      question: `Is it okay to drive a tuk-tuk in Ella?`,
      answer: `Yeah, driving a tuktuk in Ella is totally safe. We'll even give you a lesson to make sure you feel confident behind the wheel.`,
    },
    {
      id: 3,
      question: `What should I do if I encounter any problems while renting?`,
      answer: `We're here to help you out every step of the way during your rental period. If you encounter any problems, just reach out to our customer support team, and we'll take care of it for you.`,
    },
    {
      id: 4,
      question: `How can I obtain my license to drive to Ella?`,
      answer: `On the day you're scheduled for pickup, one of our friendly driving instructors will arrive at your hotel with the tuktuk, complete with all the required permits and paperwork. They'll give you a thorough driving lesson, ensuring you're comfortable behind the wheel, and then you're ready to hit the road and discover paradise!`,
    },
    {
      id: 5,
      question: `Is it possible for me to leave the tuktuk in Ella?`,
      answer: `Certainly! You're welcome to leave the tuktuk in Ella. You can find information about the fees for both pick-up and drop-off right here!`,
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
              src={NineArches}
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
            <a href="/ella" className="opacity-60">
              <span>ELLA</span>
            </a>
          </Breadcrumbs>
          {/* ===========Breadcrumbs=========== */}
          <div className="2xl:px-72 xl:px-34 lg:px-20 mt-10">
            <div>
              <h2 className="font-mono font lg:text-3xl text-xl px-5 text-[#54B435] uppercase">
                Explore Misty Peaks, Ella's tranquil haven of enchanting
                serenity.
              </h2>
              <h1 className="px-4 pt-3 font-serif text-3xl font-bold font lg:text-5xl xl:text-6xl">
                Feel the enchanting beauty of Ella, Sri Lanka with TukTuk Mango!
              </h1>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                Find the glamorous beauty of Ella, Sri Lanka, and add
                unforgettable memories to your travel diary! If you’re a silent
                nature sufferer, maybe you lose yourself in its mind-blowing
                landscape and secret waterfalls. From the peaceful tea
                plantations to the mystery waterfalls, this amazing destination
                offers beauty even to burst your taste buds. Then, quickly get
                ready to be captivated by the charm of Ella, where the magic of
                Sri Lanka's landscapes awaits your exploration!
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                Have you ever dreamed of going to a magical waterfall with your
                favorite person like in a Disney movie along the most beautiful
                scenery? Now, it is no longer a dream! With the majestic beauty
                of Ella's iconic waterfalls, where cascading streams of
                crystalline water plunge into rocky pools below, you will feel
                alive in a Disney movie. We can surely say that their timeless
                beauty and cold climate will captivate your soul. So, feel this
                moment and write a romantic chapter in your travel diary!
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                In Ella, beauty is not just a place to visit but an experience
                to feel - a symphony of sights, sounds, and sensations that
                awaken the senses and nourish the soul. So come, let us walk
                through the magical beauty of Ella, where every moment is
                unforgettable and alive forever!
              </p>
              <p className="px-5 py-5 lg:text-3xl text-2xl font-bold">
                Discover Exciting Activities in and Around Ella!
              </p>
              <p className="px-5 py-5 lg:text-xl text-lg font-bold text-justify">
                Uncover Ella's Hidden Charms Together
              </p>
              <div className="flex justify-center">
                <img
                  src={Kithal_ella}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="px-5 pt-5 lg:text-3xl text-2xl font-bold">
                Explore Ella hassle-free: Rent from Tuktuk
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
              <p className="px-5 pt-5 lg:text-3xl text-2xl font-bold">
                With TukTuk mango makes your journey more rich!
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                Enjoy the glamorous beauty of Ella, Sri Lanka with the trusted
                TukTuk partner TukTuk Mango! We provide you the opportunity to
                rent TukTuk to go on your own TukTuk ride to visit Ella. As I
                mentioned above, in Ella, every moment and second is an
                invitation to immerse yourself in nature's embrace. However, if
                you’re worried about how you visit Ella, we give you an
                enjoyable journey with a safe TukTuk rental service. With your
                own TukTuk, now you can feel the beauty of Ella with your
                lovelies! As a trusted and responsible TukTuk service, we take
                care of your safety so that you can enjoy the beauty of Ella,
                Sri Lanka hassle-free!
              </p>
              <p className="px-5 pt-8 lg:text-xl md:text-lg text-base text-justify">
                To safely experience the Ella journey, all of our TukTuk
                services are provided with full insurance that not only protects
                your TukTuk and other vehicles in case of damage but also
                ensures coverage for any personal injuries to you, your
                passengers, and anyone else involved. So, this is a completely
                safe, trusted, and responsible TukTuk service for dear guests!
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
                Get Your Recognition Permit for Sri Lanka from Ella Easily
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
                for you to pick up in Ella.
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
                Embarking on Your Adventure from Ella
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                We'll give you an online session to run through all the
                last-minute plans, and we'll help you organize your schedule.
                Plus, you'll get thorough driving lessons before setting off to
                discover paradise on your very own tuktuk adventure from Ella.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Why Pick Tuktukmango.com?
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Renting a tuktuk offers a thrilling and one-of-a-kind
                opportunity to explore the beautiful scenery and embrace the
                local vibe, particularly in areas like Ella. When choosing a
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
                Your adventure kicks off right from Ella!
              </p>
              <p className="px-5 pt-5 text-3xl font-bold">
                Ella's Must-See Attractions
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Ride Ella to Ella Train
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                One of the most fantastic things in Sri Lanka is riding on the
                Ella Odyssey train from Ella to Ella. Ella Odyssey is the most
                picturesque train ride in the whole world. I can say it is
                amazing so feel it by yourself. It is an 8-hour train ride
                through a white winding, cold climate, misty forests, tea
                plantations, gushing waterfalls, and charming towns.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Through the most stunning route in Sri Lanka, visitors can take
                a 7-hour most comfortable train ride. The open doors and windows
                of the old-fashioned train mean visitors can add a range of
                feelings like mystery, cold, and beauty, and you will live like
                a fairytale. The train stops at hilltop towns like Haputale and
                Nuwara Eliya, and tourists can explore the beauty there.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Visit Nine Arches Bridge
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Nine Arches Bridge popularly said as “The Bridge in the Sky”, is
                a legendary architectural structure in Ella's mountainous
                region. This is a stunning stone bridge located amidst lush
                green tea plantations and we can see beautiful mountains and
                green tea plantations in the backdrop. This is a place that has
                gained a lot of tourist attractions because of its natural
                beauty and cold climate. An interesting tale revolves around the
                construction of this Nine Arches Bridge.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                If you visit this bridge, you will know all these historical
                tales. I am sure it will be an unforgettable journey in your
                travel diary. And, don’t forget, this is a perfect spot for
                photography to add your Instagram story, FB, TikTok, or WhatsApp
                story.
              </p>
              <div className="flex justify-center mt-10 ">
                <img
                  src={Little_Adam}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Climb Little Adam’s Peak
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                This is the mini version of the pilgrimage mountain site of
                central Sri Lanka called Adam's Peak. Maybe you’ve heard of or
                visited Adam’s Peak. It is just a short ride with your TukTuk
                away from Ella town. If you love hiking, this is a great place.
                The hike is very easy and offers stunning panoramic views. This
                little Adam’s Peak is popular for seeing both sunrise and sunset
                live.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Along the 3-hours hiking, you will see smiling tea leaf pickers
                in the tea plantations spread across the area, colorful birds,
                flowers, and flying eagles. Little Adam's Peak provides a more
                pleasant alternative as a hiking spot to those who cannot hike
                on a mountain as big but also want to see a breathtaking view
                from the mountain's top.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Hike to Ella Rock
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Ella Rock is one of the best hiking and trekking sites in Sri
                Lanka. It provides the most picturesque scenarios from the top.
                The most stunning thing is that the trek begins from Ella
                railway station to Kithal Ella railway station or Heel Oya
                railway track. And, if you’re tired and want to get a fresh
                start, you can sit and enjoy some coconut water and fruits while
                embracing the wind and feeling the spectacular view.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Join a cooking class at Ella
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                If you need to enjoy a tasty cooking experience there is no
                country like Sri Lanka. The taste, aroma, nutritional quality,
                and variety of Sri Lankan food depend on the spices used. So, if
                you join these classes you learn how to prepare traditional
                tasty dishes. This will be a great experience for your life. So,
                get this experience surely!
              </p>
              <div className="flex flex-col items-center my-10">
                <button
                  onClick={homePageClick}
                  className="font-bold lg:text-xl text-base text-white hover:text-black bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
                >
                  RESERVE YOUR TUKTUK!
                </button>
              </div>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Ella's Breathtaking Waterfalls
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Diyaluma Falls
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Diyaluma Falls is Sri Lanka’s second-highest waterfall, there
                are multiple natural pools along its 220-meter fall, and
                trekkers can take refreshing baths in their cool water and have
                a cliff-jumping experience. If you love to feel the freshness of
                cold pure water, Diyaluma Falls is a highly recommended place.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Ravana Falls
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Have you ever heard about “Ramayana”? The history of Sri Lanka
                goes back more than 2000 years, and it finds itself in the
                iconic Ramayana. People believe that Ravana was a fervent Sri
                Lankan, and the main villain character in the Ram – Sita tale.
                According to the tale, Ravana abducted Sita and kept her hostage
                in his custody in the famous Ravana caves and the Ravana Falls.
                Ravana Falls has a historical view and includes slopes, valleys,
                hills, and streams that ornament the rocks.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                The fantastic story is that the historical connotations of this
                marvel date back as old as 25,000 years. So, if you love to add
                some historical memory to your travel journey or want to expand
                your historical knowledge, Ravana Falls has something to say!
                The fresh breeze widely expands the glamor of Ravana Falls. So,
                this is a must-visit place in Sri Lanka.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Bambarakanda Falls
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Notably: Bambarakanda Falls is Sri Lanka’s highest waterfall! It
                is located in a mind-blowing forest of pine trees. It shows a
                mystical nature with a hint of darkness but it has a magical
                charm that will captivate your eyes. Bambarakanda Falls is
                filled with a large natural pool, a miniature waterfall, and
                mind-blowing uninterrupted views of lush green plains. The base
                of Bambarakanda Falls is a great picnic spot for visitors
                because it has a natural and pure pool complex to fresh bathe
                before getting your picnic meal.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Kithal Ella Falls
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Kithal Ella Falls is a miniature waterfall but has a picturesque
                view. This waterfall is a perfect place to swim because of the
                shallow waters. And, this is a great spot to enjoy different
                water sports. Kithal Ella Falls is not widely popular but this
                is a hidden gem many people miss. For a brief break during the
                exhausting hike, you can take a fresh and pure bath to reduce
                fatigue.
              </p>
              <div className="flex justify-center mt-10 ">
                <img
                  src={Bopath_ella}
                  className="object-cover h-[500px]"
                  alt="Wallpaper"
                />
              </div>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Bopath Falls
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Again nature surprises us by giving birth to the marvel that is
                the Bopath Falls. Water gushes forth from a mountain cliff,
                whose crevices appear so minute, it makes one wonder how the
                water flows at that velocity. Bopath Falls is a blessing that
                always pleases your eyes and soothes your mind! The falls
                derived their name from the fig tree or the sacred “bo tree”.
                This place has a mind-blowing skill to heal the hearts of
                people. The Bo tree since early ages was a sign of wisdom,
                counsel, knowledge, understanding, and enlightenment; a visit to
                the Bopath is nothing short of this experience. So, literally,
                Bopath Falls has a blessed ability to calm your heart with the
                peacefulness associated with Buddhism!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                At early dawn and in the evenings, the serenity of the falls is
                highest because of the winds, so it gives a calm view for you.
                And, believe me, the refreshing coolness of Bopath is indeed a
                true blessing! So, visitors should enjoy this calm, peaceful,
                blessed, and enchanting waterfall!
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Dunhinda Falls
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Dunhinda Falls well known as Bride Falls: widely popular place
                in Sri Lanka, located at Badulla. The falls tumble down a narrow
                gap between rocks and expand to form a stunning smoky cascade -
                it magically creates a scene reminiscent of a bride’s veil. So,
                there is no wonder it is also known as Bridal Falls. This
                waterfall welcomes visitors to Badulla by creating a picturesque
                view. So, this is a great place to spend a romantic evening or
                propose to your lover/ fiancee with a ring, so, if you have any
                idea to wake up your soul with love, visit Dunhinda Falls and
                refresh your romantic moments!
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Thudugala Falls
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                This is a great bathing spot to soak yourself in the calm flow
                of waters and natural ponds - perfect for a swim date with
                friends and family! Even as this is an excellent place for fun,
                adventurous activity because of its atop wet rocks.
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Charming scenery spot of Ella
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Lipton’s Seat
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Lipton’s Seat is a charming viewpoint located in the Haputale
                mountain range, atop the Dambatenne Tea Estate. Keep in mind
                that, to feel a magical moment and eye-catching view, arrive
                here before 7:00 AM before the fog starts rolling in. The
                founder of the renowned tea brand Lipton Tea, “Sir Thomas
                Lipton” was often found pondering about his tea empire here; a
                statue of Sir Lipton welcomes visitors to Lipton's Seat. The
                best thing about visiting this place is you can enjoy fresh and
                more delicious original Sri Lankan tea like you have never
                before.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Imagine this: sitting in a place with a magical view and fresh
                air and being reminded of beautiful old memories with a fresh
                cup of tea: it is like a fairy tale, isn’t it? Yeah, Ella is a
                fairy world that is alive! So, visit Lipton’s Seat to get a
                fairy experience live!
              </p>
              <h2 className="px-5 pt-5 font-mono font-bold lg:text-3xl text-xl  text-[#54B435] uppercase">
                Explore the adventure of the national parks of Ella
              </h2>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Udawalawe National Park
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Udawalawe National Park is a popular and stunning wild landscape
                located in the southern part of Sri Lanka that is a popular
                place for its diverse wildlife and picturesque landscapes.
                Udawalawe is famously known for its large population of Asian
                elephants. Asian Elephants are the symbol of this national park.
                So, if you’re a wildlife photographer, wildlife lover, an animal
                lover, or a nature lover, this is an excellent spot to visit!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Jeep safaris are a popular way to explore Udawalawe National
                Park and travel deep into the wilderness and see elephants,
                along with other wildlife such as buffalo, deer, monkeys, and a
                variety of bird species. Also, visitors can do these amazing
                things:
                <ul className="list-disc mt-5 ml-28">
                  <li>Elephant watching</li>
                  <li>Bird watching</li>
                  <li>Nature trails</li>
                  <li>Overnight camping</li>
                </ul>
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Don’t forget, for camping lovers, this is a great spot for
                experiencing adventurous night camping with your friends or
                families. So, get this amazing experience!
              </p>
              <p className="px-5 pt-5 text-3xl font-bold">
                How to Get to Ella from Colombo
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Train Ride to Ella
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Embarking on a train adventure from Colombo to Ella unveils the
                breathtaking beauty of Sri Lanka's landscapes. The journey
                commences from Colombo Fort station, providing convenient
                schedules and a cozy travel experience. Although there isn't a
                direct route to Ella, you can board a train to Ella and then hop
                onto the renowned Ella to Ella route celebrated for its
                awe-inspiring vistas. For train schedules, you can refer to the
                timetable{" "}
                <a
                  href="https://eservices.railway.gov.lk/schedule/searchTrain.action?lang=en"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Travel from Ella to Ella
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Embarking on the train journey from Ella to Ella promises to be
                an unforgettable experience, brimming with captivating sights.
                Picture-perfect tea plantations, quaint villages, and
                breathtaking mountain views paint the landscape along the way.
                Don't forget to have your camera handy to capture the
                mesmerizing scenes, especially as you traverse the iconic Nine
                Arch Bridge and take in the verdant expanse of the countryside.
                The leisurely 6-7 hour ride from Ella to Ella offers ample time
                to soak in the natural splendor of Sri Lanka at its finest.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Considering traveling by train from Ella to surrounding areas
                offers both advantages and drawbacks.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Benefits include the chance to soak in Sri Lanka's stunning hill
                country scenery, with panoramic views and opportunities to
                connect with fellow travelers. The journey treats passengers to
                glimpses of tea estates, waterfalls, and picturesque landscapes.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                However, there are downsides to be aware of. Trains can get
                crowded, especially during peak times, and finding a comfortable
                spot might prove challenging due to limited seating. Standing
                for the duration of the journey without a clear view from the
                window is common. Additionally, train schedules might not always
                align perfectly with your plans.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Alternatively, exploring via tuktuk presents a flexible and
                independent option. Driving yourself allows you to enjoy the
                scenery at your own pace, stopping whenever you wish to capture
                waterfalls, tea plantations, or wildlife. The roads from Ella to
                Ella offer a unique driving experience, providing an opportunity
                for memorable adventures.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Regardless of the mode of transportation chosen, be it train or
                tuktuk, the journey from Colombo to Ella and beyond promises an
                immersive experience in Sri Lanka's natural beauty and
                captivating landscapes.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                A Bus Ride to Ella
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                If you're looking to hop on a bus from Colombo to Ella, start
                your adventure at the Colombo Central Bus Stand, also called the
                Pettah Bus Station. Catch a bus heading to Badulla, and you'll
                find yourself passing through Ella along the way. The ride
                typically lasts around 8 to 9 hours.
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                For planning your journey and ensuring you catch the right bus,
                visit the Sri Lanka{" "}
                <a
                  href="https://www.ntc.gov.lk/"
                  className="font-bold text-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  National Transport Commission (NTC){" "}
                </a>{" "}
                website to check routes and timetables. It's wise to look up the
                schedules beforehand and get ready for a picturesque, albeit
                lengthy, journey through Sri Lanka's stunning landscapes.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                By Taxi to Ella
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                You also have the option to hire a private vehicle along with a
                driver for your journey. While this is the quickest method, it
                does come with a higher price tag. The travel time from Colombo
                is around 5 to 6 hours by this means.
              </p>
              <p className="px-5 pt-5 lg:text-2xl text-xl font-bold">
                Rent a Tuktuk and Drive to Ella!
              </p>
              <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
                Traveling from Colombo to Ella in your own tuktuk offers an
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
            <p className="px-5 pt-5 text-3xl font-bold">
              Experience Ella's magnificent nature with TukTuk Mango!
            </p>
            <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
              As I have always said, Ella is heaven! So, get ready to walk
              through a Disney fairy tale and add enchanting memories to your
              travel diary! Ella promises to give an unforgettable journey for
              visitors with luxuriant greenery, splendid waterfalls, a tasty tea
              experience, and a camp night in the wild. Also, TukTuk Mango
              promises to give you an enjoyable and safe journey and we give you
              a chance to rent your favorite TukTuk to make your Ella journey
              amazing!
            </p>
            <p className="px-5 pt-5 lg:text-xl md:text-lg text-base text-justify">
              So, why are you waiting? Pick your favorite TukTuk with TukTuk
              Mango and feel the amazing beauty of Ella. Come and experience the
              magic of Ella like never before!
            </p>
            <div>
              <p className="px-5 pt-5 pb-10 text-3xl font-bold">Ella Map</p>
              <div class="relative lg:mx-5 h-[500px]">
                <iframe
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.842981837366!2d81.03704730870975!3d6.86533019407041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!5e0!3m2!1sen!2slk!4v1713961082327!5m2!1sen!2slk"
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

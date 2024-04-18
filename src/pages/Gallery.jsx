import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import wallpaper6 from "../images/wallpapers/wallpaper6.jpg";
import "./gallery.css";
import CloseIcon from "@mui/icons-material/Close";
import GridLoader from "react-spinners/GridLoader";
import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatsApp from "../components/WhatsApp";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Gallery() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const data = [
    {
      id: 1,
      img: `/trip/trip (3).jpg`,
      caption: `Come and immerse yourself in the serene atmosphere of this temple, where you can witness the sacred relic of Lord Buddha's tooth and experience the essence of Buddhism. Admire the intricate architecture, take part in traditional ceremonies, and bask in the peaceful ambiance.`,
    },
    {
      id: 2,
      img: `/town/trincomalee3.jpg`,
      caption: `Nilaveli Beach is the most popular beach in Sri Lanka currently a lot of visitors must visit and enjoy a lot of activities. Just off the shore, you will see Pigeon Island, it is an excellent place for snorkelling. Another great way is you can explore the waters of the Indian Ocean and spot dolphins and whales through the boat tours.`,
    },
    {
      id: 3,
      img: `/town/negombo4.jpg`,
      caption: `Browns Beach is an unspoiled private beach in Negombo that has wide popularity among tourists. This beach attracts millions of tourists' hearts because of its unique golden sands, turquoise blue water, and breathtaking palm trees.`,
    },
    {
      id: 4,
      img: `/town/negombo3.jpg`,
      caption: `The Wilpattu National Park is the home for the elusive Sri Lankan leopard so it gained a wide popularity among visitors in Sri Lanka and other countries. And, it is specified by natural sand-rimmed water basins called “willus” that fill with rainwater.`,
    },
    {
      id: 5,
      img: `/town/trincomalee2.jpg`,
      caption: `The Konesar Temple is one of the main highlights of Trincomalee. If you visit this temple, in every corner, you will see breathtaking and historical views that you can’t believe your eyes. This is popularly known as “Kailasa”, a religious pilgrimage for the Hindus.`,
    },
    {
      id: 6,
      img: `/town/kandy4.jpg`,
      caption: `Experience the breathtaking beauty of Kandy from the picturesque Kandy View Point. Take in the panoramic cityscape, marvel at the majestic Temple of the Tooth, and admire the lush green mountains in the backdrop. Enjoy a delightful tuktuk ride to the viewpoint and soak in the stunning scenery along the way.`,
    },
    {
      id: 7,
      img: `/town/trincomalee5.JPG`,
      caption: `Kanniya Hot Spring is a highlighting spot that increases the brightness of Trincomalee. The Kanniya Hot Spring is located on the east coast of Sri Lanka in Trincomalee. It has seven wells that are square-shaped each has a four-foot depth. Sri Lankan people believe that the water from the well has healing properties.`,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimg, setTempImg] = useState("");
  const [caption, setCaption] = useState(""); // Add state to store the caption

  const getImg = (img) => {
    setTempImg(img);
    setModel(true);
  };

  // ==================================================
  const navigate = useNavigate();
  const homePageClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
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
              src={wallpaper6}
              className="object-cover w-full h-full brightness-50"
              alt="Wallpaper"
            />
            <div className="absolute top-0 left-0 flex justify-center w-full xl:mt-60 lg:mt-48 md:mt-34 mt-36">
              <h1 className="mt-0 text-3xl font-bold text-center text-white uppercase xl:text-6xl lg:text-5xl md:text-4xl">
                Tuktuk Mango Travel Photos
              </h1>
            </div>
            {/* ===========Breadcrumbs=========== */}
            <Breadcrumbs className="justify-center">
              <a href="/" className="opacity-60">
                <i class="fa-solid fa-house"></i>
              </a>
              <a href="/Gallery" className="opacity-60">
                <span>GALLERY</span>
              </a>
            </Breadcrumbs>
            {/* ===========Breadcrumbs=========== */}
          </div>

          <div>
            <div className="pt-20">
              <h2 className="text-center font-mono font xl:text-3xl text-xl text-[#54B435] mx-5">
                CREATING MEMORIES ONE STEP AT A TIME
              </h2>
              <h1 className="mx-8 mt-3 font-serif text-3xl font-bold text-center lg:mx-20 font lg:text-5xl xl:text-6xl">
                Embarking on an adventure across the globe with three wheels
              </h1>
            </div>
          </div>

          <div className="my-10 md:mx-10">
            <>
              <div className={model ? "model open" : "model"}>
                <img src={tempimg} alt="" />
                <p className="caption">{caption}</p>
                <CloseIcon onClick={() => setModel(false)} />
              </div>
              <div className="gallery">
                {data.map((item, index) => {
                  return (
                    <div
                      className="pics border-green-500 border-2 rounded-md p-2 bg-green-50"
                      key={index}
                      onClick={() => getImg(item.img)}
                      onMouseEnter={() => setCaption(item.caption)} // Set caption on mouse enter
                      onMouseLeave={() => setCaption("")} // Clear caption on mouse leave
                    >
                      {" "}
                      <img
                        src={item.img}
                        alt=""
                        style={{ width: "100%" }}
                        className="border rounded-md"
                      />
                      <p className="img-caption text-red-400">{item.caption}</p>{" "}
                      {/* Add caption */}
                    </div>
                  );
                })}
              </div>
            </>
          </div>

          <div className="flex flex-col items-center my-10">
            <button
              onClick={homePageClick}
              className="font-bold lg:text-xl text-base text-white hover:text-black bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
            >
              RESERVE YOUR TUKTUK!
            </button>
          </div>
          <Footer />
          <WhatsApp />
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
}

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
      img: `/images/Freedom.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 2,
      img: `/images/Hassle.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 3,
      img: `/images/Social.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 4,
      img: `/trip/trip (1).jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 5,
      img: `/trip/trip (2).jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 6,
      img: `/trip/trip (3).jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 7,
      img: `/wallpapers/wallpaper6.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 8,
      img: `/wallpapers/wallpaper4.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 9,
      img: `/wallpapers/wallpaper8.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
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
                      className="pics"
                      key={index}
                      onClick={() => getImg(item.img)}
                      onMouseEnter={() => setCaption(item.caption)} // Set caption on mouse enter
                      onMouseLeave={() => setCaption("")} // Clear caption on mouse leave
                    >
                      {" "}
                      <img src={item.img} alt="" style={{ width: "100%" }} />
                      <p className="img-caption">{item.caption}</p>{" "}
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

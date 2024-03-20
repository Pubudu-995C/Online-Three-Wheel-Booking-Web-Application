import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper6 from "../images/wallpapers/wallpaper6.jpg";
import "./gallery.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Gallery() {
  const data = [
    {
      id: 1,
      img: `/images/Freedom.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 2,
      img: `/images/Hassle.jpeg`,
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
      id: 6,
      img: `/wallpapers/wallpaper6.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 6,
      img: `/wallpapers/wallpaper4.jpg`,
      caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim et laboriosam nihil officia qui architecto, eos ipsa repellendus eveniet veniam fugiat obcaecati. Quos praesentium laborum adipisci iusto perferendis mollitia. Facilis eveniet vitae repellat aspernatur suscipit ullam doloremque accusantium sapiente?`,
    },
    {
      id: 6,
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
      <Navbar />
      <div className="h-[500px]">
        <img
          src={wallpaper6}
          className="object-cover w-full h-full brightness-50"
          alt="Wallpaper"
        />
        <div className="absolute mt-56 top-0 left-0 w-full justify-center">
          <h1 className="text-center font-bold lg:text-6xl text-3xl mt-0 text-white uppercase">
            Tuktuk Mango Travel Photos
          </h1>
        </div>
      </div>

      <div>
        <div className="m-0 pt-20">
          <h2 className="text-center font-mono font text-3xl text-[#54B435] mx-5">
            CREATING MEMORIES ONE STEP AT A TIME
          </h2>
          <h1 className="text-center font-serif font lg:text-6xl text-3xl font-bold mt-3 mx-20">
            Embarking on an adventure across the globe with three wheels
          </h1>
        </div>
      </div>

      <div className="lg:mx-20 my-10">
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
          className="font-bold text-xl bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]"
        >
          RESERVE YOUR TUKTUK!
        </button>
      </div>
      <Footer />
    </div>
  );
}

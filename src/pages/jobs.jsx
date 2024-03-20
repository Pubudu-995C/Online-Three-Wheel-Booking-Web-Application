import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper9 from "../images/wallpapers/wallpaper9.jpg";

export default function Jobs() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="h-96">
          <img
            src={wallpaper9}
            className="object-cover w-full h-full brightness-50"
            alt="Wallpaper"
          />
          <div className="absolute mt-56 top-0 left-0 w-full justify-center">
            <h1 className="text-center font-bold lg:text-6xl text-3xl mt-0 text-white uppercase">
              jobs
            </h1>
          </div>
          <div className="bg-gradient-to-tl from-lime-300 to-yellow-100 py-10 lg:py-10 px-5 ">
            <div>
              <h2 className="text-center font-mono font text-3xl text-[#54B435] uppercase">
                Tuktuk Mango Jobs
              </h2>
              <h1 className="text-center font-serif font lg:text-6xl text-3xl font-bold mt-3">
                Contact Us to know More Details
              </h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

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
          <div className="absolute top-0 left-0 justify-center w-full mt-56">
            <h1 className="mt-0 text-3xl font-bold text-center text-white uppercase lg:text-6xl">
              jobs
            </h1>
          </div>
          <div className="px-5 py-10 bg-gradient-to-tl from-lime-300 to-yellow-100 lg:py-10 ">
            <div>
              <h2 className="text-center font-mono font text-3xl text-[#54B435] uppercase">
                Tuktuk Mango Jobs
              </h2>
              <h1 className="mt-3 font-serif text-3xl font-bold text-center font lg:text-6xl">
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

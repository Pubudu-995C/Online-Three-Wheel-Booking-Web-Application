import { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import wallpaper9 from "../images/wallpapers/wallpaper9.jpg";
import GridLoader from "react-spinners/GridLoader";
import WhatsApp from "../components/WhatsApp";
import { Breadcrumbs } from "@material-tailwind/react";
import Driver from "../images/job/joinTeam.jpg";

export default function Jobs() {
  const [loading, setLoading] = useState(false);

  // =========DATA FROM API HERE============
  const [jobData, setJobData] = useState(null); // State to store fetched job data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:6069/fetchData", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch job data");
      }

      const data = await response.json();
      setJobData(data);
    } catch (error) {
      console.error("Error fetching job data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <GridLoader color={"#379237"} loading={loading} size={20} />
        </div>
      ) : (
        <div>
          <div>
            <Navbar />
            <div className="xl:h-[500px] lg:h-[400px] h-[300px]">
              <img
                src={wallpaper9}
                className="object-cover w-full h-full brightness-50"
                alt="Wallpaper"
              />
              <div className="absolute top-0 left-0 grid justify-center w-full xl:mt-60 lg:mt-48 md:mt-34 mt-36">
                <h1 className="mt-0 text-3xl font-bold text-center text-white uppercase xl:text-6xl lg:text-5xl md:text-4xl">
                  careers
                </h1>
              </div>
              {/* ===========Breadcrumbs=========== */}
              <Breadcrumbs className="justify-center">
                <a href="/" className="opacity-60">
                  <i class="fa-solid fa-house"></i>
                </a>
                <a href="/jobs" className="opacity-60">
                  <span>CAREERS</span>
                </a>
              </Breadcrumbs>
              {/* ===========Breadcrumbs=========== */}
              <div>
                <div>
                  <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435] uppercase">
                    Tuktuk Mango Jobs
                  </h2>
                  <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
                    Join Our Team
                  </h1>
                </div>
                <div className="my-28 flex justify-center mx-5 md:mx-10 lg:mx-0">
                  <a
                    href="/driver"
                    class="flex flex-col items-center hover:bg-gray-500 border rounded-lg shadow md:flex-row md:max-w-3xl border-yellow-500 transition-colors duration-300"
                  >
                    <img
                      class="object-cover w-full rounded-t-lg h-48 md:w-72 md:rounded-none md:rounded-s-lg"
                      src={Driver}
                      alt=""
                    />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-500">
                        New TukTuk Registration in 2024
                      </h5>
                      <p class="mb-3 font-semibold text-gray-800  transition-colors">
                        Do you have a Tuk Tuk? Would you like to join Our Team?
                        Then this is your chance.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <WhatsApp />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

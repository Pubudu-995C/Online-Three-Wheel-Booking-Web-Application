export default function Footer() {

 const getCurrentYear = () => { return new Date().getFullYear();};

  return (
    <div>
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-3xl pb-4">
                <a href="/" className="flex items-center">
                  <img
                    src="/tuktukmango.png"
                    className="w-[200px] h-full"
                    alt=""
                  />
                </a>
              </h4>
              <p className="text-gray-500 hover:text-gray-400">
                No 202/1/A, <br /> Winrose Garden, <br /> Gelioya. <br />
                <strong>Phone:</strong> +(94) 012 345 6789 <br />
                <strong>Email:</strong> info@tuktukmango.com <br />
              </p>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Useful Links</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href= "/" className=" hover:text-yellow-500">
                    {" "}
                    Booking
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href="/Faq" className=" hover:text-yellow-500">
                    {" "}
                    FAQ
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href className=" hover:text-yellow-500">
                    {" "}
                    About Us
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href="/ContactUs" className=" hover:text-yellow-500">
                    {" "}
                    Contact Us
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href className=" hover:text-yellow-500">
                    {" "}
                    Job
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Locations</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href className=" hover:text-yellow-500">
                    {" "}
                    Colombo
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href="/kandy" className=" hover:text-yellow-500">
                    {" "}
                    Kandy
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href className=" hover:text-yellow-500">
                    {" "}
                    Galle
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href className=" hover:text-yellow-500">
                    {" "}
                    Nuwara Eliya
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href className=" hover:text-yellow-500">
                    {" "}
                    Ella
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Join Our Newsletter</h4>
              <p className="text-gray-500 pb-2">
                Join with us know to new informations and offers
              </p>
              <form action="" className="flex flex-row flex-wrap">
                <input
                  type="text"
                  className="text-gray-500 w-2/3 p-2 focus:border-yellow-500"
                  placeholder="email@example.com"
                  name=""
                  id=""
                />
                <button className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              Copyright &copy; {getCurrentYear()}
              <strong>
                <span> Mango Global (Pvt) Ltd</span>
              </strong>
              . All Rights Reserved
            </div>
            <div>
              Designed by{" "}
              <a href="https://www.guardians.lk" className="text-yellow-500">
                Guardians Technologies (Pvt) LTD
              </a>
            </div>
          </div>
          <div className="text-center text-xl text-white mb-2">
            <a
              href
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

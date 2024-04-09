export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <div className="p-10 text-gray-200 bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-5">
              <h4 className="pb-4 text-3xl">
                <a href="/" className="flex items-center">
                  <img
                    src="/tuktukmango.png"
                    className="w-[200px] h-full"
                    alt=""
                  />
                </a>
              </h4>
              <p className="text-gray-500 hover:text-gray-400">
                {/* No 202/1/A, <br /> Winrose Garden, <br /> Gelioya. <br /> */}
                <strong>Phone:</strong> +(94) 012 345 6789 <br />
                <strong>Email:</strong> info@tuktukmango.com <br />
              </p>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 uppercase font-bold">company</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href="/" className=" hover:text-yellow-500">
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
              <h4 className="pb-4 uppercase font-bold">legal</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href="/PrivacyPolicy" className=" hover:text-yellow-500">
                    {" "}
                    Privacy Policy
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href="/Conditions" className=" hover:text-yellow-500">
                    {" "}
                    Terms & Conditions
                  </a>
                </li>
                <li className="pb-4">
                  <i class="fa-solid fa-splotch text-[#FFD43B]"></i>
                  <a href="/RefundPolicy" className=" hover:text-yellow-500">
                    {" "}
                    Refund Policy
                  </a>
                </li>
                {/* <li className="pb-4">
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
                </li> */}
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Join Our Newsletter</h4>
              <p className="pb-2 text-gray-500">
                Join with us know to new informations and offers
              </p>
              <form action="" className="flex flex-row flex-wrap">
                <input
                  type="text"
                  className="w-2/3 p-2 text-gray-500 focus:border-yellow-500"
                  placeholder="email@example.com"
                  name=""
                  id=""
                />
                <button className="w-1/3 p-2 text-white bg-yellow-500 hover:bg-yellow-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-10 text-gray-500 bg-gray-900">
        <div className="flex flex-col items-center justify-between py-4 mx-auto max-w-7xl sm:flex-row">
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
          <div className="mb-2 text-xl text-center text-white">
            <a
              href
              className="inline-block w-10 h-10 pt-1 mx-1 bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href
              className="inline-block w-10 h-10 pt-1 mx-1 bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href
              className="inline-block w-10 h-10 pt-1 mx-1 bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href
              className="inline-block w-10 h-10 pt-1 mx-1 bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href
              className="inline-block w-10 h-10 pt-1 mx-1 bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

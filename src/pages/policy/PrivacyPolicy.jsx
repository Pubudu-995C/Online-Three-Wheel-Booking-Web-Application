import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import { Breadcrumbs } from "@material-tailwind/react";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="2xl:px-72 xl:px-34 lg:px-20 mx-5 my-20 text-justify lg:mt-40 mt-28">
        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/PrivacyPolicy" className="opacity-60">
            <span>PRIVACY POLICY</span>
          </a>
        </Breadcrumbs>
        {/* ===========Breadcrumbs=========== */}
        <p className="text-center font-bold uppercase lg:text-4xl md:text-3xl text-xl">
          privacy policy
        </p>
        <p className="text-center font-bold lg:text-lg text-sm">
          Last updated: April 18th, 2024
        </p>
        <p className="mt-10 font-bold lg:text-2xl text-lg">
          Tuktuk Mango Privacy Notice
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          At Tuktuk Mango, safeguarding your personal information is a priority.
          This privacy policy elucidates our commitment to protecting your
          privacy and outlines how we collect, utilize, and disclose personal
          information about you.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">Scope</p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          This policy is applicable to the personal information we gather about
          you in Sri Lanka, Australia, and potentially other countries where our
          offices operate. Please note that this policy does not extend to the
          handling of personal information concerning our staff and job
          applicants. For further details on how we manage such information,
          please reach out to us.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          About Tuktuk Mango
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          Tuktuk Mango operates as an online platform facilitating the
          connection between customers seeking to self-drive a tuktuk and local
          owners interested in renting out their tuktuks.
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          For the purposes of this policy, Tuktuk Mango, referred to as "we,"
          "us," or "our," denotes Mango Global (Pvt) Ltd.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Information Collection
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          When you engage with Tuktuk Mango's services, we may require certain
          information from you. The specifics of the information collected
          depend on the service you utilize and may include:
        </p>
        <ul className="list-disc lg:pl-20 pl-6 mt-5 lg:space-y-2 font-medium lg:text-xl text-sm">
          <li>Name</li>
          <li>Contact telephone and facsimile numbers</li>
          <li>Date of birth</li>
          <li>Driver’s license number</li>
          <li>Vehicle preferences</li>
          <li>Debit or credit card details</li>
          <li>Email address</li>
          <li>Transaction and communication history</li>
        </ul>
        <p className="mt-8 font-medium lg:text-xl text-sm">
          We may collect this information directly from you through various
          channels such as telephone, email, in-person interactions, or our
          online platform. Additionally, we may gather information indirectly
          through representatives, travel agents, or partner programs.
          Electronic tools may also be employed to monitor vehicle usage and
          location.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Use of Cookies
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          When you visit our website at www.tuktukmango.com, we may deploy
          cookies to enhance your browsing experience. These cookies may be
          stored on your device's hard drive or in memory. While cookies allow
          us to personalize your experience and measure website effectiveness,
          they do not collect personal information unless mandated by law.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Use and Disclosure of Personal Information
        </p>
        <p className="mt-2 font-medium lg:text-xl text-base">
          We utilize your personal information to:
        </p>
        <ul className="list-disc lg:pl-20 pl-6 mt-5 lg:space-y-2 font-medium lg:text-xl text-sm">
          <li>Provide requested services</li>
          <li>Administer services effectively</li>
          <li>Enhance and manage our services and vehicles</li>
          <li>Communicate pertinent information</li>
          <li>Conduct customer satisfaction surveys</li>
          <li>Develop our software and business systems</li>
        </ul>
        <p className="mt-8 font-medium lg:text-xl text-sm">
          We may disclose your information to third parties such as program
          partners, service providers, financial institutions, government
          agencies, and law enforcement entities, as required or authorized by
          law.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Direct Marketing
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          Your personal information may be used for direct marketing purposes,
          including offers from Tuktuk Mango and partner companies. You have the
          option to opt out of such communications.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Payment Default
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          In case of payment default, we may provide information to credit
          reporting bodies. This information may include details of the default
          and related arrangements.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Information Security
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          We employ reasonable measures to protect personal information from
          misuse, loss, unauthorized access, or disclosure, both electronically
          and in hard copy. However, please note that no method of data
          transmission over the internet is entirely secure.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Access and Updates
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          You have the right to access the personal information we hold about
          you, with certain exceptions. If you believe your information is
          inaccurate or incomplete, please inform us so we can update it
          accordingly.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Contact Us
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          If you have inquiries regarding our handling of your personal
          information or wish to report any concerns, you can reach us at
          info@tuktukmango.com.
        </p>
        <p className="mt-8 font-bold lg:text-xl text-lg text-blue-800">
          Changes to Policy
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          This privacy policy is effective as of 18th April 2024 and supersedes
          any previous versions. We reserve the right to amend this policy at
          any time. For the latest version, please contact us using the provided
          details.
        </p>
      </div>
      <Footer />
    </div>
  );
}

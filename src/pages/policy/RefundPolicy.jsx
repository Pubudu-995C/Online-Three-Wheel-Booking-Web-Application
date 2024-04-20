import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import { Breadcrumbs } from "@material-tailwind/react";

export default function RefundPolicy() {
  return (
    <div>
      <Navbar />
      <div className="2xl:px-72 xl:px-40 lg:px-20 mx-5 my-20 text-justify lg:mt-40 mt-28">
        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/RefundPolicy" className="opacity-60">
            <span>REFUND POLICY</span>
          </a>
        </Breadcrumbs>
        {/* ===========Breadcrumbs=========== */}
        <p className="text-center font-bold uppercase lg:text-4xl md:text-3xl text-xl">
          Refund Policy
        </p>
        <p className="text-center font-bold lg:text-lg text-sm">
          Last updated: April 18th, 2024
        </p>
        <p className="mt-10 font-bold lg:text-2xl text-lg">
          Tuktuk Mango Refund Policy
        </p>
        <p className="mt-2 font-medium lg:text-xl text-sm">
          At Tuktuk Mango, we strive to ensure your satisfaction with our
          services. However, we understand that circumstances may arise where a
          refund is necessary. This refund policy outlines the guidelines and
          procedures for refund requests.
        </p>
        <ol className="pl-6 list-decimal">
          <li className="mt-5 font-semibold lg:text-xl text-lg">
            Refund Eligibility
          </li>
          <p className="lg:text-lg text-base mt-2 font-medium">
            Refunds may be considered under the following circumstances:
          </p>
          <ul className="pl-6 list-disc mt-2 lg:text-lg text-sm font-medium">
            <li>
              Service Cancellation: If you cancel a booking within the
              stipulated cancellation period, as outlined in our terms and
              conditions, you may be eligible for a refund.
            </li>
            <li>
              Service Disruption: In the event of a service disruption or
              failure on our part that significantly impacts your experience,
              you may request a refund.
            </li>
            <li>
              Overpayment: If you have been charged an incorrect amount or have
              made an overpayment, you are entitled to a refund for the excess
              amount paid.
            </li>
            <li>
              Dissatisfaction: If you are dissatisfied with our services and can
              provide valid reasons for your dissatisfaction, we may consider a
              refund on a case-by-case basis.
            </li>
          </ul>
          <li className="mt-5 font-semibold lg:text-xl text-lg">
            Refund Request Process
          </li>
          <p className="lg:text-lg text-base mt-2 font-medium">
            To request a refund, please follow these steps:
          </p>
          <ul className="pl-6 list-disc mt-2 lg:text-lg text-sm font-medium">
            <li>
              Contact Us: Reach out to our customer support team via email at
              [insert contact email here] and provide details of your refund
              request.
            </li>
            <li>
              Provide Information: Include relevant information such as your
              booking or transaction ID, the reason for the refund request, and
              any supporting documentation.
            </li>
            <li>
              Await Response: Our team will review your request and respond to
              you in a timely manner.
            </li>
            <li>
              Resolution: If your refund request is approved, we will process
              the refund using the original method of payment.
            </li>
          </ul>
          <li className="mt-5 font-semibold lg:text-xl text-lg">
            Refund Timeframe
          </li>
          <p className="lg:text-lg text-sm mt-2 font-medium">
            Refunds will be processed promptly upon approval. Please note that
            the timeframe for the refund to reflect in your account may vary
            depending on your financial institution and payment method.
          </p>
          <li className="mt-5 font-semibold lg:text-xl text-lg">
            Non-Refundable Items
          </li>
          <p className="lg:text-lg text-sm mt-2 font-medium">
            Certain items or services may be non-refundable, as specified in our
            terms and conditions. These may include but are not limited to:
          </p>
          <ul className="pl-6 list-disc mt-2 lg:text-lg text-sm font-medium">
            <li>Booking fees or service charges</li>
            <li>
              Charges incurred due to violations of our terms and conditions
            </li>
            <li>
              Any additional services or products purchased in conjunction with
              your booking
            </li>
          </ul>
          <li className="mt-5 font-semibold lg:text-xl text-lg">
            Refund Disputes
          </li>
          <p className="lg:text-lg text-sm mt-2 font-medium">
            If you disagree with the outcome of your refund request, you may
            escalate the matter to our management team for further review.
          </p>
          <li className="mt-5 font-semibold lg:text-xl text-lg">
            Changes to Policy
          </li>
          <p className="lg:text-lg text-sm mt-2 font-medium">
            This refund policy is subject to change without prior notice. Any
            updates or modifications will be communicated to you via our website
            or other appropriate channels.{" "}
          </p>
          <p className="mt-5 font-semibold lg:text-xl text-lg">Contact Us</p>
          <p className="lg:text-lg text-sm mt-2 font-medium">
            If you have any questions or concerns regarding our refund policy,
            please don't hesitate to contact us at [mangoglobal87@gmail.com].
          </p>
        </ol>
      </div>
      <Footer />
    </div>
  );
}

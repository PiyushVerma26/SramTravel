import React from "react";
import TermsTitle from "./TermsTitle";

function Terms() {
  return (
    <>
      <div className="flex flex-col md:ml-80 md:mr-64 md:py-20 py-10 ml-5 mr-5">
        <h1 className="font-extrabold text-3xl"> Customer terms of Service </h1>
        <p>Updated March 31,2024</p>
        <TermsTitle props="Summary of these terms" />
        <h2>
          By agreeing to our Terms, you’re agreeing to everything in all three
          documents. If you don’t accept any of these Terms, please do not use
          our Platform. All this information is important because it (along with
          your booking confirmation email and any pre-contractual information
          provided before you book) sets out the legal terms on which Service
          Providers offer their Travel Experiences through our Platform.
        </h2>
        <h2 className="mt-2">
          This summary isn’t part of our Terms, or a legal document. It’s just a
          simple explanation of our Terms. We encourage you to read each
          document in full. Some of the words in this summary have very specific
          meanings, so check out the "TravelButler.com dictionary" at the end of
          these Terms.
        </h2>
        <TermsTitle props="TravelButler.com dictionary" />
        <h2>
          “Account” means an account (with TravelButler.com or a Group Company),
          through which you can book Travel Experiences on our Platform.
        </h2>
        <h2 className="mt-2">
          “Accommodation” means the provision of an accommodation service by a
          Service Provider (throughout Section B, “Service Provider” means the
          provider of the accommodation service).
        </h2>
        <h2 className="mt-2">
          “Attraction” means the provision of an Attraction service by a Service
          Provider (throughout Section C, “Service Provider” means the provider
          of the Attraction service).
        </h2>
        <h2 className="mt-2">
          “Attraction service(s)” includes, but is not limited to, tours,
          museums, attractions, activities, and experiences.
        </h2>
        <h2 className="mt-2">
          “Booking” means the booking of a Travel Experience on our Platform,
          whether you pay for it now or later.
        </h2>
        <h2 className="mt-2">
          “TravelButler.com,” “us,” “we,” or “our” means TravelButler.com B.V.
          (for accommodation, flights, or attractions) or TravelButler.com
          Transport Limited (for any ground transport service).
        </h2>
        <h2 className="mt-2">
          “Booking Confirmation” (in the “Car rentals” section) means the
          confirmation email and coupon we send you, explaining the details of
          your Booking.
        </h2>
        <h2 className="mt-2">
          “Booking Network Sponsored Ads” means our program that lets
          Accommodation Service Providers bid through a third party (Koddi) for
          their product to appear in second place when your search results are
          ordered by “Our top picks.”
        </h2>
        <h2 className="mt-2">
          “Cash Credits” means a benefit with a monetary value that you can
          “cash out” to the Payment Method that we have on file for you, or put
          toward the cost of a future Travel Experience.
        </h2>
        <h2 className="mt-2">
          “Contract of Carriage” means the contract between you and the Service
          Provider, which deals with your Flight.
        </h2>
        <h2 className="mt-2">
          “Credits” means a benefit with a monetary value. There are “Cash
          Credits” and “Travel Credits.”
        </h2>
        <h2 className="mt-2">
          “Connectivity Partner” means a company that allows properties and
          TravelButler.com to communicate accommodation information and
          customers’ booking data.
        </h2>
        <h2 className="mt-2">
          “Credit Card Cashback” means a benefit with a monetary value that can
          be cashed out to the credit card that we have on file for you, but
          can’t be put toward the cost of a future Travel Experience.
        </h2>
        <h2 className="mt-2">
          Eligible Booking” means a Booking that meets the criteria to qualify
          for a Reward.
        </h2>
        <h2 className="mt-2">
          “Flight” means the provision of a flight by a Service Provider
          (throughout Section E, “Service Provider” means the airline).
        </h2>
        <h2 className="mt-2">
          “Group Company” means an affiliate of TravelButler.com – either a
          direct shareholding of TravelButler.com or part of the Booking
          Holdings Inc. group.
        </h2>
        <h2 className="mt-2">
          “Intermediation Contract” (in the “Flights” section) means the
          contract between you and the Third-Party Aggregator, which deals with
          the way they arrange your Flight ticket (and, in some cases, any
          extras) with the airline or another company.
        </h2>
        <h2 className="mt-2">
          “Main Driver” means the driver whose details were entered during the
          booking process.
        </h2>
        <h2 className="mt-2">
          “On-Demand Private Transportation” means a private vehicle that you
          request when you arrive at the pick-up location (or just before).
        </h2>
      </div>
    </>
  );
}

export default Terms;

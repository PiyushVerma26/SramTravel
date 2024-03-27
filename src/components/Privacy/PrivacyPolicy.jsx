import React from "react";
import PrivacyTitle from "./PrivacyTitle";

function PrivacyPolicy() {
  return (
    <div>
      <div className="flex flex-col md:ml-80 md:mr-64 md:py-20 py-10 ml-5 mr-5">
        <PrivacyTitle props="Privacy Statement" />
        <h2 className="mt-8 mb-6">May 20 2024</h2>
        <h3>
          First things first – your privacy is important to us. That might be
          the kind of thing all these notices say, but we mean it. You place
          your trust in us by using SramTravels services, and we value that
          trust. That means we’re committed to protecting and safeguarding your
          personal data. We act in our customers’ best interests and are
          transparent about the processing of your personal data.
        </h3>
        <h3 className="mt-4">
          This document (“this Privacy Statement” or “our Privacy Statement”)
          describes how we use and process your personal data, provided in a
          readable and transparent manner. It also tells you what rights you can
          exercise in relation to your personal data and how you can contact us.
          Please also read our Cookie Statement, which tells you how SramTravels
          uses cookies and other similar tracking technologies.
        </h3>
        <h3 className="mt-4">
          If you’ve used us before, you know that SramTravels offers online
          travel-related services through our own websites and mobile apps, as
          well as other online platforms such as partners’ websites and social
          media. We’d like to point out that all the information you're about to
          read generally applies to all of these platforms.
        </h3>
        <PrivacyTitle props="Terms we use in this Privacy Statement" />

        <h3 className="mb-3">
          “Trip” refers to the various different travel products and services
          that can be ordered, acquired, purchased, bought, paid, rented,
          provided, reserved, combined, or consummated by you from the Trip
          Provider.
        </h3>
        <h3>
          “Trip Provide” refers to the provider of accommodation (e.g. hotel,
          motel, apartment, bed & breakfast, landlord), attractions (e.g.
          (theme) parks, museums, sightseeing tours), transportation provider
          (e.g. car rentals, cruises, trains, flights, bus tours, transfers),
          tour operators, travel insurances, and any other travel or related
          product or service as from time to time available for Trip Reservation
          on the platform.
        </h3>
        <h3 className="mt-3">
          “Trip Service” refers to the online purchase, order, (facilitated)
          payment, or reservation service as offered or enabled by SramTravels
          in regards to various products and services as from time to time made
          available by Trip Providers on the platform.
        </h3>
        <PrivacyTitle props="What kind of personal data does SramTravels collect?" />
        <h3>
          We can’t help you book the perfect Trip without information, so when
          you use our services there are certain things we ask for. This is
          typically routine info – your name, preferred contact details, the
          names of the people traveling with you, and your payment info. You
          might also decide to submit additional info related to your upcoming
          Trip (e.g. your anticipated arrival time).
        </h3>
        <h3 className="mt-3">
          In addition to this, we also collect info from the computer, phone,
          tablet, or other device you use to access our services. This includes
          the IP address, the browser used, and your language settings. There
          are also situations when we receive info about you from others or
          automatically collect other info.
        </h3>
        <PrivacyTitle props="Why does SramTravels collect and use your personal data?" />
        <h3>
          The main reason we ask for personal details is to help you organize
          your online Trip Reservations and ensure you get the best possible
          service.
        </h3>
        <h3 className="mt-3">
          We also use your personal data to contact you about the latest deals,
          special offers, and other products or services we think you might be
          interested in. There are other uses, too. If you’d like to find out
          what they are, read on for a more detailed explanation.
        </h3>
        <PrivacyTitle props="How does SramTravels share your data with third parties?" />
        <h3>
          There are different parties integrated into SramTravels’s services, in
          various ways and for various reasons. The primary reason we share your
          data is to provide the Trip Provider with the relevant info to
          complete your Trip Reservation.
        </h3>
        <h3 className="mt-3">
          We also involve other parties to provide you with the SramTravels
          services. This includes, for example, financial institutions,
          advertisers, subsidiaries of the SramTravels corporate group, and the
          other companies that form the SramTravels Holdings Inc. corporate
          group. Or, in some cases, if we’re required to by law, we might share
          your data with governmental or other authorities
        </h3>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

import React from "react";
import Title from "./Title";
import Unit from "./Unit";

function Faq() {
  const arr = [
    {
      "Will I be able to update my registration details at a later date? ":
        "Once you’ve registered with us, you can update your details at any time. For example, if you add a new facility or if you want to tell us more about the area — you can add this information whenever you want to.",
    },
    {
      "What kinds of photos should I upload?":
        "When you sign up we ask you to upload photos of your space. This is because we know our guests love browsing through photos when looking for a place to stay. We recommend that you upload photos that showcase both the inside and the outside of your property. They don’t need to be professional photos — photos with a smartphone will still give your guests a good impression of the space.",
    },
    {
      "When will my property go online?":
        "Once you’ve finished creating your listing, you can open your property for bookings on our site. We may ask you to verify your property before you can start accepting bookings, but you can use this time to get familiar with our extranet and get prepared for your first guests.",
    },
    {
      "How do I find out how much commission I will pay for bookings?":
        "When you add your property to SramTravels you pay commission for each booking. The commission percentage will be shown at the ‘Agreement’ step of the registration process. At the end of each month, we’ll send you an invoice with the amount of commission owed.",
    },
    {
      "Do I have to confirm all of my bookings?":
        "You don’t need to confirm any of your bookings. When a customer books a stay at your property, it is instantly confirmed online. This gives you the convenience of not having to check every request from every potential guest.",
    },
    {
      "What happens if a guest cancels?":
        "Two things may happen when a guest cancels a reservation. If a guest cancels and your property has a free cancellation policy, the guest pays nothing and you don’t pay commission. If a guest cancels and your property doesn’t have a free cancellation policy, the guest pays a fee, and you pay commission on the amount that the guest pays you.",
    },
    {
      "What happens if a guest does not show up (a no show)?":
        "No show? No problem. You won't pay commission on guests that don't show up – unless you have set up a 'no show charge' for your guests.",
    },
    {
      "What happens if my property is damaged by a guest?":
        "Property owners can request damage deposits from guests. Deposits can help cover any potential damage that a guest might cause, providing assurance that your property will be treated respectfully. If anything does go wrong, it can be reported to our team through our misconduct reporting feature.",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:ml-80 md:mr-64 md:py-20 py-10 ml-5 mr-5">
        <h1 className="text-3xl mb-2 font-bold">FAQs</h1>
        <Unit />
        {arr.map((item, index) => {
          return (
            <div key={index}>
              {Object.entries(item).map(([k, value], i) => (
                <div key={i}>
                  <Title props={k} />
                  <h2 className="mb-4" key={i}>
                    {value}
                  </h2>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Faq;

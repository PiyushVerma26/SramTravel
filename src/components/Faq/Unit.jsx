import React from "react";
import Title from "./Title";

function Unit() {
  return (
    <>
      <Title props="What will happen after I sign up?" />
      <p>Here's how it works: </p>
      <div className="ml-4 mb-3">
        <h3>You sign up for an account and create your listing</h3>
        <h3>
          You can update your calendar, prices and confirm your listing is
          accurate
        </h3>
        When you’re ready, you open your property for bookings (in some
        instances we’ll need to verify your location before you can start
        accepting guests)
      </div>
      <h3 className="mb-5">
        Our team is here to provide you with advice to get your property up and
        running, as well as helping you avoid common mistakes.
      </h3>
    </>
  );
}

export default Unit;

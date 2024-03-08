import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import india from "../../assets/images/india.webp";
import maldives from "../../assets/images/maldives.webp";
import france from "../../assets/images/france.jpg";
import germany from "../../assets/images/germany.jpg";
import us from "../../assets/images/us.jpg";
import london from "../../assets/images/london.webp";

import TrendingCard from "./TrendingCard";
import ItemCard from "../ItemCard";

function Trending() {
  return (
    <div className="md:px-4 mx-auto max-w-7xl">
      <h1
        className="font-bold md:text-3xl text-lg tracking-wide md:tracking-widest md:px-3"
        style={{ fontFamily: "Lucky" }}
      >
        Explore Hot Travel Spots Now!
      </h1>
      <p className="text-md flex flex-row gap-2 items-center md:px-3">
        The World's Whimsical Wanderlust
        <span className="text-2xl text-green-600">
          <SiYourtraveldottv />{" "}
        </span>
      </p>

      <ItemCard>
        <TrendingCard
          img={india}
          title="India"
          link="https://www.google.com/"
        />
        <TrendingCard
          img={london}
          title="London"
          link="https://www.google.com/"
        />
        <TrendingCard img={us} title="America" link="https://www.google.com/" />
        <TrendingCard
          img={germany}
          title="Germany"
          link="https://www.google.com/"
        />
        <TrendingCard
          img={france}
          title="France"
          link="https://www.google.com/"
        />
        <TrendingCard
          img={maldives}
          title="Maldives"
          link="https://www.google.com/"
        />
      </ItemCard>
    </div>
  );
}

export default Trending;

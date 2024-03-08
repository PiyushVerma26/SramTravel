import React from "react";
import FilterResuable from "./FilterResuable";

function Filter() {
  return (
    <div className="flex flex-col border-2 p-2 px-4 border-grey h-auto min-w-72">
      <h1 className="font-bold  my-2">Popular Filters</h1>

      <FilterResuable>
        <input type="checkbox" value={5} name="5-star" />
        <label htmlFor="5-star">5 stars</label>
      </FilterResuable>

      <FilterResuable>
        <input type="checkbox" value={"Breakfast"} name="Breakfast" />
        <label htmlFor="Breakfast">Breakfast Included</label>
      </FilterResuable>
      <h1 className="font-bold my-2">Hotels Type</h1>
      <FilterResuable>
        <input type="checkbox" value={"Hotels"} name="Hotels" />
        <label htmlFor="Hotels">Hotels</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Resort"} name="Resort" />
        <label htmlFor="Resort">Resort</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Villas"} name="Villas" />
        <label htmlFor="Villas">Villas</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Hostels"} name="Hostels" />
        <label htmlFor="Hostels">Hostels</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Apartments"} name="Apartments" />
        <label htmlFor="Apartments">Apartments</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Homestays"} name="Homestays" />
        <label htmlFor="Homestays">Homestays</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Love Hotels"} name="Love Hotels" />
        <label htmlFor="Love Hotels">Love Hotels</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Lodge"} name="Lodge" />
        <label htmlFor="Lodge">Lodge</label>
      </FilterResuable>
      <h1 className="font-bold my-2">Facilities</h1>
      <FilterResuable className="flex flex-row items-center gap-4 flex-wrap">
        <input type="checkbox" value={"Non Smoking"} name="Non Smoking" />
        <label htmlFor="Non Smoking">Non Smoking</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Room Services"} name="Room Services" />
        <label htmlFor="Room Services">Room Services</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Swimming Pool"} name="Swimming Pool" />
        <label htmlFor="Swimming Pool">Swimming Pool</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Resturant"} name="Resturant" />
        <label htmlFor="Resturant">Resturant</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Wifi"} name="Wifi" />
        <label htmlFor="Wifi">Wifi</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Fitness-Center"} name="Fitness-Center" />
        <label htmlFor="Fitness-Center">Fitness-Center</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Pet Allowed"} name="Pet Allowed" />
        <label htmlFor="Pet Allowed">Pet Allowed</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Electric"} name="Electric" />
        <label htmlFor="Electric">Electric Vechile Charging Station</label>
      </FilterResuable>
      <h1 className="font-bold my-2">Meals</h1>
      <FilterResuable>
        <input
          type="checkbox"
          value={" All meals included"}
          name=" All meals included"
        />
        <label htmlFor=" All meals included"> All meals included</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Self catering"} name="Self catering" />
        <label htmlFor="Self catering">Self catering</label>
      </FilterResuable>
      <FilterResuable>
        <input
          type="checkbox"
          value={"Breakfast included"}
          name="Breakfast included"
        />
        <label htmlFor="Breakfast included">Breakfast included</label>
      </FilterResuable>
      <h1 className="font-bold my-2">Room Facilities</h1>

      <FilterResuable>
        <input
          type="checkbox"
          value={"Air conditioning"}
          name="Air conditioning"
        />
        <label htmlFor="Air conditioning">Air conditioning</label>
      </FilterResuable>
      <FilterResuable>
        <input
          type="checkbox"
          value={"Private bathroom"}
          name="Private bathroom"
        />
        <label htmlFor="Air conditioning">Private bathroom</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Sea view"} name="Sea view" />
        <label htmlFor="Sea view">Sea view</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Balcony"} name="Balcony" />
        <label htmlFor="Balcony">Balcony</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Kitchen"} name="Kitchen" />
        <label htmlFor="Balcony">Kitchen</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Mountain view"} name="Mountain view" />
        <label htmlFor="Mountain view">Mountain view</label>
      </FilterResuable>
      <h1 className="font-bold my-2">Review score</h1>

      <FilterResuable>
        <input type="checkbox" value={"Very good"} name="Very good" />
        <label htmlFor="Very good">Very good: 8+</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Good "} name="Good" />
        <label htmlFor="Good">Good: 7+</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Pleasant "} name="Pleasant " />
        <label htmlFor="Pleasant ">Pleasant: 6++</label>
      </FilterResuable>

      <h1 className="font-bold my-2">Rating type</h1>
      <FilterResuable>
        <input type="checkbox" value={1} name="1-star" />
        <label htmlFor="1 star ">1 star</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={2} name="2-star" />
        <label htmlFor="2 star">2 star</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={3} name="3-star" />
        <label htmlFor="3 star ">3 star</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={4} name="4-star" />
        <label htmlFor="4 star ">4 star</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={5} name="5-star" />
        <label htmlFor="5 star">5 star</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"highrated"} name="high-rated" />
        <label htmlFor="high-rated">high-rated</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"under-rated"} name="under-rated" />
        <label htmlFor="under-rated">under-rated</label>
      </FilterResuable>

      <h1 className="font-bold my-2">Bed preference</h1>
      <FilterResuable>
        <input type="checkbox" value={"Twin beds"} name="Twin beds" />
        <label htmlFor="Twin beds">Twin beds</label>
      </FilterResuable>
      <FilterResuable>
        <input type="checkbox" value={"Double bed"} name="Double bed" />
        <label htmlFor="Double bed">Double bed</label>
      </FilterResuable>
    </div>
  );
}

export default Filter;

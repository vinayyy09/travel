import React from "react";
import "./Cards.css";
import CardItems from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/img--9.jpg"
              text="The Amazon Biome, is defined as the area covered predominantly by dense moist tropical forest, with relatively small inclusions of several other types of vegetation such as savannas, floodplain forests"
              label="Adventure"
              path="/"
            />
            <CardItems
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/"
            />
            <CardItems
              src="images/img--4.jpg"
              text="A land of contrasts, Japan is a fascinating destination for visitors. Combining the attractions of an ancient and unfamiliar culture with all the trappings of one of the world powerhouses in entertainment, fashion, and innovation,"
              label="Adventure"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/"
            />
            <CardItems
              src="images/img--8.jpg"
              text="The unparalleled beauty of Kashmir offers the travellers a number of things to do."
              label="Adrenaline"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

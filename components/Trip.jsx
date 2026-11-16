import "./TripStyles.css";

import beach from "../src/assets/beach.jpeg";
import humza from "../src/assets/hunza.jpeg";
import sw from "../src/assets/sw.jpeg";

const tripData = [
  {
    id: 1,
    image: sw,
    title: "Mountain Trip",
    location: "Switzerland",
    description:
      "Explore the beautiful mountains and enjoy the peaceful natural scenery.",
  },
  {
    id: 2,
    image: beach,
    title: "Beach Trip",
    location: "Maldives",
    description:
      "Enjoy the beautiful beaches, blue water and unforgettable moments.",
  },
  {
    id: 3,
    image: humza,
    title: "City Trip",
    location: "Italy",
    description:
      "Discover historic places, amazing architecture and local culture.",
  },
];
function Trip() {
  return (
    <div className="trip">
      <h1>Our Trips</h1>
      <p>Choose your next unforgettable travel experience.</p>

      <div className="trip-container">
        {tripData.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <img src={trip.image} alt={trip.title} />

            <div className="trip-card-content">
              <h2>{trip.title}</h2>
              <h3>{trip.location}</h3>
              <p>{trip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trip;
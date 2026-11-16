import "./DestinationStyles.css";

import beach from "../src/assets/beach.jpeg";
import humza from "../src/assets/Hunza.jpg";
import sw from "../src/assets/Sw.jpeg";

const destinations = [
  {
    image: sw,
    title: "Switzerland",
    description:
      "Explore the beautiful coastal villages of Italy.",
  },
  {
    image: humza,
    title: "Mountain Adventure",
    description:
      "Enjoy peaceful mountains and breathtaking views.",
  },
  {
    image: beach,
    title: "Tropical Beach",
    description:
      "Relax on beautiful beaches and enjoy the ocean.",
  },
];

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>

      <p>
        Tours give you the opportunity to see a lot, within a time frame.
      </p>

      <div className="destination-cards">
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img
              src={destination.image}
              alt={destination.title}
            />

            <h2>{destination.title}</h2>

            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
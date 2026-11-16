
import "./DynamicDestinationStyles.css";

import beach from "../src/assets/beach.jpeg";
import humza from "../src/assets/hunza.jpeg";
import sw from "../src/assets/sw.jpeg";

const destinationData = [
  {
    id: 1,
    image: sw,
    title: "Italy",
    location: "Cinque Terre",
    description:
      "Discover the beautiful coastal villages of Italy.",
  },
  {
    id: 2,
    image: sw,
    title: "Switzerland",
    location: "Mountain Adventure",
    description:
      "Explore beautiful mountains and nature.",
  },
  {
    id: 3,
    image: beach,
    title: "Maldives",
    location: "Tropical Beach",
    description:
      "Enjoy peaceful beaches and blue ocean water.",
  },
  {
    id: 4,
    image: humza,
    title: "Adventure",
    location: "Road Trip",
    description:
      "Experience an unforgettable travel adventure.",
  },
];
function DynamicDestination() {
  return (
    <div className="dynamic-destination">
      <h1>Explore Destinations</h1>

      <p>Discover amazing places around the world.</p>

      <div className="dynamic-destination-container">
        {destinationData.map((item) => (
          <div className="dynamic-destination-card" key={item.id}>
            <img src={item.image} alt={item.location} />

            <div className="dynamic-destination-info">
              <h2>{item.title}</h2>
              <h3>{item.location}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicDestination;
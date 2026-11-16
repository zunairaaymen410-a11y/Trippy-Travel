
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import DynamicDestination from "../components/DynamicDestination";
import Trip from "../components/Trip";
import heroPic from "../src/assets/sw.jpeg";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={heroPic}
        title="Your Journey Your Story"
title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        btnClass="show"
        url="#about"
      />

      <Destination />
      <DynamicDestination />
      <Trip />
    </>
  );
}

export default Home;
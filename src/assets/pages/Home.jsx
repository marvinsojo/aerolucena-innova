import React from "react";
import Section from "../components/Section";

const Home = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-1/3 h-screen">
        <Section className="w-full h-screen bg-blue-950 flex flex-col justify-around items-center text-white pt-30" >
          <h1 className="text-center text-7xl">AeroLucena <br /> Innova Services</h1>
          <p className="text-center text-9xl">Optimizing your Operations Starts Here</p>
          <button className="text-3xl">Find Out More</button>
        </Section>
      </div>
      <div className="flex flex-col w-2/3 h-screen">
        <Section className="w-full h-1/2 bg-avion1" />
        <Section className="w-full h-1/2 bg-avion2" />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Section className="w-full h-[85vh] bg-airplane-01">
      <div className="absolute inset-0 bg-black/25"></div>
        <h1 className="relative text-6xl md:text-8xl 2xl:text-9xl h-full flex justify-end items-end p-5 text-white font-oswald">
          <span>Optimizing <br /> your operations</span>
        </h1>
      </Section>
      <Section className="w-full grid md:grid-cols-2 gap-10 py-16 px-16 bg-steelblue z-10">
        <Card
          className="bg-white p-2"
          classNameTitle="font-bold font-oswald text-2xl p-2"
          classNameParagraph="font-lato p-2"
          image="/img/seats-airplane-01.jpg"
          title="Improving the Onboard Passenger Experience"
          paragraph="We optimize comfort by analyzing ergonomics and space distribution, elevate services by redefining entertainment and attention, transform the ambiance by improving lighting and acoustics, and integrate smart technology for seamless interaction. With our expertise, you will achieve increased passenger satisfaction, encourage repeat business and differentiate yourself from the competition, strengthening your brand image and creating memorable flights."
        ></Card>
        <Card
          className="bg-white p-2"
          classNameTitle="font-bold font-oswald text-2xl p-2"
          classNameParagraph="font-lato p-2"
          image="/img/wing-01.jpg"
          title="Trusted Flight, Solid Gain"
          paragraph="We offer market strategies focused on the safety and reliability of your flight operations, developing analyses and plans that highlight these aspects as key differentiators to build a solid foundation for your airline business, effectively communicating your high safety standards and your commitment to impeccable operations to attract passengers who prioritize peace of mind in their travels."
        ></Card>
      </Section>
    </div>
  );
};

export default Home;

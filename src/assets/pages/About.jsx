import React from "react";
import CardText from "../components/CardText";

const About = () => {
  const itemsListBusiness = [
    <li>Building a healthy foundation for your business.</li>,
    <li>Safety Consulting.</li>,
    <li>Creating market analyses and plans.</li>,
  ];
  const itemsListData = [
    <li>Creating market analyses and strategies</li>,
    <li>Data modernization, Data Engineering, Intelligent Data</li>,
    <li>Executive Dashboard Development</li>,
  ];

  const itemsListService = [
    <li>Regulatory Compilance.</li>,
    <li>Operational excellience and efficiency.</li>,
    <li>Customer servicies, control systems.</li>,
    <li>Innovation and digital transformation</li>,
  ];

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-center items-center md:min-h-[80vh] bg-airplane-02">
      <div className="absolute inset-0 bg-black/30"></div>
        <div className="bg-steelblue/60 backdrop-blur-sm rounded-xl w-3/4 p-4 my-30 md:my-30 text-center text-white">
          <h2 className="text-4xl mb-6 font-bold md:text-6xl font-oswald">Who We Are</h2>
          <p className="text-xl font-lato">
            AeroLucena Innova Services is a company that provides professional
            consulting and auditing services to offer expert advice and
            solutions to airlines, airports, and aviation stakeholders in the
            areas of operations, safety, regulatory compliance, technology, and
            strategic planning. The goal is to improve efficiency, reduce costs,
            and optimize overall performance in the aviation market.
          </p>
        </div>
      </div>
      <div className="w-full p-5 bg-steelblue md:p-16 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-white font-bold font-oswald">What We Do</h2>
        </div>
        <div className="grid gap-16 md:grid md:grid-cols-3">
          <CardText
            icon={<i className="fa-regular fa-file-lines"></i>}
            title="BUSINESS CONSULTING"
            itemList={itemsListBusiness}
          />
          <CardText
            icon={<i className="fa-solid fa-chart-line"></i>}
            title="DATA & ANALYTICS"
            itemList={itemsListData}
          />
          <CardText
            icon={<i className="fa-solid fa-chart-pie"></i>}
            title="SERVICES AND SOLUTIONS"
            itemList={itemsListService}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

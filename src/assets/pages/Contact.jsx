import React from "react";
import Section from "../components/Section";

const Contact = () => {
  return (
    <div className="bg-airplane-03">
      <Section className="min-h-screen flex justify-center items-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative bg-steelblue/65 p-6 md:p-10 rounded-2xl w-full md:w-2/3 mx-4 md:my-36 max-w-md">
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-white font-oswald mb-6 md:mb-10 leading-tight text-center md:text-left">
            <span>
              Let's do this <br className="md:hidden" />
              together.
            </span>
          </h1>
          <div className="mb-4">
            <h2 className="text-xl md:text-3xl text-white font-oswald mb-2 text-center md:text-left">
              Location
            </h2>
            <p className="text-lg md:text-xl text-white font-lato break-words text-center md:text-left">
              Tahquitz Canyon Way, Palm Springs, CA 92262
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl text-white font-oswald mb-2 text-center md:text-left">
              Contact
            </h2>
            <p className="text-lg md:text-xl text-white font-lato break-words text-center md:text-left">
              561-480 81 30
              <br />
              support@aerolucenainnova.com
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

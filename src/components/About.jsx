import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20" >
            Looking for a work driven environment so that I can enhance my knowledge and skills to contribute
            my best for the development of the company by always keeping learning attitude towards my work. <br/>
            I am Software Engineer adept at crafting
            efficient, scalable code and excelling in complex
            challenges. A Strong communicator with a passion
            for driving organizational success through
            innovative & trend-setting projects.
        </p>

        <br />

        <p className="text-xl">
            Completed SSC at MGHS, Karmala. <br/>
            Completed Diploma at SVCP, Pune. <br/>
            Completed Engineeering at SKNCOE, Pune
        </p>
      </div>
    </div>
  );
};

export default About;

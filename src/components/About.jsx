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
            Completed Engineeering at SKNCOE, Pune <br/>
            Find my resume below<br/>
            <br/>
        </p>

        <div>
           <button className="hover:scale-105group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300">
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
           </button>
        </div>

      </div>
    </div>
  );
};

export default About;

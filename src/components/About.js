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

        <p className="text-xl mt-20">
          Hi!, I'm Ashutosh, a software engineer with the ability to learn and collaborate in rapidly chaning environment and composition. Adept in futuristic approaches to web development and web design.
          Have Entry level experience with React, NodeJS, JavaScript and HTML5/CSS3
        </p>

        <br />

        <p className="text-xl">
          Proficient in translating designs and wireframes into high-quality code, and writing application interface code via JavaScript and React workflows. Adept at maintaining front end performance and troubleshooting & debugging the same to bolster overall performance.
        </p>
      </div>
    </div>
  );
};

export default About;
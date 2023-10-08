import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-light dark:bg-dark dark:text-white flex justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <div
          id="skills-title"
          className="w-full h-20 lg:pt-6 flex justify-center items-center pb-6"
        >
          <h1
            className="text-4xl font-semibold text-primary"
            data-aos="fade-down"
          >
            My Skills
          </h1>
        </div>
        <div
          id="skills-logo"
          className="max-w-sm md:max-w-3xl lg:max-w-4xl flex justify-evenly flex-wrap gap-4 transition duration-500"
        >
          <img
            id="html-logo"
            src="skills-logo/icons8-html-logo-240.png"
            alt="html"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-css-logo-240.png"
            alt="css"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-javascript-240.png"
            alt="js"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-php-logo-480.png"
            alt="php"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/laravel-logo.png"
            alt="laravel"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-bootstrap-240.png"
            alt="bootstrap"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-tailwindcss-240.png"
            alt="tailwind"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-react-480.png"
            alt="react"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-git-logo-240.png"
            alt="git"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-nodejs-240.png"
            alt="nodejs"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-express-js-240-b.png"
            alt="express"
            className="grayscale-0 hover:grayscale transition duration-500 block dark:hidden"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-express-js-240.png"
            alt="express"
            className="grayscale-0 hover:grayscale transition duration-500 hidden dark:block"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-rest-api-96-b.png"
            alt="api"
            className="grayscale-0 hover:grayscale transition duration-500 block dark:hidden"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-rest-api-96.png"
            alt="api"
            className="grayscale-0 hover:grayscale transition duration-500 hidden dark:block"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-figma-240.png"
            alt="figma"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-mysql-logo-240.png"
            alt="mysql"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
          <img
            src="skills-logo/icons8-corel-draw-2021-240.png"
            alt="coreldraw"
            className="grayscale-0 hover:grayscale transition duration-500"
            data-aos="zoom-in-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

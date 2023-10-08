import React from "react";
import TypeIt from "typeit-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-light dark:bg-dark dark:text-light text-dark flex flex-col overflow-hidden"
    >
      <div className="w-full min-h-screen flex md:px-14 lg:px-20">
        <div className=" lg:w-full md:w-1/2 md:p-0 min-h-screen flex flex-col justify-center gap-y-10 px-10 z-20 lg:flex-row lg:justify-between">
          {/* Hero Title */}
          <div className="w-full lg:w-4/12 lg:flex lg:flex-col lg:justify-around lg:items-start">
            <div>
              <TypeIt
                element={"h1"}
                className="text-4xl font-semibold block text-primary lg:text-5xl"
              >
                Sandi Arba Putra
              </TypeIt>
              <TypeIt
                options={{ speed: 170 }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Frontend Developer")
                    .pause(750)
                    .move(-9)
                    .pause(500)
                    .type("Web ")
                    .move(9);

                  return instance;
                }}
                className="text-xl font-semibold lg:text-3xl"
              />
            </div>

            {/* Social Media Icons */}
            <div className="lg:flex lg:gap-x-5 hidden animate__animated animate__fadeInUpBig">
              {/* Start WA Icons */}
              <div className="block dark:hidden">
                <a
                  href="https://wa.link/c4mnrp"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-white border-primary flex justify-center items-center hover:bg-dark transition duration-500 shadow-sm shadow-primary"
                >
                  <img
                    src="icon-contact/whatsapp.png"
                    alt="facebook-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              <div className="hidden dark:block">
                <a
                  href="https://wa.link/c4mnrp"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-primary border-white flex justify-center items-center hover:bg-dark transition duration-500 shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/whatsapp-w.png"
                    alt="facebook-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              {/* End WA Icons */}

              {/* Start FB Icons */}
              <div className="block dark:hidden">
                <a
                  href="https://web.facebook.com/sandi.ar.52"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-white border-primary flex justify-center items-center hover:bg-dark transition duration-500 shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/facebook.png"
                    alt="facebook-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              <div className="hidden dark:block">
                <a
                  href="https://web.facebook.com/sandi.ar.52"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-primary border-white flex justify-center items-center hover:bg-dark transition duration-500 shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/facebook-w.png"
                    alt="facebook-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              {/* End FB Icons */}

              {/* Start IG Icons */}
              <div className="block dark:hidden">
                <a
                  href="https://www.instagram.com/_arbaa_/"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-white border-primary flex justify-center items-center hover:bg-dark transition duration- shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/instagram.png"
                    alt="instagram-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              <div className="hidden dark:block">
                <a
                  href="https://www.instagram.com/_arbaa_/"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-primary border-white flex justify-center items-center hover:bg-dark transition duration- shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/instagram-w.png"
                    alt="instagram-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              {/* End IG Icons */}

              {/* Start Tiktok Icons */}
              <div className="block dark:hidden">
                <a
                  href="https://www.tiktok.com/@twoliong"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-white border-primary flex justify-center items-center hover:bg-dark transition duration-500 shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/tik-tok.png"
                    alt="tiktok-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              <div className="hidden dark:block">
                <a
                  href="https://www.tiktok.com/@twoliong"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-primary border-white flex justify-center items-center hover:bg-dark transition duration-500 shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/tik-tok-w.png"
                    alt="tiktok-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              {/* End Tiktok Icons */}

              {/* Start Github Icons */}
              <div className="block dark:hidden">
                <a
                  href="https://github.com/sandiarbaputra"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-white border-primary flex justify-center items-center hover:bg-dark transition duration-500 shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/github.png"
                    alt="github-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              <div className="hidden dark:block">
                <a
                  href="https://github.com/sandiarbaputra"
                  target="_blank"
                  className="w-10 h-10 rounded-full border-2 bg-primary border-white flex justify-center items-center hover:bg-dark transition duration-500 shadow-sm shadow-primary"
                >
                  <img
                    src="/icon-contact/github-w.png"
                    alt="github-logo"
                    width={20}
                    className="text-white"
                  />
                </a>
              </div>
              {/* End Github Icons */}
            </div>
          </div>

          {/* Hero Image LG */}
          <div className="hidden lg:block lg:w-4/12" id="gambar"></div>

          {/* Hero Content */}
          <div className="flex flex-col items-start justify-center gap-y-4 lg:w-4/12 z-10">
            <div>
              {/* Coding is Magic | Mobile */}
              <h2 className="text-2xl font-semibold block text-primary mb-2 animate__animated animate__fadeInLeft md:hidden lg:hidden">
                Coding is Magic. With coding we can help anyone in the digital
                world!
              </h2>

              {/* Coding is Magic | MD */}
              <h2 className="text-2xl font-semibold text-primary mb-2 animate__animated animate__fadeInLeft hidden md:block lg:hidden">
                Coding is Magic. With coding we can help anyone in the digital
                world!
              </h2>

              {/* Coding is Magic | LG */}
              <h2 className="text-2xl font-semibold text-primary mb-2 animate__animated animate__fadeInTopRight hidden lg:block">
                Coding is Magic. With coding we can help anyone in the digital
                world!
              </h2>

              <p className="animate__animated animate__fadeInRight block md:hidden lg:block">
                Banyak cara untuk mempromosikan{" "}
                <span className="text-primary font-semibold">bisnis</span>{" "}
                didunia digital, salah satunya dengan membuat{" "}
                <span className="text-primary font-semibold">website</span>.
                Dengan adanya{" "}
                <span className="text-primary font-semibold">website</span>,
                anda bisa memperkenalkan bisnis anda dengan mudah dan lebih luas
                lagi.
              </p>
              <p className="hidden animate__animated animate__fadeInLeft md:block lg:hidden">
                Banyak cara untuk mempromosikan{" "}
                <span className="text-primary font-semibold">bisnis</span>{" "}
                didunia digital, salah satunya dengan membuat{" "}
                <span className="text-primary font-semibold">website</span>.
                Dengan adanya{" "}
                <span className="text-primary font-semibold">website</span>,
                anda bisa memperkenalkan bisnis anda dengan mudah dan lebih luas
                lagi.
              </p>
            </div>
            <a
              href="#about"
              className="px-6 py-2 bg-white text-primary font-semibold rounded-full border-2 shadow-primary shadow-sm dark:hover:bg-slate-300 transition duration-500 animate__animated animate__fadeInUpBig dark:bg-primary  dark:text-white dark:border-white dark:hover:text-primary hover:bg-secondary hover:text-white border-primary dark:shadow-white dark:shadow-sm"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 lg:hidden">
          <img
            src="/profile.png"
            alt="Sandi Arba Putra"
            className="grayscale min-h-screen object-cover"
            title="profile"
          />
        </div>
      </div>

      {/* <div className="w-full min-h-screen bg-dark flex justify-center -my-16 z-10 md:hidden lg:hidden">
        <img
          src="/profile-flip.png"
          alt="Sandi Arba Putra"
          className="grayscale min-h-screen object-cover"
          title="profile"
        />
      </div> */}
    </section>
  );
};

export default Hero;

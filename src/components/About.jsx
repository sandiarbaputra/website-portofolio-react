import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-light2 dark:bg-dark2 text-dark dark:text-white px-10 md:p-0 lg:flex"
    >
      <div className="w-full min-h-screen flex items-center lg:w-8/12">
        <div className="w-full flex flex-col justify-center gap-y-4 mt-4 md:w-7/12 md:flex md:flex-col md:justify-center md:items-start md:px-10 lg:p-0 lg:flex lg:flex-row lg:items-center lg:w-6/12 lg:ps-20 pb-14">
          {/* About Me */}
          <div data-aos="fade-right" data-aos-duration="800" className="pt-8">
            <h1 className="text-3xl font-semibold text-primary lg:text-5xl mb-2">
              About Me
            </h1>
            <p className="text-base">
              Frontend Web Developer, adalah orang yang memiliki kemampuan dalam
              membuat suatu antarmuka atau user interface (UI) pada sebuah
              website.
            </p>
          </div>

          {/* About Content | MD */}
          <div
            className="w-full flex flex-col justify-center gap-y-2 bg-white text-slate-700 rounded-md shadow-md shadow-primary border-2 border-green-500 px-8 py-4 transition duration-500 z-30 overflow-hidden lg:hidden dark:bg-primary dark:text-white dark:border-white dark:border-2 dark:shadow-white"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Siapa saya?</h3>
              <p className="text-sm">
                Halo, saya Sandi Arba Putra. Berusia 19 tahun dan tinggal di
                Tangerang Banten, Indonesia. Saya adalah mahasiswa Teknik
                Informatika di Universitas Muhammadiyah Tangerang. Selain
                menjadi mahasiswa saya juga merupakan seorang freelancer,
                Frontend Web Developer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Latar Belakang?</h3>
              <p className="text-sm">
                Saya lulusan SMKN 4 TNG, dari jurusan Rekayasa Perangkat Lunak
                (RPL). Jadi saya sudah memiliki fundamental programming yang
                kuat, khususnya di Web Development. Lalu saya melanjutkan studi
                ke Teknik Informatika UMT. Saya dapat membuat website yang
                berbasis landing page, company profile, portofolio dan website
                apapun yang membutuhkan keterampilan frontend.
              </p>
            </div>
          </div>
        </div>

        {/* About Image | MD*/}
        <div
          id="image"
          className="hidden md:block md:w-5/12 md:min-h-screen md:grayscale md:hover:grayscale-0 duration-500 transition lg:hidden"
        ></div>

        {/* About Content | LG */}
        <div className="hidden lg:block lg:w-7/12 min-h-screen relative">
          <div className="lg:flex lg:items-center min-h-screen">
            {/* Kotak */}
            <div
              className="w-full h-96 bg-white text-slate-700 absolute left-36 rounded-md shadow-md shadow-white border-2 border-green-500 px-8 py-5 flex flex-col gap-y-2 justify-center z-30 overflow-hidden dark:bg-primary dark:text-white dark:border-white dark:border-2 dark:shadow-white"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">Siapa Saya?</h3>
                <p className="text-sm">
                  Halo, saya Sandi Arba Putra. Berusia 19 tahun dan tinggal di
                  Tangerang Banten, Indonesia. Saya adalah mahasiswa Teknik
                  Informatika di Universitas Muhammadiyah Tangerang. Selain
                  menjadi mahasiswa saya juga merupakan seorang freelancer,
                  Frontend Web Developer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Latar Belakang?</h3>
                <p className="text-sm">
                  Saya lulusan SMKN 4 TNG, dari jurusan Rekayasa Perangkat Lunak
                  (RPL). Jadi saya sudah memiliki fundamental programming yang
                  kuat, khususnya di Web Development. Lalu saya melanjutkan
                  studi ke Teknik Informatika UMT. Saya dapat membuat website
                  yang berbasis landing page, company profile, portofolio dan
                  website apapun yang membutuhkan keterampilan frontend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about-img"
        className="w-4/12 min-h-screen hidden lg:block grayscale hover:grayscale-0 transition duration-500"
      ></div>
    </section>
  );
};

export default About;

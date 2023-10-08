import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-dark3 text-white px-10 pt-10 pb-7 lg:px-20 flex flex-col items-start gap-y-5">
      <div className="lg:w-full flex flex-col justify-center items-start md:items-center md:flex-row gap-y-5 w-full md:px-10">
        <div className="lg:w-1/3 md:w-1/3 flex flex-col items-start">
          <img src="logo-b.png" alt="footer-logo" width={40} className="mb-2" />
          <h1 className="text-2xl font-semibold text-primary mb-2">
            Contact Me
          </h1>
          <p>+62-838-4133-0243</p>
          <p>sandiarba09@gmail.com</p>
          <p>Tanah Tinggi, Tangerang</p>
          <p>Banten, Indonesia</p>
        </div>

        <div className="lg:w-1/3 flex flex-col items-center justify-center md:w-1/3">
          <h1 className="text-2xl font-semibold text-primary lg:-ms-3">Menu</h1>
          <div className="flex flex-col">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/3 flex gap-x-2 self-center md:flex-col items-center md:items-end justify-center">
          <div className="md:flex md:flex-col md:items-center flex gap-x-2">
            <h1 className="lg:text-5xl md:text-5xl text-3xl text-primary font-bold">
              Coding
            </h1>
            <h1 className="lg:text-5xl md:text-5xl text-3xl text-primary font-bold">
              is
            </h1>
            <h1 className="lg:text-5xl md:text-5xl text-3xl text-primary font-bold">
              Fun!
            </h1>
          </div>
        </div>
      </div>

      <hr className="w-full" />

      <div className="w-full flex flex-col items-center py-5">
        <p className="text-primary">Copyright &copy; 2023 Sandi Arba Putra.</p>
        <p className="max-w-sm text-center">
          This website was built using React and TailwindCSS. Icons by{" "}
          <a href="https://icons8.com/" target="_blank" className="underline">
            Icons8.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

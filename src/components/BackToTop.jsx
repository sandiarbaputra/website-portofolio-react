import React from "react";

const BackToTop = () => {
  return (
    <div>
      <a
        href="#hero"
        id="to-top"
        className="fixed w-10 h-10 z-[999] hidden bottom-5 left-5 bg-white border-2 border-primary rounded-full text-dark hover:animate-pulse"
      >
        <img
          id="arrow-up"
          src="/icon-contact/fast-forward-b.png"
          alt="arrow-up"
          className="-rotate-90"
        />
      </a>
    </div>
  );
};

export default BackToTop;

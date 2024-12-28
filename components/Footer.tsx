import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "./data/index";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      {/* background grid */}
      <div className=" relative overflow-hidden left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à <span className="text-purple">your</span> développer
          votre site ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez moi dès aujourd&apos;hui pour avoir un devis
        </p>
        <a href="mailto:contact@alexandre.collot4@gmail.com">
          <MagicButton
            title="Contactez moi !"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Alexandre COLLOT
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}><img src={info.img} alt="icons" width={20} height={20} onClick={"https://github.com/namiday/"} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
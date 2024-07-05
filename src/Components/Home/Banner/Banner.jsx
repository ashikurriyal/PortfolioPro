import image from "../../../assets/bannerimage1.png";
import { MdOutlineSaveAlt } from "react-icons/md";
import resume from "../../../assets/DemoResume.pdf";
const Banner = () => {
  const bannerTitile = (
    <>
      <div className=" flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#FFEBDB] to-[rgba(21,21,21,0)]">
        <div className=" lg:space-y-7 space-y-3 lg:w- lg:pl-24 pl-10 text-left">
          <div className="flex flex-wrap mt-4">
            {" "}
            <button className="font-poppins font-medium border-2 w-28 h-12 hover:bg-customOrange hover:text-white hover:border-none border-black rounded-full p-2 text-sm lg:text-2xl">
              Hello!
            </button>
          </div>
          <h2 className="font-urbanist lg:font-semibold lg:text-6xl md:w-3/4 lg:w-auto text-2xl font-bold">
            Im <span className="text-customOrange">Molla Ashikur Rahman</span>
          </h2>
          <h2 className="font-urbanist dark:text-white lg:font-semibold lg:text-6xl md:w-3/4 lg:w-auto text-xl font-bold">
            Passionate Web Developer
          </h2>
          <div className="">
            <a href={resume} download="resume">
              <button className="flex items-center justify-center gap-2 font-poppins text-lg font-medium border-2 h-12 hover:bg-customOrange hover:text-white hover:border-none border-black rounded-full p-4 lg:text-2xl">
                Resume <MdOutlineSaveAlt className="md:text-4xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="flex items-center flex-col-reverse md:flex-row">
      <div className="w-full lg:h-[calc(100vh-76px)] relative">
        {bannerTitile}
      </div>
      <div className="md:absolute right-40">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;

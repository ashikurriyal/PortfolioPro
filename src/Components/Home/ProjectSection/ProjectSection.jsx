import { FaGithub } from "react-icons/fa";
import NestFinder from "../../../assets/NestFinderCover.png";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between py-4 mt-10 md:mt-0">
        <div>
          <h1 className="font-poppins lg:text-5xl text-2xl font-semibold">
            Lets have a look at <br /> my{" "}
            <span className="text-customOrange">Projects</span>
          </h1>
        </div>
        <div className="flex flex-row-reverse">
          <a href="https://github.com/ashikurriyal">
            <button className="flex items-center gap-2 font-poppins text-lg font-medium border-2 hover:bg-customOrange hover:text-white hover:border-none border-black rounded-full px-5 py-3 lg:text-2xl">
              ashikurriyal <FaGithub className="text-4xl" />
            </button>
          </a>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center gap-3">
          <div className="relative group">
            <img
              className="border-2 border-gray-800 rounded-3xl p-2"
              src={NestFinder}
              alt="Nest Finder"
            />
            <h1 className="absolute left-10 bottom-5 font-poppins text-white font-semibold md:text-6xl">
              Nest Finder
            </h1>
            <div className="absolute left-0 bottom-0 w-full flex justify-center bg-gray-500 bg-opacity-40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl">
              <div className="backdrop-blur-md p-4 rounded-lg text-center w-full">
                <h2 className="font-poppins text-lg font-semibold">Features</h2>

                <p className="mt-2 text-sm md:text-base">
                  Agents can add properties. Admins verify or reject properties.
                  Verified properties are displayed to users. Users can sort
                  properties by price. Users can search for properties by
                  location. Users can add properties to a wishlist. Users can
                  leave reviews. nly users who have wishlisted a property can
                  make an offer. Offers must be higher than the agents asking
                  price. Agents can accept offers, enabling users to buy the
                  property.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <p className="border-2 rounded-full text-center px-4 py-1 font-mont font-medium text-base text-black bg-customAsh">
              React
            </p>
            <p className="border-2 rounded-full text-center px-4 py-1 font-mont font-medium text-base text-black bg-customAsh">
              Mongodb
            </p>
            <p className="border-2 rounded-full text-center px-4 py-1 font-mont font-medium text-base text-black bg-customAsh">
              NodeJS
            </p>
            <p className="border-2 rounded-full text-center px-4 py-1 font-mont font-medium text-base text-black bg-customAsh">
              Express.js
            </p>
            <p className="border-2 rounded-full text-center px-4 py-1 font-mont font-medium text-base text-black bg-customAsh">
              Firebase
            </p>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="font-poppins font-semibold md:text-5xl text-xl">
              Nest Finder Real State Platform
            </h1>
            <a href="https://nestfinder-ce7a3.web.app/">
              <FiArrowUpRight className="md:text-5xl text-2xl bg-customOrange rounded-full text-white" />
            </a>
          </div>
          <h4 className="w-3/4 text-center font-poppins font-normal md:text-lg">
            Nest Finder is a comprehensive real estate platform designed to
            streamline the property buying process. It connects property agents,
            admins, and users in an efficient and user-friendly manner.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

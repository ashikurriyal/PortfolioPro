
import react from "../../../assets/React.png";
import bg from "../../../assets/background.jpeg";
import html from "../../../assets/Html-removebg-preview.png";
import js from "../../../assets/Javascript.png";
import css from "../../../assets/css.png";
import nodejs from "../../../assets/nodejs.png";
import firebase from "../../../assets/firebase.png";
import tailwind from "../../../assets/tailwindLogo.png";
import expressjs from "../../../assets/expressjs.png";

const ExpertiseSection = () => {
  return (
    <div className="relative mx-auto lg:space-y-10 space-y-5">
      <img src={bg} alt="" className="w-full opacity-85 rounded-[64px] h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="text-center space-y-4 mt-10 md:mt-0">
          <h1 className="font-poppins lg:text-5xl text-3xl font-medium">
            Areas of My <span className="text-customOrange">Expertise</span> &{" "}
            <span className="text-customOrange">Proficiency</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
          <div className="flex flex-col items-center p-4">
            <img className="w-24 md:w-36" src={html} alt="HTML logo" />
            <h3 className="my-3 font-poppins text-xl md:text-3xl font-semibold">HTML</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-24 md:w-36" src={css} alt="CSS logo" />
            <h3 className="my-3 font-poppins text-xl md:text-3xl font-semibold">CSS</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-24 md:w-36" src={js} alt="JavaScript logo" />
            <h3 className="my-3 font-poppins text-xl md:text-3xl font-semibold">JavaScript</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-24 md:w-36 rounded-2xl" src={tailwind} alt="Tailwind CSS logo" />
            <h3 className="my-3 font-poppins text-xl md:text-3xl font-semibold">Tailwind CSS</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-24 md:w-36" src={react} alt="React logo" />
            <h3 className="my-3 font-poppins text-xl md:text-3xl font-semibold">React</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-24 md:w-36" src={nodejs} alt="Node JS logo" />
            <h3 className="my-3 font-poppins text-xl md:text-3xl font-semibold">Node JS</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-24 md:w-36" src={firebase} alt="Firebase logo" />
            <h3 className="my-3 font-poppins text-xl md:text-3xl font-semibold">Firebase</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-24 md:w-36" src={expressjs} alt="Express.js logo" />
            <h3 className="my-3 font-poppins text-xl md:text-3xl font-semibold">Express.js</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
